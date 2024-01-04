// import dotenv from "dotenv";
// import buildHouses from "./services/buildHouses.mjs";
import contentful from "./services/contentful.mjs";

// dotenv.config({ path: ".env.local" });
// dotenv.config(".env.production");

async function execute() {
  console.log(">>>>>> FETCHING DATA FROM CONTENTFUL <<<<<<");
  await contentful();
}

execute();
