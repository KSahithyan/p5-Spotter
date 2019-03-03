class Spot {
  // this.x = constrain(width/2, 0, width);
  // this.y = constrain(height/2, 0, height);

  constructor(x_, y_) {
    this.x = x_;
    this.y = y_;
    // this.default_stroke = color(255);
    // this.error_stroke = color(255, 0, 0);
  }

  move(direction) {
    stroke(default_stroke);
    if (direction == -1) {
      var direction = floor(random(4));
    }
    // console.log(direction);
    // this.d = floor(random(60));
    switch (direction) {
      case 0:
        var newPoint = createVector(this.x + d, this.y);
        if (this.notValid(newPoint)) {
          stroke(error_stroke);
        }
        this.x = this.x + d; // Move Right
        break;
      case 1:
        var newPoint = createVector(this.x - d, this.y);
        if (this.notValid(newPoint)) {
          stroke(error_stroke);
        }
        this.x = this.x - d; // Move Left
        break;
      case 2:
        var newPoint = createVector(this.x, this.y - d);
        if (this.notValid(newPoint)) {
          stroke(error_stroke);
        }
        this.y = this.y - d; // Move Up
        break;
      case 3:
        var newPoint = createVector(this.x, this.y + d);
        if (this.notValid(newPoint)) {
          stroke(error_stroke);
        }
        this.y = this.y + d; // Move Down
        break;
      default:
        break;
    }

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
    this.draw();
  }

  notValid(xpoint) {
    var valid = true;

    for (var i = 0; i < pixels.length; i++) {
      if (pixels[i].x == xpoint.x && xpoint.y == pixels[i].y) {
        // console.log("Found one illegal point");
        // console.log('Wrong :- ' + wrong);
        wrong++;
        valid = false;
        break;
      }
    }

    return !valid;
  }

  draw() {
    strokeWeight(2);
    point(this.x, this.y);
  }
}
