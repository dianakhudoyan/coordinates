// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// function drawC() {
//     ctx.strokeStyle = 'black';
//     ctx.lineWidth = 2;
// }

// let circle = {
//     centerX: Math.random() * (canvas.width - 20) + 10,
//     centerY: Math.random() * (canvas.height - 20) + 10,
//     radius: 10,
// };

// let x = 1;
// let y = 1;
// let second = 1;

// let squares = [];
// let numberOfSquares = 4;
// let distance = 50;
// let squareSize = 50; 
// let speed = 2;

// function createSquare() {
//     for (let i = 0; i < numberOfSquares; i++) {
//         let x = (canvas.width / numberOfSquares) * i + distance; 
//         let y = -i * (squareSize + distance);
//         squares.push({ x: x, y: y, size: squareSize, speed: speed });
//     }
// }

// function checkCollision(circle, square) {
//     let squareLeft = square.x;
//     let squareRight = square.x + square.size;
//     let squareTop = square.y;
//     let squareBottom = square.y + square.size;

//     if (circle.centerY + circle.radius >= squareTop && 
//         circle.centerY <= squareTop && 
//         squareLeft <= circle.centerX && circle.centerX <= squareRight) {
//         return 'top';
//     }

//     if (circle.centerY - circle.radius <= squareBottom && 
//         circle.centerY >= squareBottom && 
//         squareLeft <= circle.centerX && circle.centerX <= squareRight) {
//         return 'bottom';
//     }

//     if (circle.centerX + circle.radius >= squareLeft && 
//         circle.centerX <= squareLeft && 
//         squareTop <= circle.centerY && circle.centerY <= squareBottom) {
//         return 'left';
//     }

//     if (circle.centerX - circle.radius <= squareRight && 
//         circle.centerX >= squareRight && 
//         squareTop <= circle.centerY && circle.centerY <= squareBottom) {
//         return 'right';
//     }
    
//     return null;
// }

// function update() {
//     for (let square of squares) {
//         square.y += square.speed * second;
        
//         let collisionSide = checkCollision(circle, square);
//         if (collisionSide) {
//             if (collisionSide === 'top') {
//                 y *= -1;
//                 circle.centerY = square.y - circle.radius;
//             } else if (collisionSide === 'bottom') {
//                 y *= -1;
//                 circle.centerY = square.y + square.size + circle.radius;
//             } else if (collisionSide === 'left') {
//                 x *= -1;
//                 circle.centerX = square.x - circle.radius;
//             } else if (collisionSide === 'right') {
//                 x *= -1;
//                 circle.centerX = square.x + square.size + circle.radius;
//             }
//         }
//     }

//     for (let i = squares.length - 1; i >= 0; i--) {
//         if (squares[i].y > canvas.height) {
//             squares[i].y = -squares[i].size * Math.random(); 
//             squares[i].x = (canvas.width / numberOfSquares) * i + (distance * Math.random()); 
//         }
//     }

//     if (circle.centerX + circle.radius > canvas.width || circle.centerX - circle.radius < 0) {
//         x *= -1;
//     }
//     if (circle.centerY + circle.radius > canvas.height || circle.centerY - circle.radius < 0) {
//         y *= -1;
//     }

//     circle.centerX += x * second;
//     circle.centerY += y * second;
// }

// createSquare();


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


// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// let data = {
//     centerX: 150,
//     centerY: 100,
//     radius: 10
// };

// let x = 1;
// let y = 1;
// let speed = 1;

// let squares = [
//     { x: 50, y: 50, size: 300 } 
// ];

// let squareDirection = 0; 
// let squareSpeed = 2;
// let squarePadding = 30; 

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

//     if (data.centerX + data.radius > canvas.width || data.centerX - data.radius < 0) {
//         x *= -1;
//     }
//     if (data.centerY + data.radius > canvas.height || data.centerY - data.radius < 0) {
//         y *= -1;
//     }
//     data.centerX += x * speed;
//     data.centerY += y * speed;

//     switch (squareDirection) {
//         case 0: 
//             squares[0].x -= squareSpeed;
//             if (squares[0].x < squarePadding) {
//                 squareDirection = 1;
//             }
//             break;
//         case 1:
//             squares[0].x += squareSpeed;
//             if (squares[0].x + squares[0].size + squarePadding > canvas.width) { 
//                 squareDirection = 2; 
//             }
//             break;
//         case 2: 
//             squares[0].y -= squareSpeed;
//             if (squares[0].y < squarePadding) { 
//                 squareDirection = 3; 
//             }
//             break;
//         case 3: 
//             squares[0].y += squareSpeed;
//             if (squares[0].y + squares[0].size + squarePadding > canvas.height) {
//                 squareDirection = 0;
//             }
//             break;
//     }


//     squares.forEach(square => checkCollision(data, square));
// }

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height); 
//     ctx.beginPath();
//     ctx.arc(data.centerX, data.centerY, data.radius, 0, Math.PI * 2);
//     ctx.fillStyle = 'black';
//     ctx.fill();
//     ctx.strokeStyle = 'black';
//     ctx.lineWidth = 1;
//     ctx.stroke();

//     squares.forEach(square => {
//         ctx.fillRect(square.x, square.y, square.size, square.size);
//     });
// }

// function loop() {
//     update();
//     draw();
//     requestAnimationFrame(loop);
// }

// loop();

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// let circle = {
//     centerX: Math.random() * (canvas.width - 20) + 10,
//     centerY: Math.random() * (canvas.height - 20) + 10,
//     radius: 10,
// };

// let x = 1;
// let y = 1;
// let second = 1;

// let squares = [];
// let numberOfSquares = 4;
// let distance = 50;
// let squareSize = 50;
// let speed = 2;

// function createSquare() {
//     for (let i = 0; i < numberOfSquares; i++) {
//         let x = (canvas.width / numberOfSquares) * i + distance;
//         let y = -i * (squareSize + distance);
//         squares.push({ x: x, y: y, size: squareSize, speed: speed });
//     }
// }

// function checkCollision(circle, square) {
//     let testX = circle.centerX;
//     let testY = circle.centerY;

//     if (circle.centerX < square.x) {
//         testX = square.x;
//     } else if (circle.centerX > square.x + square.size) {
//         testX = square.x + square.size;
//     }

//     if (circle.centerY < square.y) {
//         testY = square.y;
//     } else if (circle.centerY > square.y + square.size) {
//         testY = square.y + square.size;
//     }

//     let distX = circle.centerX - testX;
//     let distY = circle.centerY - testY;
//     let distance = Math.sqrt(distX * distX + distY * distY);

//     return distance <= circle.radius;
// }

// function update() {
//     for (let square of squares) {
//         square.y += square.speed * second;

//         if (checkCollision(circle, square)) {
//             if (Math.abs(circle.centerX - (square.x + square.size / 2)) > Math.abs(circle.centerY - (square.y + square.size / 2))) {
//                 x *= -1;
//             } else {
//                 y *= -1;
//             }    
//             if (circle.centerY > square.y + square.size) {
//                 circle.centerY = square.y + square.size + circle.radius; 
//             } else if (circle.centerY < square.y) {
//                 circle.centerY = square.y - circle.radius; 
//             }

//             if (circle.centerX > square.x + square.size) {
//                 circle.centerX = square.x + square.size + circle.radius;
//             } else if (circle.centerX < square.x) {
//                 circle.centerX = square.x - circle.radius;
//             }
//         }
//     }

//     for (let i = squares.length - 1; i >= 0; i--) {
//         if (squares[i].y > canvas.height) {
//             squares[i].y = -squares[i].size;
//             squares[i].x = (canvas.width / numberOfSquares) * i + (distance * Math.random());
//         }
//     }

//     if (circle.centerX + circle.radius > canvas.width || circle.centerX - circle.radius < 0) {
//         x *= -1;
//     }
//     if (circle.centerY + circle.radius > canvas.height || circle.centerY - circle.radius < 0) {
//         y *= -1;
//     }

//     circle.centerX += x * second;
//     circle.centerY += y * second;
// }

// createSquare();

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
//     update();
//     draw();
//     requestAnimationFrame(loop);
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

function drawC() {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
}

let circle = {
    centerX: Math.random() * (canvas.width - 100) + 10,
    centerY: Math.random() * (canvas.height - 100) + 10, 
    radius: 10,
};

let rect = {
    x: 1,
    y: 390,
    width: 80,
    height: 9
};

let x = 1;
let y = 1;
let second = 1;
let isCircleInCanvas = true;

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}

function update() {
    if (!isCircleInCanvas) {
        let continueGame = confirm(" Do you want to continue?");
        if (continueGame) {
            isCircleInCanvas = true;
            circle.centerX = Math.random() * (canvas.width - 100) + 10; 
            circle.centerY = Math.random() * (canvas.height - 100) + 10;
            x = 1; 
            y = 1; 
            second = 1; 
        } else {
          
            alert("Thanks for playing!"); 
            return; 
        }
    }

   
    if (circle.centerX + circle.radius > rect.x &&
        circle.centerX - circle.radius < rect.x + rect.width &&
        circle.centerY + circle.radius > rect.y &&
        circle.centerY - circle.radius < rect.y + rect.height) {
        y *= -1;
    }

    
    if (circle.centerX + circle.radius > canvas.width || circle.centerX - circle.radius < 0) {
        x *= -1;
    } else if (circle.centerY - circle.radius < 0) {
        y *= -1;
    } else if (circle.centerY + circle.radius > canvas.height) {
        isCircleInCanvas = false; 
    }

   
    circle.centerX += x * second;
    circle.centerY += y * second;
}

function draw() {

    if (isCircleInCanvas) {
    ctx.beginPath();
    ctx.arc(circle.centerX, circle.centerY, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();
    }
  
    ctx.fillStyle = 'black';
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();
    draw();
    requestAnimationFrame(loop);
}

canvas.addEventListener('mousemove', function(e) {
    let mousePos = getMousePos(canvas, e); 
    if (mousePos.x - rect.width / 2 < 0) {
        rect.x = 1;
    } else if (mousePos.x + rect.width / 2 > canvas.width) {
        rect.x = canvas.width - rect.width - 1; 
    } else {
        rect.x = mousePos.x - rect.width / 2; 
    }
});

let speedControl = document.getElementById('speedControl');
let speedValue = document.getElementById('speedValue');

speedControl.addEventListener('input', function() {
    second = Number(speedControl.value);
    speedValue.textContent = second;
});
document.getElementById("button").addEventListener("click", function () {
    draw();
    this.disabled = true;
    this.style.display = "none";
  });
loop();
