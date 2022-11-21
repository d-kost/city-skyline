import { ShadowBuildingDrawer } from './ShadowBuildingDrawer';
import { BuildingDrawer } from './BuildingDrawer';
import { BuildingGenerator } from './BuildingGenerator';
import Canvas from './Canvas';

const generate = (ctx, shadowsCtx) => {
  const startPos = [10, 100];
  const buildingGenerator = new BuildingGenerator(...startPos);
  const buildingDrawer = new ShadowBuildingDrawer(ctx, buildingGenerator);
  buildingDrawer.setShadowCtx(shadowsCtx);
  buildingDrawer.setInitialColor([231, 44, 74]);
  buildingDrawer.drawCity();
};

const redraw = (canvas, shadowsCanvas) => {
  canvas.ctx.clearRect(0, 0, canvas.domCanvas.width, canvas.domCanvas.height);
  shadowsCanvas.ctx.clearRect(0, 0, canvas.domCanvas.width, canvas.domCanvas.height);
  shadowsCanvas.setCanvasBackground();
  generate(canvas.ctx, shadowsCanvas.ctx);
}

const domContentLoaded = () => {
  const shadowsCanvas = new Canvas('shadowsCanvas');
  
  const cityCanvas = new Canvas('cityCanvas');
  redraw(cityCanvas, shadowsCanvas)

  const generateBtn = document.querySelector('.generate-btn');
  generateBtn.addEventListener('click', () => redraw(cityCanvas, shadowsCanvas));
};

document.addEventListener('DOMContentLoaded', domContentLoaded);
