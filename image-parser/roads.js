const fs = require("fs");
const PNG = require("pngjs").PNG;

fs.createReadStream("./roads.png")
  .pipe(new PNG())
  .on("parsed", function () {
    const getDataColor = (x, y) => {
      const idx = (this.width * y + x) << 2;
      return (
        this.data[idx] + "," + this.data[idx + 1] + "," + this.data[idx + 2]
      );
    };
    const getColors = () => {
      const set = new Set();

      for (var y = 0; y < this.height - 1; y++) {
        for (var x = 0; x < this.width - 1; x++) {
          var idx = (this.width * y + x) << 2;
          const color =
            this.data[idx] +
            "," +
            this.data[idx + 1] +
            "," +
            this.data[idx + 2];
          set.add(color);
        }
      }

      return set;
    };

    /**
     *
     * [
     *  [1, 1],
     *  [1, 2],
     *  [1, 3],
     *  [1, 4]
     * ]
     */
    const getRoad = (color) => {
      const visited = new Set();
      const path = [];

      const add = (x, y) => {
        visited.add(x + "," + y);
        path.push([x, y]);
      };

      const isVisited = (x, y) => {
        return visited.has(x + "," + y);
      };

      outer: for (var y = 0; y < this.height - 1; y++) {
        for (var x = 0; x < this.width - 1; x++) {
          var idx = (this.width * y + x) << 2;
          const _color =
            this.data[idx] +
            "," +
            this.data[idx + 1] +
            "," +
            this.data[idx + 2];
          if (color === _color) {
            add(x, y);
            break outer;
          }
        }
      }

      while (true) {
        const latestPoint = path.at(-1);
        const [x, y] = latestPoint;

        let found = false;

        if (getDataColor(x + 1, y) === color && !isVisited(x + 1, y)) {
          add(x + 1, y);
          found = true;
        }

        if (getDataColor(x - 1, y) === color && !isVisited(x - 1, y)) {
          add(x - 1, y);
          found = true;
        }

        if (getDataColor(x, y + 1) === color && !isVisited(x, y + 1)) {
          add(x, y + 1);
          found = true;
        }

        if (getDataColor(x, y - 1) === color && !isVisited(x, y - 1)) {
          add(x, y - 1);
          found = true;
        }

        if (!found) break;
      }

      const cleanUp = (path) => {
        const output = [];

        path.forEach((_, index) => {
          if (index === path.length - 1 || index === 0) return;
          const [x, y] = path[index];
          const [nextX, nextY] = path[index + 1];
          const [prevX, prevY] = path[index - 1];

          const velX = x - prevX;
          const velY = y - prevY;
          const newVelX = nextX - x;
          const newVelY = nextY - y;

          if (velX !== newVelX || velY !== newVelY) output.push([x, y]);
        });

        return output;
      };

      return cleanUp(path);
    };

    const colors = getColors();
    const WHITE = "255,255,255";

    const output = [];
    for (const color of colors) {
      if (color === WHITE) continue;
      output.push(getRoad(color));
    }
    fs.writeFileSync("roads.json", JSON.stringify(output));
  });
