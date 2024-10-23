
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(0, 500);  
  ctx.lineTo(1000, 500);  
  ctx.stroke();

  
  ctx.beginPath();
  ctx.moveTo(500, 0);  
  ctx.lineTo(500, 1000);  
  ctx.stroke();
