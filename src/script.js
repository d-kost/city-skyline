import { ShadowBuildingDrawer } from './buildings/ShadowBuildingDrawer';
import { BuildingGenerator } from './buildings/BuildingGenerator';
import Canvas from './Canvas';
import { gradientBottom } from './utils';
import { Sun } from './Sun';
import { Daytime } from './Daytime';

let animationFrameId = 0;

const startCityAnimation = (buildingDrawer, shadowCanvas) => {
  const width = shadowCanvas.domCanvas.width;
  const height = shadowCanvas.domCanvas.height;

  let xPosition = height > width ? 0 : 150;
  const sun = new Sun(shadowCanvas.ctx);
  const daytime = new Daytime(width, height);

  const redrawShadows = () => {
    shadowCanvas.ctx.clearRect(0, 0, width, height);
    shadowCanvas.setCanvasBackground();

    daytime.setXPosition(xPosition);
    sun.setPosition(...daytime.calculateSunPosition());
    sun.draw();
    const shadowOffset = daytime.calculateShadowOffset();
    buildingDrawer.drawShadows(shadowOffset);
    xPosition++;
    if (xPosition < shadowCanvas.domCanvas.width + 150) {
      animationFrameId = requestAnimationFrame(redrawShadows);
    }
  }
  animationFrameId = requestAnimationFrame(redrawShadows);
}

const generate = (cityCanvas, shadowsCanvas) => {
  const startPos = [10, 100];
  const buildingGenerator = new BuildingGenerator(...startPos);
  const buildingDrawer = new ShadowBuildingDrawer(cityCanvas.ctx, buildingGenerator);
  buildingDrawer.setOffset({ ...buildingDrawer.offset, y: cityCanvas.domCanvas.height / 2 });
  buildingDrawer.setShadowCtx(shadowsCanvas.ctx);
  buildingDrawer.setInitialColor([231, 44, 74]);
  buildingDrawer.setShadowColor(gradientBottom);
  buildingDrawer.drawCity();
  
  cancelAnimationFrame(animationFrameId);
  startCityAnimation(buildingDrawer, shadowsCanvas);
};

const redraw = (canvas, shadowsCanvas) => {
  canvas.ctx.clearRect(0, 0, canvas.domCanvas.width, canvas.domCanvas.height);
  shadowsCanvas.ctx.clearRect(0, 0, canvas.domCanvas.width, canvas.domCanvas.height);
  generate(canvas, shadowsCanvas);
}

const setDebouncedResizeListener = (callback) => {
  let timeout = false;
  window.addEventListener('resize', () => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, 250);
  });
}

const domContentLoaded = () => {
  const shadowsCanvas = new Canvas('shadowsCanvas');
  
  const cityCanvas = new Canvas('cityCanvas');
  redraw(cityCanvas, shadowsCanvas)

  const generateBtn = document.querySelector('.generate-btn');
  generateBtn.addEventListener('click', () => redraw(cityCanvas, shadowsCanvas));

  setDebouncedResizeListener(() => {
    shadowsCanvas.updateSize();
    cityCanvas.updateSize();
    redraw(cityCanvas, shadowsCanvas);
  });
};

document.addEventListener('DOMContentLoaded', domContentLoaded);
