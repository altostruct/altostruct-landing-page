import * as path from "path";
import * as fs from "fs";

function listAllFilesInDirectory(dir) {
  const files = [];

  fs.readdirSync(dir).forEach((file) => {
    const absolute = path.join(dir, file);
    if (fs.statSync(absolute).isDirectory()) {
      files.push(...listAllFilesInDirectory(absolute));
    } else {
      files.push(absolute);
    }
  });
  return files;
}

export default listAllFilesInDirectory;
