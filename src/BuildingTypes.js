export class CommonBuilding {
  static sideCount = 3;
  static minWidth;
  static startX;
  static startY;

  static defineStartPos(startX, startY) {
    this.startX = startX;
    this.startY = startY;
  }

  static defineMinWidth(minWidth) {
    this.minWidth = minWidth;
  }

  static getNextCoordinates(i, x0, y0) {
    return [x0, y0];
  }

  static generateBuilding() {
    let current = [this.startX, this.startY];
    let coordinates = [current];
    for (let i = 0; i < this.sideCount; i++) {
      current = this.getNextCoordinates(i, ...current);
      coordinates.push(current);
    }
    return coordinates;
  }
}

export class Building3Sides extends CommonBuilding {
  static sideCount = 3;

  static getNextCoordinates(i, x0, y0) {
    let x = Math.floor(Math.random() * 70 + this.minWidth + x0);
    let y = i === this.sideCount - 1 ? this.startY : Math.floor(Math.random() * 50);

    if (i === 0 || i === this.sideCount - 1) {
      x = x0;
    }
    return [x, y];
  }
}

export class Building4Sides extends CommonBuilding {
  static sideCount = 4;

  static getNextCoordinates(i, x0, y0) {
    //TODO: refactor, make different height
    let x;
    if (i === 1 || i === 2) {
      x = x0 + 20;
    }

    let y = Math.floor(Math.random() * 50);

    if (i === 1) {
      y = y0 - 60;
    }

    if (i === 2) {
      y = y0 + 60;
    }

    if (i === this.sideCount - 1) {
      y = this.startY;
    }

    if (i === 0 || i === this.sideCount - 1) {
      x = x0;
    }
    return [x, y];
  }
}
