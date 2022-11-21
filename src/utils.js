export const drawByCoordinates = (ctx, coords) => {
  ctx.beginPath();

  coords.forEach(([x, y]) => {
    ctx.lineTo(x, y);
  });

  ctx.stroke();
  ctx.closePath();
  ctx.fill();
};
