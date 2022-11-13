import { BuildingDrawer } from './BuildingDrawer';
import { BuildingGenerator } from './BuildingGenerator';
import Canvas from './Canvas';

const generate = (ctx) => {
  const startPos = [10, 100];
  const buildingGenerator = new BuildingGenerator(...startPos);
  const buildingDrawer = new BuildingDrawer(ctx, buildingGenerator);
  buildingDrawer.setInitialColor([231, 44, 74]);
  buildingDrawer.drawCity();
};

const redraw = (canvas) => {
  canvas.ctx.clearRect(0, 0, canvas.domCanvas.width, canvas.domCanvas.height);
  canvas.setCanvasBackground();
  generate(canvas.ctx);
}

const domContentLoaded = () => {
  const canvas = new Canvas('canvas');
  redraw(canvas)

  const generateBtn = document.querySelector('.generate-btn');
  generateBtn.addEventListener('click', () => redraw(canvas));
};

document.addEventListener('DOMContentLoaded', domContentLoaded);
