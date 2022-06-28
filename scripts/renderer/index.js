const express = require("express");
const fs = require("fs");
const { fileURLToPath } = require("url");
const { dirname } = require("path");
const esbuild = require("esbuild");

const html = () => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
    <script>
      window.PREVIEW = true;
    </script>
    <script src="out.js"></script>
    <script></script>
  </body>
</html>
`;

const jsx = (path) => `
import * as React from "react";
import ReactDOM from "react-dom";
import Component from "${path}";

ReactDOM.hydrate(<Component />, document.getElementById("root"));
`;

async function render(path) {
  // Creates a tmp

  const dir = __dirname;
  const tmpDir = dir + "/.tmp";
  const htmlIndex = tmpDir + "/index.html";
  const jsxFile = tmpDir + "/index.jsx";
  const bundledFile = tmpDir + "/out.js";

  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);
  fs.writeFileSync(htmlIndex, html());
  fs.writeFileSync(jsxFile, jsx(path));

  const app = express();

  esbuild.buildSync({
    bundle: true,
    entryPoints: [jsxFile],
    outfile: bundledFile,
  });

  app.use(express.static(tmpDir));

  const server = await new Promise((res) => {
    const server = app.listen(9999, () => {
      console.log("Listening on port...");

      res(server);
    });
  });

  return () => {
    server.close();
    fs.rmSync(htmlIndex);
    fs.rmSync(bundledFile);
    fs.rmSync(jsxFile);
    fs.rmdirSync(tmpDir);
  };
}

module.exports = render;
