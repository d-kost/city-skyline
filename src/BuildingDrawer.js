import { ColorHelper } from './ColorHelper';

export class BuildingDrawer {
  minWidth = 20;
  offset = { x: 0, y: 250 };
  rowCount = 10;
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

  getRandomOffsetX(step) {
    return Math.floor(Math.random() * this.minWidth + step * 30);
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

  getSideCount(rowIndex) {
    if (rowIndex > this.rowCount / 3) {
      return Math.floor(Math.random() * 3 + 3); // [3; 5]
    }
    return Math.floor(Math.random() * 5 + 3); // [3; 7]
  }

  drawBuildingsRow(rowIndex) {
    this.ctx.beginPath();
    let offsetX = 0;

    let buildingCoords;

    while (offsetX < window.innerWidth) {
      const sideCount = this.getSideCount(rowIndex);
      buildingCoords = this.buildingGenerator.generateBuilding(sideCount);

      offsetX += this.getRandomOffsetX(rowIndex);
      buildingCoords = this.addOffsetToCoords(buildingCoords, {
        x: this.offset.x + offsetX,
        y: this.offset.y,
      });
      offsetX += buildingCoords[buildingCoords.length - 1][0] - buildingCoords[0][0];

      this.ctx.lineTo(...buildingCoords);
      this.drawOneBuilding(buildingCoords);
    }

    this.ctx.strokeStyle = 'transparent';
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.fillStyle = this.colorHelper.arrToHsl(this.color);
    this.ctx.fill();
  }

  drawCity() {
    for (let i = this.rowCount - 1; i >= 0; i--) {
      this.buildingGenerator.setHeight(Math.floor(Math.random() * 12 * i + 30));
      const offsetX = Math.floor(Math.random() * 100 - 200);
      this.setOffset({ x: offsetX, y: this.offset.y + 5 });
      this.drawBuildingsRow(i);
      this.color = this.colorHelper.darken(...this.color);
    }
  }
}
