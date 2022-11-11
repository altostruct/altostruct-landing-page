import contentful from "contentful";
import addData from "../utils/addData.mjs";
import fetch from "node-fetch";

async function execute() {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // Fetches posts
  const posts = await client.getEntries({
    content_type: "kunskapsbas",
    limit: 999,
  });

  for (const item of posts.items) {
    addData("contentful/posts/" + item.sys.id + ".json", JSON.stringify(item));
  }

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
  }

  const reactWidgets = await client.getEntries({
    limit: 999,
    content_type: "widget",
  });

  for (const item of reactWidgets.items) {
    console.log(item);
    addData(
      "contentful/react-widgets/" + item.sys.id + ".tsx",
      item.fields.code
    );
  }
}

export default execute;
