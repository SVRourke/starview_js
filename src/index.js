import { coordinates } from "./star_coordinates"
import { coordinateOperations } from "./coordinate_operations"
import { canvasOperations } from "./canvas_operations"

function starView() {

    // const canvas = document.getElementById("canv");
    // const ctx = canvas.getContext("2d");

    // let center = { x: (canvas.width / 2) + 100, y: canvas.height }

    // let points = [
    //     { x: (canvas.width / 2), y: (canvas.height / 2) + 50 },
    //     { x: (canvas.width / 3), y: (canvas.height / 5) + 50 },
    //     { x: (canvas.width / 5), y: (canvas.height / 4) + 50 },
    //     { x: (canvas.width), y: (canvas.height / 2) + 50 },
    //     { x: (canvas.width + 400), y: (canvas.height / 2) + 50 },

    // ]


    // let theta = 0.002;

    // setInterval(function () {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height)
    //     points = points.map(p => translatePoint(p, center, theta))
    //     drawFrameFromPoints();
    // }, 10)



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
