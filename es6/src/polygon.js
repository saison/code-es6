//Abstract super class Polygon
export class Polygon {

  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
}

export class Rectangle extends Polygon {

  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
  }

  get area() { return this.height * this.width;}
}

export class Square extends Polygon {
  constructor(arg) {
    super(arg, arg);
    this.name = "Square";
  }

  get area() { return this.height * this.height;}
}

export class Circle extends Polygon {
  constructor(arg) {
    super(arg+arg, arg+arg);
    this.name = "Circle";
    this.arg = arg;
  }

  get area() { return Math.PI * (this.arg * this.arg);}
}
