var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawC() {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;

    // ctx.beginPath();
    // ctx.moveTo(0, 250);
    // ctx.lineTo(500, 250);
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(250, 0);
    // ctx.lineTo(250, 500);
    // ctx.stroke();
}

let circle = {
    centerX: 150,
    centerY: 100,
    radius: 10,
};

let x = 1;
let y = 1;
let second = 1;

let squares = [];
let numberOfSquares = 4;

function createSquare(){
    let sizes=50;
    let x = Math.random() * (canvas.width - sizes);
    let y =0
    let speed=1
    squares.push({ x: x, y: y, size: sizes, speed:speed })

}



function checkCollision(circle, square) {
    let squareCenterX = square.x + square.size / 2;
    let squareCenterY = square.y + square.size / 2;
    let distanceX = Math.abs(circle.centerX - squareCenterX);
    let distanceY = Math.abs(circle.centerY - squareCenterY);
    
    return (distanceX < (square.size / 2 + circle.radius)) && (distanceY < (square.size / 2 + circle.radius));
}

function update() {
    
    for (let square of squares) {
        square.y += square.speed * second;
        if (checkCollision(circle, square)) {
            if (Math.abs(circle.centerX - (square.x + square.size / 2)) < Math.abs(circle.centerY - (square.y + square.size / 2))) {
                y *= -1; 
            } else {
                x *= -1; 
            }
        }
    }
    for (let i = squares.length - 1; i >= 0; i--) {
        if (squares[i].y > canvas.height) {
            squares.splice(i, 1);
            createSquare();
        }
    }

    if (circle.centerX + circle.radius > canvas.width || circle.centerX < 0) {
        x *= -1;
    }
    if (circle.centerY + circle.radius > canvas.height || circle.centerY - circle.radius < 0) {
        y *= -1;
    }
    circle.centerX += x * second;
    circle.centerY += y * second;
}
createSquare();

function draw() {

    ctx.beginPath();
    ctx.arc(circle.centerX, circle.centerY, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();

    for (let square of squares) {
        ctx.fillRect(square.x, square.y, square.size, square.size);
    }
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(loop);
    drawC();
    update();
    draw();
    
}

let speedControl = document.getElementById('speedControl');
let speedValue = document.getElementById('speedValue');

speedControl.addEventListener('input', function() {
    second = Number(speedControl.value); 
    speedValue.textContent = second; 
});

loop();
