import { ShadowBuildingDrawer } from './buildings/ShadowBuildingDrawer';
import { BuildingGenerator } from './buildings/BuildingGenerator';
import Canvas from './Canvas';
import { gradientBottom } from './utils';
import { Sun } from './Sun';
import { Daytime } from './Daytime';

let animationFrameId = 0;

const startShadowsAnimation = (buildingDrawer, shadowCanvas) => {
  let offset = 0;
  const sun = new Sun(shadowCanvas.ctx);
  const daytime = new Daytime(shadowCanvas.width);

  const redrawShadows = () => {
    shadowCanvas.ctx.clearRect(0, 0, shadowCanvas.width, shadowCanvas.height);
    shadowCanvas.setCanvasBackground();

    daytime.setXPosition(offset);
    sun.setPosition(...daytime.calculateSunPosition());
    sun.draw();
    buildingDrawer.drawShadows(offset);
    offset++;
    // animationFrameId = requestAnimationFrame(redrawShadows);
  }
  animationFrameId = requestAnimationFrame(redrawShadows);
}

const generate = (cityCanvas, shadowsCanvas) => {
  const startPos = [10, 100];
  const buildingGenerator = new BuildingGenerator(...startPos);
  const buildingDrawer = new ShadowBuildingDrawer(cityCanvas.ctx, buildingGenerator);
  buildingDrawer.setShadowCtx(shadowsCanvas.ctx);
  buildingDrawer.setInitialColor([231, 44, 74]);
  buildingDrawer.setShadowColor(gradientBottom);
  buildingDrawer.drawCity();
  
  cancelAnimationFrame(animationFrameId);
  startShadowsAnimation(buildingDrawer, shadowsCanvas);
};

const redraw = (canvas, shadowsCanvas) => {
  canvas.ctx.clearRect(0, 0, canvas.domCanvas.width, canvas.domCanvas.height);
  shadowsCanvas.ctx.clearRect(0, 0, canvas.domCanvas.width, canvas.domCanvas.height);
  generate(canvas, shadowsCanvas);
}

const domContentLoaded = () => {
  const shadowsCanvas = new Canvas('shadowsCanvas');
  
  const cityCanvas = new Canvas('cityCanvas');
  redraw(cityCanvas, shadowsCanvas)

  const generateBtn = document.querySelector('.generate-btn');
  generateBtn.addEventListener('click', () => redraw(cityCanvas, shadowsCanvas));
};

document.addEventListener('DOMContentLoaded', domContentLoaded);
