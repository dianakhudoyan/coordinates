
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');
  
  function drawC() {
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
  
    //   ctx.beginPath();
    //   ctx.moveTo(0, 250);
    //   ctx.lineTo(500, 250);
    //   ctx.stroke();
  
    //   ctx.beginPath();
    //   ctx.moveTo(250, 0);
    //   ctx.lineTo(250, 500);
    //   ctx.stroke();
  }
  
  let circle = {
      centerX: 150,
      centerY: 100,
      radius: 10,
  }
  
  let minus = document.getElementById('minus');
  let number = document.getElementById('number');
  let plus = document.getElementById('plus');
  
  let x = 1;
  let y = 1;
  let second = 1;
  
  function update() {
      if (circle.centerX + circle.radius > canvas.width || circle.centerX < 0) {
          x *= -1;
      }
      if (circle.centerY + circle.radius > canvas.height || circle.centerY - circle.radius < 0) {
          y *= -1;
      }
      circle.centerX += x * second;
      circle.centerY += y * second;
  }
  
  function draw() {
      ctx.beginPath();
      ctx.arc(circle.centerX, circle.centerY, circle.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'black';
      ctx.fill();
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = "black";
      ctx.fillRect(50, 50, 50, 50);
      ctx.fillRect(50, 150, 50, 50); 
      ctx.fillRect(300, 300, 50, 50); 
      ctx.fillRect(200, 300, 50, 50); 
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
