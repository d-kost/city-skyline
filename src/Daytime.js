export class Daytime {
  constructor(xMax) {
    this.xMax = xMax;
    this.x = 0;
  }

  setXPosition(x) {
    this.x = x;
  }

  calculateSunPosition() {
    let y = 100;
    return [this.x, y];
  }
}
