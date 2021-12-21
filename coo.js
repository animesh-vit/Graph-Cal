
// var canvas;
// function setup() {
  
//   canvas = createCanvas(900, 500);
//   canvas.position(100,100);
// }

// function draw() {
//   background(255);
//   stroke(220);
//   for (var j=0; j<=900; j=j+50){
//     line(0,j, 900,j);
//   }
//   for (var i=0; i<=500 ; i=i+50){
//     line(i,0,i,500);
//   }
  
//   text(mouseX + "," + mouseY, mouseX, mouseY)
// }


var canvas1 = document.getElementById('myCanvas1'),
ctx = canvas1.getContext('2d');

ctx.beginPath();



xaxis();
yaxis();


//y-axis
function yaxis(){
  ctx.moveTo( (canvas1.width/2),0);
  ctx.lineTo((canvas1.width/2), canvas1.height);

}
//x-axis
function xaxis(){
  ctx.moveTo( 0,(canvas1.height/2));
  ctx.lineTo(canvas1.width,(canvas1.height/2));
}

 ctx.stroke();
//console.log(canvas1.height);
//console.log(canvas1.width);
