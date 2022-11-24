export class Daytime {
  constructor(xMax, yMax) {
    this.xMax = xMax;
    this.yMax = yMax;
    this.radius = Math.round(this.xMax / 2);

    let x = Math.round(this.xMax / 2);
    let y = Math.sqrt(this.radius ** 2 - (0 - x) ** 2) - 100 + this.yMax;

    if (this.radius > y - 50) {
      y += this.radius - y + 50;
    }
    this.center = { x, y };
    this.x = 0;
  }

  setXPosition(x) {
    this.x = x;
  }

  calculateSunPosition() {
    let y =
      -Math.sqrt(this.radius ** 2 - (this.x - this.center.x) ** 2) +
      this.center.y;
    return [this.x, y];
  }
}
