import * as fs from "fs";

function addData(key, data) {
  if (!fs.existsSync(".data")) {
    fs.mkdirSync(".data");
  }

  const pathKey = key.split("/").slice(0, -1);

  let path = ".data";

  for (const p of pathKey) {
    path += "/" + p;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  }

  fs.writeFileSync(".data/" + key, data);
}

export default addData;
