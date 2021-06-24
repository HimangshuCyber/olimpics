//declare the vars

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


//Draw circle

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 6;
ctx.rect(40, 143, 730, 400, 430);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 6;
ctx.arc(400, 300, 100, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 6;
ctx.arc(150, 300, 100, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 6;
ctx.arc(660, 300, 100, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 6;
ctx.arc(270, 400, 100, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 6;
ctx.arc(530, 400, 100, 0, 2 * Math.PI);
ctx.stroke();