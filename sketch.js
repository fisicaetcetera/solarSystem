//let cam;
let earthjpg;
let moonjpg;
let marsjpg;
let sunjpg;
let starsjpg;
let assinatura;
let posx=-200, posz=100;

function preload() {
  earthjpg = loadImage('earthcloud-1.jpg');
  moonjpg = loadImage('moonmap1k.jpg');
  marsjpg = loadImage('mars.jpg');
  sunjpg = loadImage('8k_sun.jpg');
  mercuryjpg = loadImage('mercury.jpg');
  venusjpg = loadImage('venus.jpg');
  starsjpg = loadImage('stars.jpg');
  createVRCanvas();
}

function setup() {
  setVRBackgroundColor(50, 50, 50);
  createCanvas(1366, 768, WEBGL);
  assinatura = createGraphics(380, 100);
  assinatura.background(255, 100);
  assinatura.fill(0);
  assinatura.textAlign(CENTER);
  assinatura.textSize(90);
  assinatura.text('Bonelli', 190, 85);

}

function draw() {
  //setViewerPosition(0, 0, 400);
  //translate(0,0,mouseX/10);
  noStroke();
  background(0);
  push();
  translate(0, 0, -1000);
  texture(starsjpg);
  plane(4500);
  pop();

  push();
  texture(assinatura);
  translate(posx++,50,posz--);
  rotateY(frameCount/95);
  rotateX(frameCount/130);
  plane(50, 30);
  pop();
  //directionalLight(255, 255, 255, 1, 0, 0)
  //pointLight(255,255,0,0,0,200);

  push();

  texture(sunjpg);
  rotateY(frameCount / 3280);
  sphere(80);
  pop();
  
  push();
  rotateY(frameCount/250);
  translate(0,0,-110);
  texture(mercuryjpg);
  sphere(13)
  pop();

   push();
  rotateY(frameCount / 600);
  translate(0, 0, -150);
  //rotateY(frameCount / 400);
  texture(venusjpg);
  sphere(35);
  pop();
  
  push();
  rotateY(frameCount / 500);
  translate(0, 0, -200);
  texture(earthjpg);
  sphere(40);

  rotateY(frameCount / 550);
  translate(0, 0, -58);
  texture(moonjpg);
  sphere(10);
  pop();


  push();
  rotateY(frameCount / 600);
  translate(0, 0, -350);
  rotateY(frameCount / 400);
  texture(marsjpg);
  sphere();
  pop();

}
