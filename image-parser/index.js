const fs = require("fs");
const PNG = require("pngjs").PNG;

const heightMap = [];

fs.createReadStream("./src.png")
  .pipe(new PNG())
  .on("parsed", function () {
    function getArea(x, y, h, data) {
      let width = 0;
      let length = 0;
      while (h === Number.parseInt(data[y]?.[x + width])) {
        width++;
      }

      while (h === Number.parseInt(data[y + length]?.[x])) {
        length++;
      }

      return [width, length];
    }

    function getBuilding(x, y, h, data) {
      const [width, length] = getArea(x, y, h, data);
      return {
        position: [x, y],
        size: [width, h, length],
      };
    }

    function eatArea(x, y, h, data) {
      const [width, length] = getArea(x, y, h, data);

      const output = [];
      for (let i = 0; i < width; i++)
        for (let p = 0; p < length; p++) output.push(x + i + "," + (y + p));

      return output;
    }

    for (var y = 0; y < this.height - 1; y++) {
      heightMap.push([]);

      for (var x = 0; x < this.width - 1; x++) {
        var idx = (this.width * y + x) << 2;
        heightMap[y][x] = 255 - this.data[idx];
      }
    }

    const output = [];
    const eatenSquares = new Set();

    for (const y in heightMap) {
      for (const x in heightMap[y]) {
        const height = heightMap[y][x];
        if (
          Number.isNaN(Number.parseInt(height)) ||
          Number.parseInt(height) === 0
        )
          continue;
        if (eatenSquares.has(x + "," + y)) continue;

        for (const eaten of eatArea(
          Number.parseInt(x),
          Number.parseInt(y),
          Number.parseInt(height),
          heightMap
        )) {
          eatenSquares.add(eaten);
        }

        output.push(
          getBuilding(
            Number.parseInt(x),
            Number.parseInt(y),
            Number.parseInt(height),
            heightMap
          )
        );
      }
      console.log(`Finished ${y}/${heightMap.length}`);
    }

    fs.writeFileSync("out.json", JSON.stringify(output));
  });
