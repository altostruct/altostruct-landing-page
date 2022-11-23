import fs from "fs";
import listAllFilesInDirectory from "./utils/listAllFilesInDirectory.mjs";

function postBuild() {
  console.log(">>>>>>>> MOVING FILES TO S3 STRUCTURE <<<<<<<<");

  const files = listAllFilesInDirectory("out");
  for (const file of files) {
    if (file.endsWith(".html") && !file.endsWith("index.html")) {
      const path = file.replace(".html", "");
      const buffer = fs.readFileSync(file);

      if (!fs.existsSync(path)) fs.mkdirSync(path);
      console.log(path + "/index.html");
      fs.rmSync(file);
      fs.writeFileSync(path + "/index.html", buffer);
    }
  }
}

postBuild();
