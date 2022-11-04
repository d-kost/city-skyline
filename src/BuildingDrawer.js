import { ColorHelper } from './ColorHelper';

export class BuildingDrawer {
  minWidth = 50;
  offsetY = 0;
  color;

  constructor(context, buildingGenerator) {
    this.ctx = context;
    this.buildingGenerator = buildingGenerator;
    this.colorHelper = new ColorHelper();
  }

  setInitialColor(color) {
    this.color = color;
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

  drawBuildingsRow() {
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

    this.ctx.fillStyle = this.colorHelper.arrToHsl(this.color);
    this.ctx.fill();
  }

  drawCity() {
    for (let i = 0; i < 5; i++) {
      this.setOffsetY(i * 20);
      this.drawBuildingsRow();
      this.color = this.colorHelper.darken(...this.color);
    }
  }
}
