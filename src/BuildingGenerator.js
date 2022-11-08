import {
  Building3Sides,
  Building3SidesWide,
  Building4Sides,
  Building5Sides,
  Building5SidesShort,
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

  generateBuilding(type) {
    CommonBuilding.defineStartPos(this.startX, this.startY);
    CommonBuilding.defineMinWidth(this.minWidth);
    CommonBuilding.setHeight(this.height);

    switch (type) {
      case 3:
        return Building3Sides.generateBuilding();
      case 4:
        return Building4Sides.generateBuilding();
      case 5:
        return Building5Sides.generateBuilding();
      case 6:
        return Building3SidesWide.generateBuilding();
      case 7:
        return Building5SidesShort.generateBuilding();
      default:
        return Building4Sides.generateBuilding();
    }
  }
}
