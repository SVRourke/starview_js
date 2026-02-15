class CanvasOperations {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas
  }

  //drawDot(x, y, radius = 2, color = '#d0d0d0') {
  drawDot(x, y, radius = 2, color = '#FFF') {
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.fillStyle = color;
    this.ctx.fill();
  }

  drawFrameFromPoints(center, coordinates) {
    this.clearCanvas();
    this.drawDot(center.x, center.y, 8, 'blue');
    coordinates.forEach((p) => {
      let x = p.x;
      let y = p.y;
      this.drawDot(x, y)
    });
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

export { CanvasOperations }

// contains potentially necessary flipping
// const drawPoints = (points) => {
//   
//   points.forEach((p) => {
//     let x = p.x * -1;
//     let y = p.y * -1;
//     drawDot(x + 1500, y + 150)
//   })
// }
