import { gradientBottom } from "./utils";

export default class Canvas {
  constructor(id) {
    this.domCanvas = document.getElementById(id);
    this.domCanvas.width = window.innerWidth;
    this.domCanvas.height = window.innerHeight;
    this.ctx = this.domCanvas.getContext('2d');
  }

  updateSize() {
    this.domCanvas.width = window.innerWidth;
    this.domCanvas.height = window.innerHeight;
  }

  setCanvasBackground() {
    const grd = this.ctx.createLinearGradient(0, 0, 0, this.domCanvas.height);
    grd.addColorStop(0, '#80deea');
    grd.addColorStop(0.37, '#ffccbc');
    grd.addColorStop(1, gradientBottom);
    this.ctx.fillStyle = grd;
    this.ctx.fillRect(0, 0, this.domCanvas.width, this.domCanvas.height);
  }
}
