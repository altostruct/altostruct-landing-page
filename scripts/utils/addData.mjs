import * as fs from "fs";

function addData(key, data, config = {}) {
  if (!fs.existsSync(".data")) {
    fs.mkdirSync(".data");
  }

  const pathKey = key.split("/").slice(0, -1);

  let oP = config.folder || ".data";
  let path = oP;

  for (const p of pathKey) {
    path += "/" + p;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  }

  fs.writeFileSync(oP + "/" + key, data);
}

export default addData;
