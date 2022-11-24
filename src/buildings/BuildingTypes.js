export class CommonBuilding {
  static sideCount = 3;
  static minWidth;
  static height;
  static startX;
  static startY;

  static defineStartPos(startX, startY) {
    this.startX = startX;
    this.startY = startY;
  }

  static defineMinWidth(minWidth) {
    this.minWidth = minWidth;
  }

  static setHeight(height) {
    this.height = height;
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
    let x = Math.floor(Math.random() * 30 + this.minWidth + x0);
    let y = i === this.sideCount - 1 ? this.startY : -Math.floor(Math.random() * 30 + this.height - 30);

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

    //TODO: magic numbers
    let y = i === 1 ? y0 - 20 : -Math.floor(Math.random() * 30 + this.height - 30);

    if (i === 2) {
      y = y0;
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

export class Building5Sides extends CommonBuilding {
  static sideCount = 5;

  static getNextCoordinates(i, x0, y0) {
    let x = Math.floor(Math.random() * 30 + this.minWidth + x0);
    let y = i === this.sideCount - 1 ? this.startY : -Math.floor(Math.random() * 30 + this.height - 30);

    if (i % 2 === 0) {
      x = x0;
    }
    if (i % 2 === 1) {
      y = y0;
    }
    return [x, y];
  }
}

export class Building3SidesWide extends CommonBuilding {
  static sideCount = 3;

  static getNextCoordinates(i, x0, y0) {
    let x = Math.floor(Math.random() * 30 + 150 + x0);
    let y = i === this.sideCount - 1 ? this.startY : y0;
    if (i === 0) {
      y = -Math.floor(Math.random() * 30 + this.height - 60);
    }

    if (i === 0 || i === this.sideCount - 1) {
      x = x0;
    }
    return [x, y];
  }
}

export class Building5SidesShort extends CommonBuilding {
  static sideCount = 5;

  static getNextCoordinates(i, x0, y0) {
    let x = x0 + 35;
    let y = i === this.sideCount - 1 ? this.startY : y0 - Math.floor(Math.random() * 30 + this.height);

    if (i % 2 === 0) {
      x = x0;
    }
    if (i % 2 === 1) {
      y = y0;
    }
    return [x, y];
  }
}
