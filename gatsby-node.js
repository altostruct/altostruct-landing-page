const path = require("path");
const getCanvasBuffer = require("./scripts/get-canvas-buffer");
const buildHouses = require("./scripts/build-houses");
const buildRoads = require("./scripts/build-roads");
const fs = require("fs");
const sharp = require("sharp");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@locales": path.resolve(__dirname, "locales"),
      },
    },
  });
};

const LANGUGES = ["swe", "en"];

exports.onCreatePage = async ({ actions, page, ...rest }) => {
  //
  const { createPage, deletePage } = actions;

  deletePage(page);
  createPage({
    component: page.component,
    path: `${page.path}`,
    context: {
      ...page.context,
      realPath: `${page.path}`,
      lang: "swe",
    },
  });

  for (const lang of LANGUGES) {
    if (lang === "swe") continue;

    createPage({
      component: page.component,
      path: `${lang}${page.path}`,
      context: {
        realPath: `${lang}${page.path}`,
        lang: `${lang}`,
      },
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  console.log("Building extra stuff...");

  fs.mkdirSync("static/images/city", { recursive: true });

  // const canvasBuffer = await getCanvasBuffer();
  // fs.writeFileSync("static/images/city/light.webp", canvasBuffer);

  fs.mkdirSync("src/assets", { recursive: true });
  const houses = await buildHouses("assets/houses.png");
  fs.writeFileSync("./src/assets/houses.json", JSON.stringify(houses));

  const roads = await buildRoads("assets/roads.png");
  fs.writeFileSync("./src/assets/roads.json", JSON.stringify(roads));
};
