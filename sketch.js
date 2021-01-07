var Hr,min,scc,hrangle,mynangle,sccangle;
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  
  background(0);  
  translate(200,200);
  rotate(-90);
  Hr=hour();
  min=minute();
  scc=second();
  sccangle=map(scc,0,60,0,360);
  minangle=map(min,0,60,0,360);
  hrangle=map(Hr%12,0,12,0,360);
  push();
  rotate(sccangle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
  rotate(minangle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  push();
  rotate(hrangle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,050,0);
  pop();
  stroke(255,0,255);
  point(0,0);
  strokeWeight(10);
  noFill();
  stroke(255,0,0);
  arc(0,0,300,300,0,sccangle);
  stroke(0,255,0);
  arc(0,0,280,280,0,minangle);
  stroke(0,0,255);
  arc(0,0,260,260,0,hrangle);
}