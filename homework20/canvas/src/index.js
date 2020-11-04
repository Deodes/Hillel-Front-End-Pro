const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

const config = {
  x: canvas.width / 2,
  y: canvas.height / 4 - 100,
  radius: 60,
  start: 0,
  end: Math.PI * 2,
}

const drawSnowman = ({ x, y, radius, start, end }) => {

  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(x, y, radius, start, end);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke()
    if (i === 0) {
      ctx.beginPath();
      ctx.arc(x, y, radius / 10, start, end);
      ctx.fillStyle = 'orange';
      ctx.fill();
      ctx.stroke()

      ctx.beginPath();
      ctx.fillStyle = 'black';
      ctx.arc(x - radius / 2, y - radius / 2, radius / 6, start, end);
      ctx.fill()
      ctx.stroke()
      ctx.beginPath();
      ctx.arc(x + radius / 2, y - radius / 2, radius / 6, start, end);
      ctx.fill()
      ctx.stroke()
    }
    radius *= 1.5;
    y += radius * 1.5;
  }
}

drawSnowman(config)
