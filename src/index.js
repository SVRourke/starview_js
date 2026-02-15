import { coordinates } from "./star_coordinates"
import { CoordinateManager } from "./coordinate_operations"
import { CanvasOperations } from "./canvas_operations"

function starView() {
  const canvas = document.getElementById("starview");
  const ctx = canvas.getContext("2d");
  const CanvasOps =  new CanvasOperations(ctx, canvas);

  let center = { x: (canvas.width / 2) +200, y: canvas.height + 100};

  let theta = 0.01;
  //let points = coordinates;
  let points = [
    { x: 500, y: 350 },
    { x: (canvas.height / 2) + 10, y: (canvas.width / 2) + 10},
  ]
  const coords = new CoordinateManager(points);

  setInterval(() => {
    coords.rotatePoints(theta, center);
    console.log(coords.points);
    CanvasOps.drawFrameFromPoints(center, coords.points);
  }, 100)




    // const canvas = document.getElementById("myCanvas");
    // const ctx = canvas.getContext("2d");

    // const center = { x: -1, y: -1 }
    // const scale = 17
    // const theta = -0.0000001
    // const rotation_point = { x: 10, y: 5 }

    // let zoomedPoints = points.map(p => zoomPoint(p, scale, center))
    // setInterval(() => {
    //     zoomedPoints = rotatePoints(zoomedPoints, theta, rotation_point);
    //     console.log(zoomedPoints)
    //     drawPoints(zoomedPoints);
    // }, 200)

}

export { starView }
