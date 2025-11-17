// Simple physics demo
const canvas = document.getElementById('physicsCanvas');
if(canvas){const ctx = canvas.getContext('2d');let ball={x:100,y:50,vy:0,radius:20};const gravity=0.5;function update(){ctx.clearRect(0,0,canvas.width,canvas.height);ball.vy+=gravity;ball.y+=ball.vy;if(ball.y+ball.radius>canvas.height){ball.y=canvas.height-ball.radius;ball.vy*=-0.8}ctx.beginPath();ctx.arc(ball.x,ball.y,ball.radius,0,Math.PI*2);ctx.fillStyle='#ff4c4c';ctx.fill();ctx.closePath();requestAnimationFrame(update)}update();
