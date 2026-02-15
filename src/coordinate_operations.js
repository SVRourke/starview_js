class CoordinateManager {
  constructor(coordinates) {
    this.coordinates = coordinates
  }

  zoomPoint(p, s, c) {
    return { x: c.x + (p.x - c.x) * s, y: c.y + (p.y - c.y) * s }
  }

  // translate point to new center of rotation
  // COR (h, k)  x_s = x - h y_s = y - k
  translatePoint({x, y}, {x: h, y: k}) {
    return { x: x - h, y: y - k }
  }

  detranslatePoint({x, y}, {x: h, y: k}) {
    return { x: x + h, y: y + k }
  }

  toRadians(a) {
    return a * (Math.PI / 180)
  }

  // Rotate around point by theta angle
  // x_r = x_s * COS(theta) - y_s * SIN(theta)
  // y_r = x_s * SIN(theta) + y_s * COS(theta)
  rotatePoint({x, y}, theta) {
    let radians = theta;
    //let radians = this.toRadians(theta);
    let COSt = Math.cos(radians);
    let SINt = Math.sin(radians);
    return {
      x: x * COSt - y * SINt,
      y: x * SINt + y * COSt
    }
  }

  processPoint(p, rotation_point, theta) {
    let translatedPoint = this.translatePoint(p, rotation_point);
    let rotated = this.rotatePoint(translatedPoint, theta);
    // return rotated
    return this.detranslatePoint(rotated, rotation_point)
  }

  rotatePoints(theta, rotation_point) {
    this.coordinates = this.coordinates.map((p) => {
      return this.processPoint(p, rotation_point, theta)
    })
  }

  get
  points() {
    return this.coordinates
  }
}

export { CoordinateManager }

