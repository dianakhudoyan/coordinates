
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');
  

  function drawC(){
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
  }
  
 

   let data = {
    centerX : 150, 
    centerY : 100,
    radius :10, 
   }
   let x=10
   let y=10
   function upDate(){
   
    if(data.centerX+data.radius > canvas.width || data.centerX<0){
      x*=-1
    }
    if(data.centerY+data.radius > canvas.height || data.centerY- data.radius<0){
      y*=-1
    }
    data.centerX+=x
    data.centerY+=y
   }
   
  function draw(){
    ctx.beginPath(); 
    ctx.arc(data.centerX, data.centerY, data.radius, 0, Math.PI * 2); 
    ctx.fillStyle = 'black';
    ctx.fill(); 
    ctx.strokeStyle = 'black'; 
    ctx.lineWidth = 1; 
    ctx.stroke(); 
  }
  function loop(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    requestAnimationFrame(loop)
    drawC();
    upDate();
    draw()
  }
  loop()
  
