import { BuildingDrawer } from './BuildingDrawer';
import { drawByCoordinates } from './utils';

export class ShadowBuildingDrawer extends BuildingDrawer {
  shadowCoords = [];

  setShadowCtx(ctx) {
    this.shadowCtx = ctx;
  }

  drawOneBuilding(coords) {
    super.drawOneBuilding(coords);

    const shadowCoords = coords.map(([x, y], i) => {
      if (i === 0) {
        return [x, y];
      }
      if (coords.length - 1 === i) {
        return [x, y];
      }
      return [x + 20, y + 200];
    });
    // this.shadowCtx.fillStyle = 'black';
    drawByCoordinates(this.shadowCtx, shadowCoords);
    this.shadowCoords.push(shadowCoords);

  }

}
