//solarSystem nov2022
let earthjpg;
let moonjpg;
let marsjpg;
let sunjpg;
let starsjpg;
let assinatura;
let posx=-200, posz=100;
let fctr =2;
let re = 40;  //earth radius

function preload() {
  earthjpg = loadImage('earthcloud-1.jpg');
  moonjpg = loadImage('moonmap1k.jpg');
  marsjpg = loadImage('mars.jpg');
  sunjpg = loadImage('sun.jpg');
  mercuryjpg = loadImage('mercury.jpg');
  venusjpg = loadImage('venus.jpg');
  jupiterjpg = loadImage('jupiter.jpg');  
  starsjpg = loadImage('stars.jpg');
  //createVRCanvas();
}

function setup() {
  //setVRBackgroundColor(50, 50, 50);
  createCanvas(1366, 768, WEBGL);
  assinatura = createGraphics(380, 100);
  assinatura.background(255, 100);
  assinatura.fill(0);
  assinatura.textAlign(CENTER);
  assinatura.textSize(90);
  assinatura.text('Bonelli', 190, 85);
  degtorad = PI/180;
  fi0mercury = (252+149472.67*0.22)*degtorad;
  fi0venus = (182+58517*0.23)*degtorad;
  fi0earth = (100+36000*0.23)*degtorad;
  fi0mars = (-4.5+19140*0.23)*degtorad;
  fi0jupiter = (34+3034*0.23)*degtorad;
} 

function draw() {
  //setViewerPosition(0, 0, 400);
  //translate(0,0,mouseX/15);
  rotateX((mouseY-380)/260);
  rotateY(-mouseX/260);
  noStroke();
  background(0);
  push();
  translate(0, 0, -1000);
  texture(starsjpg);
  sphere(4500);
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
  rotateY(frameCount / 28000);
  sphere(80);
  pop();
  
  push();
  rotateY(fi0mercury+frameCount/87000);
  translate(0,0,-110*fctr);
  rotateY(frameCount/58600);  
  texture(mercuryjpg);
  sphere(0.4*re)
  pop();

   push();
  rotateY(fi0venus+frameCount / 224700);
  translate(0, 0, -150*fctr);
  rotateY(frameCount / 24300);
  texture(venusjpg);
  sphere(re);
  pop();
  
  push();
  rotateY(fi0earth+frameCount/365000);
  translate(0, 0, -200*fctr);
  rotateY(frameCount / 1000);
  texture(earthjpg);
  sphere(40);

  rotateY(-0.07*frameCount / 1000);
  //como girar a posicao da lua???
  translate(0, 0, -58*fctr);
  texture(moonjpg);
  sphere(0.3*re);
  pop();


  push();
  rotateY(fi0mars+frameCount / 657000);
  translate(0, 0, -350*fctr);
  rotateY(frameCount / 1030);
  texture(marsjpg);
  sphere(0.5*re);
  pop();

  push();
  rotateY(fi0jupiter+frameCount / 4328900);
  translate(0, 0, -700*fctr);
  rotateY(frameCount / 410);
  texture(jupiterjpg);
  sphere(11);
  pop();


}
