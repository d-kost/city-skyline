import { BuildingDrawer } from './BuildingDrawer';
import { drawByCoordinates } from '../utils';

export class ShadowBuildingDrawer extends BuildingDrawer {
  shadowCoords = [];

  setShadowCtx(ctx) {
    this.shadowCtx = ctx;
  }

  setShadowColor(color) {
    this.shadowColor = color;
  }

  saveBuildingShadow(coords) {
    let y0 = 0;
    const shadowCoords = coords.map(([x, y], i) => {
      if (i === 0 || i === coords.length - 1) {
        y0 = y;
        return [x, y];
      }
      const diff = y0 - y;
      return [x + 20, diff + y0];
    });
    this.shadowCoords.push(shadowCoords);
  }

  drawOneBuilding(coords) {
    super.drawOneBuilding(coords);
    this.saveBuildingShadow(coords);
  }

  setShadowOffset(coords, offset) {
    return coords.map(([x, y], i) => {
      if (i === 0 || i === coords.length - 1) {
        return [x, y];
      }
      return [x - offset, y];
    });
  }

  drawShadows(offset) {
    this.shadowCtx.fillStyle = this.shadowColor;
    this.shadowCtx.strokeStyle = 'transparent';
    this.shadowCoords.forEach((shadowCoords) => {
      const newCoords = this.setShadowOffset(shadowCoords, offset);
      drawByCoordinates(this.shadowCtx, newCoords);
    });
  }

}
