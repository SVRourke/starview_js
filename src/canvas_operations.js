// NOT WORKING

const canvasOperations = {
    drawDot: (x, y, radius = 2, color = '#d0d0d0') => {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = color;
        ctx.fill();
    },
    drawFrameFromPoints: (center, coordinates) => {
        drawDot(center.x, center.y, 8, 'blue')
        points.forEach(p => drawDot(p.x, p.y))

    },
    clearCanvas: () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

}

export { canvasOperations }

// contains potentially necessary flipping
// const drawPoints = (points) => {
//   
//   points.forEach((p) => {
//     let x = p.x * -1;
//     let y = p.y * -1;
//     drawDot(x + 1500, y + 150)
//   })
// }