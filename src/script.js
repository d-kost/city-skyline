import { BuildingDrawer } from './BuildingDrawer';
import { BuildingGenerator } from './BuildingGenerator';

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

const grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
grd.addColorStop(0, '#80deea');
grd.addColorStop(0.37, '#ffccbc');
grd.addColorStop(1, '#ff8a80');
ctx.fillStyle = grd;
ctx.fillRect(0, 0, canvas.width, canvas.height);

const startPos = [10, 100];
const buildingGenerator = new BuildingGenerator(...startPos);
const buildingDrawer = new BuildingDrawer(ctx, buildingGenerator);
buildingDrawer.setInitialColor([231, 44, 74]);
buildingDrawer.drawCity();
