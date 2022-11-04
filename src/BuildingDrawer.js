export class BuildingDrawer {
  minWidth = 50;
  offsetY = 0;

  constructor(context, buildingGenerator) {
    this.ctx = context;
    this.buildingGenerator = buildingGenerator;
  }

  setOffsetY(offsetY) {
    this.offsetY = offsetY;
  }

  setMinWidth(minWidth) {
    this.minWidth = minWidth;
  }

  getRandomOffsetX() {
    return Math.floor(Math.random() * this.minWidth + 30);
  }

  drawOneBuilding(coords) {
    coords.forEach(([x, y]) => {
      this.ctx.lineTo(x, y);
    });
  }

  addOffsetToCoords(buildingCoords, offset) {
    const result = [];
    buildingCoords.forEach(([x, y]) => {
      result.push([x + offset.x, y + offset.y]);
    });
    return result;
  }

  drawBuildings() {
    this.ctx.beginPath();
    let offsetX = 0;
    let step = 0;

    let buildingCoords;

    while (offsetX < window.innerWidth) {
      buildingCoords = this.buildingGenerator.generateBuilding();

      offsetX += buildingCoords[buildingCoords.length - 1][0];
      offsetX += this.getRandomOffsetX(); //TODO: it has a bug
      offsetX = step === 0 ? 0 : offsetX;

      buildingCoords = this.addOffsetToCoords(buildingCoords, {
        x: offsetX,
        y: this.offsetY,
      });
      this.ctx.lineTo(...buildingCoords);
      this.drawOneBuilding(buildingCoords);
      step++;
    }

    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.fillStyle = `hsl(231, 44%, 74%)`;
    this.ctx.fill();
  }
}
