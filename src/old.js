// SOLLID ROTATION LOGIC FROM CODEPEN
const drawDot = (x, y, radius=2, color="white") => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2)
  ctx.fillStyle = color;
  ctx.fill();
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

function drawFrameFromPoints() {
  drawDot(center.x, center.y, 8, 'blue')
  points.forEach(p => drawDot(p.x, p.y))
}



const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");

let center = { x: (canvas.width / 2) + 100, y: canvas.height }
let points = [
  { x: (canvas.width / 2), y: (canvas.height / 2) + 50 },
  { x: (canvas.width / 3), y: (canvas.height / 5) + 50 },
  { x: (canvas.width / 5), y: (canvas.height / 4) + 50 },
  { x: (canvas.width), y: (canvas.height / 2) + 50 },
  { x: (canvas.width + 400), y: (canvas.height / 2) + 50 },
  
]


let theta = 0.002;

setInterval(function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  points = points.map(p => translatePoint(p, center, theta))
  drawFrameFromPoints();
}, 10)

// SOLID STAR LOGIC FROM CODEPEN
//
// input in format: HH|MM|SS
// to convert RA to float degree
// (H * 15) + (M * 15/60) + (S * 15/3600)
const convertRA = (ra) => {
  let [hours, minutes, seconds] = ra.split("|").map(x => parseFloat(x));
  return (hours * 15) + (minutes * (15/60)) + (seconds * (15/3600))
}

// to convert DEC to float
// ADD D + M/60 + S/3600
const convertDEC = (dec) => {
  let eclipticOffset = dec[0] == '-' ? -1 : 1;
  let [degrees, minutes, seconds] = dec.split("|").map(x => parseFloat(x));
  return degrees + (((minutes / 60) + (seconds / 3600)) * eclipticOffset)
}

const drawDot = (x, y, radius=2, color="black") => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2)
  ctx.fillStyle = color;
  ctx.fill();
}

const zoomPoint = (p, s, c) => {
  return { x: c.x + (p.x - c.x) * s, y: c.y + (p.y - c.y) * s }
}

let translatePoint = (p, r) => {
  return { x: p.x - r.x, y: p.y - r.y }
}

// angle: theta
// x' = x cos theta - y sin theta
// y' = x sin theta + y cos theta
const rotatePoint = (p, theta) => {
  let [sT, cT] = [Math.sin(theta), Math.cos(theta)];
  let result = { x: (p.x * cT) - (p.y * sT), y: (p.x * sT) + (p.y * cT) }
  return result
}

const rotatePoints = (points, theta, rotation_point) => {
  return points.map((p) => {
    let translatedPoint = translatePoint(p, rotation_point)
    return rotatePoint(translatedPoint, theta)
  })
}

const drawPoints = (points) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  points.forEach((p) => {
    let x = p.x * -1;
    let y = p.y * -1;
    drawDot(x + 1500, y + 150)
  })
}


const points = [
  // ORION
  { x: convertRA("05|55|10"), y: convertDEC("7|24|25") }, // BETELGEUSE
  { x: convertRA("05|14|32"), y: convertDEC("-8|12|6") }, //Rigel
  { x: convertRA("05|25|08"), y: convertDEC("6|20|59") }, // Bellatrix
  { x: convertRA("05|36|13"), y: convertDEC("-1|12|7") }, // Alnilam
  { x: convertRA("05|40|45"), y: convertDEC("-1|56|34")}, // Alnitak
  { x: convertRA("05|32|00"), y: convertDEC("-0|17|57")}, // Mintaka
  { x: convertRA("05|47|45"), y: convertDEC("-9|40|11")}, // Saiph
  { x: convertRA("05|35|09"), y: convertDEC("9|56|3")}, // Meissa
  { x: convertRA("05|35|17"), y: convertDEC("-5|23|28")}, // Orion Nebula M42
  
  // Canis Major
  { x: convertRA("06|45|9.25"), y: convertDEC("-16|42|58")}, // SIRIUS
  { x: convertRA("06|58|37.55"), y: convertDEC("-28|58|19.5")}, // ADHARA
  { x: convertRA("07|08|23.49"), y: convertDEC("-26|23|35.5")}, // Wezen
  { x: convertRA("06|22|41.99"), y: convertDEC("-17|57|21.3")}, // MIRZAM
  { x: convertRA("07|03|45.4"), y: convertDEC("-15|37|39")}, // MULIPHEN
  { x: convertRA("07|20|51.9"), y: convertDEC("-30|03|51")}, // FURUD
  { x: convertRA("07|24|7.6"), y: convertDEC("-29|18|11")}, // ALUDRA
  { x: convertRA("06|46|00"), y: convertDEC("-20|46|00")}, // M41
  { x: convertRA("07|18|40.9"), y: convertDEC("-24|57|58")}, // NGC 2362
  
]

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const center = { x: -1, y: -1}
const scale = 17
const theta = -0.0000001
const rotation_point = { x: 10, y: 5 }

let zoomedPoints = points.map(p => zoomPoint(p, scale, center)) 
setInterval(() => {
  zoomedPoints = rotatePoints(zoomedPoints, theta, rotation_point);
  console.log(zoomedPoints)
  drawPoints(zoomedPoints);
}, 200)

