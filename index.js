var buffer1;
var buffer2;
var terrain;

var x = 1;
var w = 40*x;
var h = 40*x;
var damping = 0.9;
var scl_ripple = 25/document.getElementById('jumbo-canvas').offsetWidth;
//var cnv;
var canvas;
function setup() {
  canvas = createCanvas(document.getElementById('jumbo-canvas').offsetWidth, windowHeight/2, WEBGL);
  canvas.parent('jumbo-canvas')
  pixelDensity(displayDensity());
  frameRate(30);
  noFill();
  fill(0);
  stroke(255);
  strokeWeight(2);
  buffer1=new Array(w);
  for (i=0; i <w; i++) buffer1[i]=new Array(h);
  buffer2=new Array(w);
  for (i=0; i <w; i++) buffer2[i]=new Array(h);
  terrain=new Array(w);
  for (i=0; i <w; i++) terrain[i]=new Array(h);
  for(var x = 0; x < w; x++){
    for(var y = 0; y < h; y++){
      terrain[x][y] = 0;
      buffer1[x][y] = 0;
      buffer2[x][y] = 0;
    }
  }
}

function draw() {

  translate(-document.getElementById('jumbo-canvas').offsetWidth/2,100);
  rotateX(180);
  background(0);
  if(mouseIsPressed) {
    var mx = round(map(mouseX,0,windowWidth,2,w-2));
    var my = round(map(mouseY,0,windowHeight,2,h-2));
    if(mx > 1 && mx < w-1 && my > 1 && my < h-1){
      buffer1[mx][h- my] = 1000;
    }
  }
  for(var x = 1; x < w-1; x++){
    for(var y = 1; y < h-1; y++){
      buffer2[x][y] = (buffer1[x-1][y]+buffer1[x+1][y]+buffer1[x][y+1]+buffer1[x][y-1]) / 2 - buffer2[x][y];
      buffer2[x][y] *= damping;
    }
  }
  terrain = buffer2;
  var temp = buffer2;
  buffer2 = buffer1;
  buffer1 = temp;
  scl_ripple = document.getElementById('jumbo-canvas').offsetWidth/(w-1);
  for(var y = 0; y < h; y++){
    beginShape(TRIANGLE_STRIP);
    for(var x = 0; x < w; x++){
      vertex((x)*scl_ripple, (y)*scl_ripple, terrain[x][y]);
      vertex((x)*scl_ripple, (y+1)*scl_ripple, terrain[x][y+1]);
    }
    endShape();
  }
}

function windowResized() {
  canvas = resizeCanvas(document.getElementById('jumbo-canvas').offsetWidth, windowHeight/2);
}
