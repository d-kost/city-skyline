import {
  Building3Sides,
  Building4Sides,
  CommonBuilding,
} from './BuildingTypes';

export class BuildingGenerator {
  minWidth = 20;

  constructor(startX, startY) {
    this.startX = startX;
    this.startY = startY;
  }

  generateBuilding(sideCount) {
    CommonBuilding.defineStartPos(this.startX, this.startY);
    CommonBuilding.defineMinWidth(this.minWidth);

    switch (sideCount) {
      case 3:
        return Building3Sides.generateBuilding();
      case 4:
        return Building4Sides.generateBuilding();
      default:
        return Building3Sides.generateBuilding();
    }
  }
}
