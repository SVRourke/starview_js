// SOLLID ROTATION LOGIC FROM CODEPEN
// const drawDot = (x, y, radius=2, color="white") => {
//   ctx.beginPath();
//   ctx.arc(x, y, radius, 0, Math.PI * 2)
//   ctx.fillStyle = color;
//   ctx.fill();
// }

// function translatePoint(p, cor, theta) {
//   // translate point to new center of rotation
//   // COR (h, k)  x_s = x - h y_s = y - k
//   let translate = { x: p.x - cor.x, y: p.y - cor.y }
  
//   // Rotate around point by theta angle
//   // x_r = x_s * COS(theta) - y_s * SIN(theta)
//   // y_r = x_s * SIN(theta) + y_s * COS(theta)
//   let rotated = {
//     x: translate.x * Math.cos(theta) - translate.y * Math.sin(theta),
//     y: translate.x * Math.sin(theta) + translate.y * Math.cos(theta)
//   }
  
//   // Translate back
//   return { x: rotated.x + cor.x, y: rotated.y + cor.y }
// }

// function drawFrameFromPoints() {
//   drawDot(center.x, center.y, 8, 'blue')
//   points.forEach(p => drawDot(p.x, p.y))
// }



// const canvas = document.getElementById("canv");
// const ctx = canvas.getContext("2d");

// let center = { x: (canvas.width / 2) + 100, y: canvas.height }

// let points = [
//   { x: (canvas.width / 2), y: (canvas.height / 2) + 50 },
//   { x: (canvas.width / 3), y: (canvas.height / 5) + 50 },
//   { x: (canvas.width / 5), y: (canvas.height / 4) + 50 },
//   { x: (canvas.width), y: (canvas.height / 2) + 50 },
//   { x: (canvas.width + 400), y: (canvas.height / 2) + 50 },
  
// ]


// let theta = 0.002;

// setInterval(function() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height)
//   points = points.map(p => translatePoint(p, center, theta))
//   drawFrameFromPoints();
// }, 10)

// SOLID STAR LOGIC FROM CODEPEN

// const drawDot = (x, y, radius=2, color="black") => {
//   ctx.beginPath();
//   ctx.arc(x, y, radius, 0, Math.PI * 2)
//   ctx.fillStyle = color;
//   ctx.fill();
// }

// const zoomPoint = (p, s, c) => {
//   return { x: c.x + (p.x - c.x) * s, y: c.y + (p.y - c.y) * s }
// }

// let translatePoint = (p, r) => {
//   return { x: p.x - r.x, y: p.y - r.y }
// }

// // angle: theta
// // x' = x cos theta - y sin theta
// // y' = x sin theta + y cos theta
// const rotatePoint = (p, theta) => {
//   let [sT, cT] = [Math.sin(theta), Math.cos(theta)];
//   let result = { x: (p.x * cT) - (p.y * sT), y: (p.x * sT) + (p.y * cT) }
//   return result
// }

// const rotatePoints = (points, theta, rotation_point) => {
//   return points.map((p) => {
//     let translatedPoint = translatePoint(p, rotation_point)
//     return rotatePoint(translatedPoint, theta)
//   })
// }

// const drawPoints = (points) => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height)
//   points.forEach((p) => {
//     let x = p.x * -1;
//     let y = p.y * -1;
//     drawDot(x + 1500, y + 150)
//   })
// }

// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");

// const center = { x: -1, y: -1}
// const scale = 17
// const theta = -0.0000001
// const rotation_point = { x: 10, y: 5 }

// let zoomedPoints = points.map(p => zoomPoint(p, scale, center)) 
// setInterval(() => {
//   zoomedPoints = rotatePoints(zoomedPoints, theta, rotation_point);
//   console.log(zoomedPoints)
//   drawPoints(zoomedPoints);
// }, 200)

