import contentful from "contentful";
import addData from "../utils/addData.mjs";
import fetch from "node-fetch";
import dotenv from "dotenv"

dotenv.config();

async function loadAssets(contentType, path) {
  console.log("Fetching " + contentType + " from contentful");

  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const enPosts = await client.getEntries({
    content_type: contentType,
    limit: 999,
    locale: "en-US",
  });

  const swePosts = await client.getEntries({
    content_type: contentType,
    limit: 999,
    locale: "sv",
  });

  const allPosts = [...enPosts.items, ...swePosts.items];

  addData(`contentful/${path}/all.json`, JSON.stringify(allPosts));

  // Fetches posts
  const images = await client.getAssets({
    limit: 999,
  });

  for (const item of images.items) {
    const buffer = await fetch("http:" + item.fields.file.url).then((v) =>
      v.buffer()
    );

    const ext = item.fields.file.contentType.split("/")[1];

    addData("contentful/assets/" + item.sys.id + ".json", JSON.stringify(item));
    addData("contentful/assets/by/id/" + item.sys.id, buffer);
    addData("contentful/assets/by/name/" + item.fields.file.fileName, buffer);

    addData("contentful/images/" + item.sys.id + "." + ext, buffer, {
      folder: "public",
    });
  }
}

async function execute() {
  await loadAssets("kunskapsbas", "posts");
  await loadAssets("project", "projects");
}

export default execute;
