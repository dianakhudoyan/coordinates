// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// function drawC() {
//     ctx.strokeStyle = 'black';
//     ctx.lineWidth = 2;

//     // ctx.beginPath();
//     // ctx.moveTo(0, 250);
//     // ctx.lineTo(500, 250);
//     // ctx.stroke();

//     // ctx.beginPath();
//     // ctx.moveTo(250, 0);
//     // ctx.lineTo(250, 500);
//     // ctx.stroke();
// }

// let circle = {
//     centerX: 150 * Math.random(),
//     centerY: 100 * Math.random(),
//     radius: 10,
// };

// let x = 1;
// let y = 1;
// let second = 1;

// let squares = [];
// let numberOfSquares = 4;
// let distance=50;
// let squareSize = 50; 
// let speed = 3;

// function createSquare(){
//     for (let i = 0; i < numberOfSquares; i++) {
//         let x = (canvas.width / numberOfSquares) * i + distance; 
//         let y = -i * (squareSize + distance);
//         squares.push({ x: x, y: y, size: squareSize, speed: speed });
//     }
// }

// function checkCollision(circle, square) {
//     let circleLeft = circle.centerX - circle.radius;
//     let circleRight = circle.centerX + circle.radius;
//     let circleTop = circle.centerY - circle.radius;
//     let circleBottom = circle.centerY + circle.radius;

//     let squareLeft = square.x;
//     let squareRight = square.x + square.size;
//     let squareTop = square.y;
//     let squareBottom = square.y + square.size;

//     if (
//         circleRight > squareLeft &&
//         circleLeft < squareRight &&
//         circleBottom > squareTop &&
//         circleTop < squareBottom
//     ) {
  
//         let overlapX = Math.min(circleRight - squareLeft, squareRight - circleLeft);
//         let overlapY = Math.min(circleBottom - squareTop, squareBottom - circleTop);

      
//         if (overlapX < overlapY) {
//             if (circleLeft < squareLeft) {
//                 circle.centerX = squareLeft - circle.radius; 
//             } else {
//                 circle.centerX = squareRight + circle.radius; 
//             }
//             x *= -1; 
//         } else {
//             if (circleTop < squareTop) {
//                 circle.centerY = squareTop - circle.radius; 
//             } else {
//                 circle.centerY = squareBottom + circle.radius; 
//             }
//             y *= -1; 
//         }
//         return true;
//     }
//     return false;
// }
// function update() {
    
//     for (let square of squares) {
//         square.y += square.speed * second;
//         if (checkCollision(circle, square)) {
//             if (Math.abs(circle.centerX - (square.x + square.size / 2)) < Math.abs(circle.centerY - (square.y + square.size / 2))) {
//                 y *= -1; 
//             } else {
//                 x *= -1; 
//             }
//         }
//     }
//     for (let i = squares.length - 1; i >= 0; i--) {
//         if (squares[i].y > canvas.height) {
//             squares[i].y = -squares[i].size * Math.random(); 
//             squares[i].x = (canvas.width / numberOfSquares) * i + (distance * Math.random()); 
//         }
//     }

    
//     if (circle.centerX + circle.radius > canvas.width || circle.centerX < 0) {
//         x *= -1;
//     }
//     if (circle.centerY + circle.radius > canvas.height || circle.centerY - circle.radius < 0) {
//         y *= -1;
//     }
//     circle.centerX += x * second;
//     circle.centerY += y * second;
// }
// createSquare()

// function draw() {

//     ctx.beginPath();
//     ctx.arc(circle.centerX, circle.centerY, circle.radius, 0, Math.PI * 2);
//     ctx.fillStyle = 'black';
//     ctx.fill();
//     ctx.strokeStyle = 'black';
//     ctx.lineWidth = 1;
//     ctx.stroke();

//     for (let square of squares) {
//         ctx.fillRect(square.x, square.y, square.size, square.size);
        
//     }
// }


// function loop() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     requestAnimationFrame(loop);
//     drawC();
//     update();
//     draw();
    
    
// }

// let speedControl = document.getElementById('speedControl');
// let speedValue = document.getElementById('speedValue');

// speedControl.addEventListener('input', function() {
//     second = Number(speedControl.value); 
//     speedValue.textContent = second; 
// });

// loop();

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

let data = {
    centerX: 150,
    centerY: 100,
    radius: 10
};

let x = 1;
let y = 1;
let speed = 1;

let squares = [
    { x: 50, y: 50, size: 300 } 
];

let squareDirection = 0; 
let squareSpeed = 2;
let squarePadding = 30; 

function checkCollision(circle, square) {
    let circleLeft = circle.centerX - circle.radius;
    let circleRight = circle.centerX + circle.radius;
    let circleTop = circle.centerY - circle.radius;
    let circleBottom = circle.centerY + circle.radius;

    let squareLeft = square.x;
    let squareRight = square.x + square.size;
    let squareTop = square.y;
    let squareBottom = square.y + square.size;

    if (
        circleRight > squareLeft &&
        circleLeft < squareRight &&
        circleBottom > squareTop &&
        circleTop < squareBottom
    ) {
        let overlapX = Math.min(circleRight - squareLeft, squareRight - circleLeft);
        let overlapY = Math.min(circleBottom - squareTop, squareBottom - circleTop);

        if (overlapX < overlapY) {
            if (circleLeft < squareLeft) {
                circle.centerX = squareLeft - circle.radius;
            } else {
                circle.centerX = squareRight + circle.radius;
            }
            x *= -1;
        } else {
            if (circleTop < squareTop) {
                circle.centerY = squareTop - circle.radius;
            } else {
                circle.centerY = squareBottom + circle.radius;
            }
            y *= -1;
        }
        return true;
    }
    return false;
}

function update() {

    if (data.centerX + data.radius > canvas.width || data.centerX - data.radius < 0) {
        x *= -1;
    }
    if (data.centerY + data.radius > canvas.height || data.centerY - data.radius < 0) {
        y *= -1;
    }
    data.centerX += x * speed;
    data.centerY += y * speed;

    switch (squareDirection) {
        case 0: 
            squares[0].x -= squareSpeed;
            if (squares[0].x < squarePadding) {
                squareDirection = 1;
            }
            break;
        case 1:
            squares[0].x += squareSpeed;
            if (squares[0].x + squares[0].size + squarePadding > canvas.width) { 
                squareDirection = 2; 
            }
            break;
        case 2: 
            squares[0].y -= squareSpeed;
            if (squares[0].y < squarePadding) { 
                squareDirection = 3; 
            }
            break;
        case 3: 
            squares[0].y += squareSpeed;
            if (squares[0].y + squares[0].size + squarePadding > canvas.height) {
                squareDirection = 0;
            }
            break;
    }

    ժ
    squares.forEach(square => checkCollision(data, square));
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.beginPath();
    ctx.arc(data.centerX, data.centerY, data.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();

    squares.forEach(square => {
        ctx.fillRect(square.x, square.y, square.size, square.size);
    });
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

loop();
