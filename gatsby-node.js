const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@styles": path.resolve(__dirname, "src/styles"),
      },
    },
  });
};

const LANGUGES = ["swe", "en"];

exports.onCreatePage = async ({ graphql, actions, page, ...rest }) => {
  //

  const { createPage } = actions;

  for (const lang of LANGUGES) {
    console.log("Creating path for ", lang, page.path);
    createPage({
      component: page.component,
      path: `${lang}${page.path}`,
      context: {
        lang,
      },
    });
  }
};
