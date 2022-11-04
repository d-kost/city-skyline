import { BuildingDrawer } from "./BuildingDrawer";
import { BuildingGenerator } from "./BuildingGenerator";


const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
const ctx = canvas.getContext('2d');

const startPos = [10, 100];
const buildingGenerator = new BuildingGenerator(...startPos);
const buildingDrawer = new BuildingDrawer(ctx, buildingGenerator);
buildingDrawer.setInitialColor([231, 44, 74]);
buildingDrawer.drawCity();

