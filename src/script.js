import { BuildingDrawer } from "./BuildingDrawer";
import { BuildingGenerator } from "./BuildingGenerator";


const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
const ctx = canvas.getContext('2d');

const startPos = [10, 100];
const buildingGenerator = new BuildingGenerator(...startPos);
const buildingDrawer = new BuildingDrawer(ctx, buildingGenerator);
buildingDrawer.drawBuildings();
buildingDrawer.setOffsetY(20);
buildingDrawer.drawBuildings();
