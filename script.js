
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(0, 250);  
  ctx.lineTo(500, 250);  
  ctx.stroke();

  
  ctx.beginPath();
  ctx.moveTo(250, 0);  
  ctx.lineTo(250, 500);  
  ctx.stroke();

  var centerX = 150; 
  var centerY = 100; 
  var radius =40;  

  ctx.beginPath(); 
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2); 
  ctx.fillStyle = 'black';
  ctx.fill(); 
  ctx.strokeStyle = 'black'; 
  ctx.lineWidth = 1; 
  ctx.stroke(); 

  
