const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

const particles = [];
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    size: Math.random() * 3 + 1,
    sx: (Math.random() - 0.5) * 0.4,
    sy: (Math.random() - 0.5) * 0.4,
    glow: Math.random() > 0.5 ? "#39FF14" : "#BC13FE"
  });
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.sx;
    p.y += p.sy;

    if (p.x < 0 || p.x > canvas.width) p.sx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.sy *= -1;

    ctx.beginPath();
    ctx.shadowBlur = 12;
    ctx.shadowColor = p.glow;
    ctx.fillStyle = p.glow;
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(loop);
}
loop();