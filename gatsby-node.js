const path = require("path");

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
  const { createPage } = actions;
  for (const lang of LANGUGES) {
    createPage({
      component: page.component,
      path: `${lang}${page.path}`,
    });
  }
};
