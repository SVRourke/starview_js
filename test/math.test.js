import test from "node:test";
import assert from "node:assert/strict";
import { CoordinateManager } from "../src/coordinate_operations.js"




test("Rotate point should be accurate", () => {
  let cm = new CoordinateManager([])
  let rotateNinety = cm.rotatePoint({ x: 100, y: 150 }, 90);
  assert.equal(rotateNinety, { x: -150, y: 100 });
})

test("Rotate points should update the coordinates", () => {
  let cm = new CoordinateManager([
    { x: 100, y: 100 },
    { x: -100, y: -100 }
  ])

  cm.rotatePoints(10, {x: 0, y: 0})

  assert.deepEqual(cm.points, [
    { x: 81.115957534527771, y: 115.845593067913841 },
    { x: -81.115957534527771, y: -115.845593067913841 }
  ])

  cm.rotatePoints(10, { x: 0, y: 0 })

  assert.deepEqual(cm.points, [
    {x: 59.767247746023965, y: 128.17127611157712},
    {x: -59.767247746023965, y: -128.17127611157712}
  ])
})
