export class BuildingDrawer {
  minWidth = 50;

  constructor(context, buildingGenerator) {
    this.ctx = context;
    this.buildingGenerator = buildingGenerator;
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

  addOffsetXToCoords(buildingCoords, offset) {
    const result = [];
    buildingCoords.forEach(([x, y]) => {
      result.push([x + offset, y]);
    });
    return result;
  }

  drawBuildings() {
    this.ctx.beginPath();
    let offset = 0;
    let step = 0;

    let buildingCoords = this.buildingGenerator.generateBuilding();

    while (offset < window.innerWidth) {
      buildingCoords = this.buildingGenerator.generateBuilding();

      offset += buildingCoords[buildingCoords.length - 1][0];
      offset += this.getRandomOffsetX(); //TODO: it has a bug
      offset = step === 0 ? 0 : offset;

      buildingCoords = this.addOffsetXToCoords(buildingCoords, offset);
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
