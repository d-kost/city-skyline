import {
  Building3Sides,
  Building4Sides,
  Building6Sides,
  Building7Sides,
  CommonBuilding,
} from './BuildingTypes';

export class BuildingGenerator {
  minWidth = 20;
  height = 100;

  constructor(startX, startY) {
    this.startX = startX;
    this.startY = startY;
  }

  setHeight(height) {
    this.height = height;
  }

  generateBuilding(sideCount) {
    CommonBuilding.defineStartPos(this.startX, this.startY);
    CommonBuilding.defineMinWidth(this.minWidth);
    CommonBuilding.setHeight(this.height);

    switch (sideCount) {
      case 3:
        return Building3Sides.generateBuilding();
      case 4:
        return Building4Sides.generateBuilding();
      case 6:
        return Building6Sides.generateBuilding();
      case 7:
        return Building7Sides.generateBuilding();
      default:
        return Building4Sides.generateBuilding();
    }
  }
}
