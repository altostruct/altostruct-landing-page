import contentful from "contentful";
import addData from "../utils/addData.mjs";
import fetch from "node-fetch";

async function execute() {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const enPosts = await client.getEntries({
    content_type: "kunskapsbas",
    limit: 999,
    locale: "en-US",
  });

  const swePosts = await client.getEntries({
    content_type: "kunskapsbas",
    limit: 999,
    locale: "sv",
  });

  const allPosts = [...enPosts.items, ...swePosts.items];

  addData("contentful/posts/all.json", JSON.stringify(allPosts));

  // Fetches posts
  const images = await client.getAssets({
    limit: 999,
  });

  for (const item of images.items) {
    const buffer = await fetch("http:" + item.fields.file.url).then((v) =>
      v.buffer()
    );

    addData("contentful/assets/" + item.sys.id + ".json", JSON.stringify(item));
    addData("contentful/assets/by/id/" + item.sys.id, buffer);
    addData("contentful/assets/by/name/" + item.fields.file.fileName, buffer);
    addData("contentful/images/" + item.sys.id, buffer, {
      folder: "public",
    });
  }

  const reactWidgets = await client.getEntries({
    limit: 999,
    content_type: "widget",
  });

  for (const item of reactWidgets.items) {
    addData(
      "contentful/react-widgets/" + item.sys.id + ".tsx",
      item.fields.code
    );
  }
}

export default execute;
