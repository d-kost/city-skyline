export class BuildingGenerator {
  minWidth = 30;
  sideCount = 3;

  constructor(startX, startY) {
    this.startX = startX;
    this.startY = startY;
  }

  getNextCoordinates(i, x0, y0) {
    let x = Math.floor(Math.random() * 70 + this.minWidth + x0);
    let y = i === this.sideCount - 1 ? this.startY : Math.floor(Math.random() * 50);

    if (i === 0 || i === this.sideCount - 1) {
      x = x0;
    }
    return [x, y];
  }

  generateBuilding() {
    let current = [this.startX, this.startY];
    let coordinates = [current];
    for (let i = 0; i < this.sideCount; i++) {
      current = this.getNextCoordinates(i, ...current);
      coordinates.push(current);
    }
    return coordinates;
  }
}
