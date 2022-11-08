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

  getBuildingParts(coords) {
    const frontSide = coords.map(([x, y]) => [x - 10, y + 5]);
    const asides = frontSide.map(([x, y], i) => {
      return [
        [x, y],
        coords[i],
        coords[i + 1] ? coords[i + 1] : coords[0],
        frontSide[i + 1] ? frontSide[i + 1] : frontSide[0],
      ];
    });

    return {
      backSide: coords,
      frontSide,
      asides,
    };
  }

  drawByCoordinates(coords) {
    this.ctx.beginPath();

    coords.forEach(([x, y]) => {
      this.ctx.lineTo(x, y);
    });

    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.fill();
  }

  drawOneBuilding(coords) {
    const { frontSide, asides } = this.getBuildingParts(coords);

    //draw asides
    this.ctx.fillStyle = this.colorHelper.arrToHsl(
      this.colorHelper.darken(...this.color)
    );
    asides.forEach((rectCoords) => {
      this.drawByCoordinates(rectCoords);
    });

    //draw front side
    this.ctx.fillStyle = this.colorHelper.arrToHsl(this.color);
    this.drawByCoordinates(frontSide);
  }

  addOffsetToCoords(buildingCoords, offset) {
    const result = [];
    buildingCoords.forEach(([x, y]) => {
      result.push([x + offset.x, y + offset.y]);
    });
    return result;
  }

  getBuildingType(rowIndex) {
    if (rowIndex > this.rowCount / 3) {
      return Math.floor(Math.random() * 3 + 3); // [3; 5]
    }
    return Math.floor(Math.random() * 5 + 3); // [3; 7]
  }

  generateRowBuildings(offsetX, rowIndex) {
    const type = this.getBuildingType(rowIndex);
    let buildingCoords = this.buildingGenerator.generateBuilding(type);

    offsetX += this.getRandomOffsetX(rowIndex);
    buildingCoords = this.addOffsetToCoords(buildingCoords, {
      x: this.offset.x + offsetX,
      y: this.offset.y,
    });
    offsetX += buildingCoords[buildingCoords.length - 1][0] - buildingCoords[0][0];
    return {buildingCoords, offsetX};
  }

  drawBuildingsRow(rowIndex) {
    this.ctx.strokeStyle = 'transparent';
    let offsetX = 0;
    let buildingCoords;

    while (offsetX + this.offset.x < window.innerWidth) {
      ({ offsetX, buildingCoords } = this.generateRowBuildings(offsetX, rowIndex));
      this.drawOneBuilding(buildingCoords);
    }
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
