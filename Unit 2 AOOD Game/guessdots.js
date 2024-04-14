let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");


class Circle {
  constructor(canvas, ctx, radius) {
    this.centerX = canvas.width / 2;
    // console.log(this.centerX);
    this.centerY = canvas.height / 2;
    // console.log(this.centerY);
    this.radius = radius;
    this.ctx = ctx; 
  }

  drawCircle() {
    this.ctx.beginPath();
    this.ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
    this.fillColor();
    this.ctx.stroke();
  }

  fillColor() {
    this.ctx.fillStyle = 'green';
    this.ctx.fill();
  }
}

let circle = new Circle(canvas, ctx, 10);

class Bacteria {
  constructor() {
    this.numberOfDots = Math.floor(Math.random() * 15) + 1;
    this.seconds = 0;
    this.color = getRandomColor();
    this.x = Math.random(circle.centerX);
    this.y = Math.random(circle.centerY);
  }

  randomDots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.color = getRandomColor();
    if (this.numberOfDots == 0) {
      clearInterval(this.doublePopInterval); 
      clearInterval(this.sprayInterval); 
    }

  }
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let b1 = new Bacteria(10);

function displayBacteria(x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fill();
}

function updateDots(population) {
  for (let i = 0; i < population; i++) {
    let x = Math.floor(Math.random() * canvas.width) + 1; 
    let y = Math.floor(Math.random() * canvas.height) + 1; 
    let color = getRandomColor(); 
    displayBacteria(x, y, color); 
  }
}


  b1.randomDots();
  let dots = b1.numberOfDots;
  updateDots(dots);
  setTimeout(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 5000);
  
function guess() {
  let guess = prompt("How many bacteria are there?");
  if (guess == b1.numberOfDots) {
    alert("You guessed correctly!");
  } else {
    alert("You guessed incorrectly! Click enter again to guess again");
  }
}
