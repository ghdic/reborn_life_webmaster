const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ball_num = 25

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function Ball(x, y, vx, vy, color, size, speed) {
  this.x = x;
  this.y = y;
  this.vx = vx * speed;
  this.vy = vy * speed;
  this.color = color;
  this.size = size;
}

Ball.prototype.draw = function() { /* 메소드 정의시 애로우 펑션 x  */
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

Ball.prototype.update = function() {
  if((this.x + this.size) >= width) {
    this.vx = -Math.abs(this.vx);
  }
  if((this.x - this.size) <= 0) {
    this.vx = Math.abs(this.vx);
  }

  if((this.y + this.size) >= height) {
    this.vy = -Math.abs(this.vy);
  }

  if((this.y - this.size) <= 0){
    this.vy = Math.abs(this.vy);
  }

  this.x += this.vx;
  this.y += this.vy;
}

// let testBall = new Ball(50, 100, 4, 4, 'blue', 10, 1);
// testBall.draw()


Ball.prototype.collisionDetect = function(detect) {
  if(detect[balls.indexOf(this)]) return;
  for (let j = 0; j < balls.length; j++) {
    if(this === balls[j]) continue;
    const dx = this.x - balls[j].x;
    const dy = this.y - balls[j].y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance <= this.size + balls[j].size) {
      balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
      balls[j].vx = -balls[j].vx;
      balls[j].vy = -balls[j].vy; // 충돌 반동 계산 공식을 쓴게 아니라 가던 방향의 반대로 할 경우, 이동 후에도 계속 충돌 상태가 될 수 있음

      // const idx = balls.indexOf(this)
      // if(idx != -1)
      //   balls.splice(idx, 1)
      // balls.splice(j, 1)
    }

  }

}

let balls = [];

function ball_creator() {
  let size = random(10, 20);
  let ball = new Ball(
    random(0 + size, width - size),
    random(0 + size,height - size),
    random(-7, 7),
    random(-7, 7),
    'rgb(' + random(0,255) + ',' + random(0, 255) + ',' +random(0, 255) + ')',
    size,
    Math.random() * 2
  );

  return ball;
}

while (balls.length < ball_num) {
  balls.push(ball_creator());
}


function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  let detect = Array.from({length: ball_num}, () => false);
  for(let i = 0; i < balls.length; i++){
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect(detect);
  }
  requestAnimationFrame(loop);
}

loop();