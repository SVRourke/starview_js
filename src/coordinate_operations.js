const coordinateOperations = {

}

export { coordinateOperations }

const zoomPoint = (p, s, c) => {
  return { x: c.x + (p.x - c.x) * s, y: c.y + (p.y - c.y) * s }
}

let translatePoint = (p, r) => {
  return { x: p.x - r.x, y: p.y - r.y }
}

const rotatePoints = (points, theta, rotation_point) => {
  return points.map((p) => {
    let translatedPoint = translatePoint(p, rotation_point)
    return rotatePoint(translatedPoint, theta)
  })
}

function translatePoint(p, cor, theta) {
  // translate point to new center of rotation
  // COR (h, k)  x_s = x - h y_s = y - k
  let translate = { x: p.x - cor.x, y: p.y - cor.y }
  
  // Rotate around point by theta angle
  // x_r = x_s * COS(theta) - y_s * SIN(theta)
  // y_r = x_s * SIN(theta) + y_s * COS(theta)
  let rotated = {
    x: translate.x * Math.cos(theta) - translate.y * Math.sin(theta),
    y: translate.x * Math.sin(theta) + translate.y * Math.cos(theta)
  }
  
  // Translate back
  return { x: rotated.x + cor.x, y: rotated.y + cor.y }
}