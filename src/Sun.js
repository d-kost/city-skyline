export class Sun {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    this.ctx.fillStyle = '#ffffe3';
    this.ctx.strokeStyle = '#ffffe3';

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 25, 0, 2 * Math.PI);
    this.ctx.stroke();

    this.ctx.shadowColor = "#fffd9e";
    this.ctx.shadowBlur = 50;
    this.ctx.fill();
    this.ctx.shadowBlur = 0;
  }
}
