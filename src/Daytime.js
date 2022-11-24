export class Daytime {
  constructor(xMax, yMax) {
    this.xMax = xMax;
    this.yMax = yMax;
    this.radius = Math.round(xMax / 2);

    let x = Math.round(xMax / 2);
    //by circle formula
    let y = Math.sqrt(this.radius ** 2 - (0 - x) ** 2) - 100 + yMax;

    //for small screens
    if (xMax < yMax) {
      y = this.radius;
      this.radius += 100;
    }

    //50 - the sun will be below the top of the screen
    const padding = 50;
    if (this.radius > y - padding) {
      y += this.radius - y + padding;
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

    if (y > this.yMax / 2) {
      return [];
    }
    return [this.x, y];
  }

  calculateShadowOffset() {
    return (this.center.x - this.x) * 0.2;
  }
}
