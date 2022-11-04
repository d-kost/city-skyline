import { ColorHelper } from './ColorHelper';

export class BuildingDrawer {
  minWidth = 20;
  offset = { x: 0, y: 150 };
  color;

  constructor(context, buildingGenerator) {
    this.ctx = context;
    this.buildingGenerator = buildingGenerator;
    this.colorHelper = new ColorHelper();
  }

  setInitialColor(color) {
    this.color = color;
  }

  setOffset(offset) {
    this.offset = offset;
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
      const sideCount = Math.floor(Math.random() * 2 + 3);
      buildingCoords = this.buildingGenerator.generateBuilding(sideCount);

      offsetX += buildingCoords[buildingCoords.length - 1][0];
      offsetX += this.getRandomOffsetX(); //TODO: it has a bug
      offsetX = step === 0 ? 0 : offsetX;

      buildingCoords = this.addOffsetToCoords(buildingCoords, {
        x: this.offset.x + offsetX,
        y: this.offset.y,
      });
      this.ctx.lineTo(...buildingCoords);
      this.drawOneBuilding(buildingCoords);
      step++;
    }

    this.ctx.strokeStyle = 'transparent';
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.fillStyle = this.colorHelper.arrToHsl(this.color);
    this.ctx.fill();
  }

  drawCity() {
    for (let i = 0; i < 5; i++) {
      const offsetX = Math.floor(Math.random() * 100 - 200);
      this.setOffset({ x: offsetX, y: this.offset.y + 20 });
      this.drawBuildingsRow();
      this.color = this.colorHelper.darken(...this.color);
    }
  }
}
