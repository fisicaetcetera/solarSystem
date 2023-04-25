//solarSystem nov2022
//feb252023 including view from top
//mar252023 correctin orbit of the Moon
let earthjpg;
let moonjpg;
let marsjpg;
let sunjpg;
let starsjpg;
let assinatura;
let posx=-200, posz=100;
let fctr = 2.5;
let re = 40;  //earth radius
let rotationx=0;
let numdias;
let centuries;
let rotx = 0; //Amount of ship s x rotation

function preload() {
  earthjpg = loadImage('earthmap.jpg');
  moonjpg = loadImage('moonmap1k.jpg');
  marsjpg = loadImage('mars.jpg');
  sunjpg = loadImage('sun.jpg');
  mercuryjpg = loadImage('mercury.jpg');
  venusjpg = loadImage('venus.jpg');
  jupiterjpg = loadImage('jupiter.jpg');  
  saturnjpg = loadImage('saturnmap.jpg');
  starsjpg = loadImage('starmap_2020_4k_print.jpg');
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
  numeroDeDias();
  //fi0 = fiJ200 + rate (deg) * centuries
  fi0mercury = (252+149472.67*centuries)*degtorad;
  fi0venus = (182+58517*centuries)*degtorad;
  fi0earth = (100+36000*centuries)*degtorad;
  fi0mars = (355+19140*centuries)*degtorad;
  fi0jupiter = (34+3034*centuries)*degtorad;
  fi0saturn = (50+1222*centuries)*degtorad;
  fi0moon = 578.5 * degtorad;  //L=M+w+o ? Sim, mas atualizar ambos!
  rotfct = 7.3e-5;
  transfct = 7.3e-5/365;
} 

function draw() {
  // Ship's rotation around the Sun
  if(mouseIsPressed === true){
  rotationx += .001;
  rotateY(rotationx);
  } else {
    rotateY(rotationx);
  }  //ends Ship's rotation Y
  rotateX(rotx/500);  //ship rotation x controle by wheel 
  noStroke();
  background(0);
  push();
  translate(0, 0, 0);
  texture(starsjpg);
  sphere(6000);
  pop();

  push();
  texture(assinatura);
  translate(posx++,50,posz--);
  rotateY(frameCount/95);
  rotateX(frameCount/130);
  plane(50, 30);
  pop();
  //pointLight(255,255,0,0,0,200);

  push();

  texture(sunjpg);
  rotateY(frameCount*2.6e-5);
  // wsol = 2pi/28 dias = 2.6e-5 rd por s
  //emissiveMaterial(255,255,255);
  sphere(80);
  pop();
  
  push();
  rotateY(fi0mercury+frameCount * transfct / 0.241);
  translate(0,0,-110*fctr);
  rotateY(frameCount/58600);  
  texture(mercuryjpg);
  sphere(0.4*re)
  pop();

  push();
  rotateY(fi0venus+frameCount * transfct / 0.6);
  translate(0, 0, -150*fctr);
  rotateY(-frameCount * rotfct / 243);
  texture(venusjpg);
  sphere(re);
  pop();
  
  push();

  rotateY(fi0earth+frameCount * 2e-7);
  translate(0, 0, -200*fctr);
  rotateY(frameCount * 7.27e-5);
  texture(earthjpg);
  sphere(40);

  rotateY(fi0moon+frameCount*1.02e-5);
  translate(0, 0, -58*fctr);
  texture(moonjpg);
  sphere(0.3*re);
  
  pop();


  push();
  rotateY(fi0mars+frameCount * transfct / 1.88);
  translate(0, 0, -350*fctr);
  rotateY(frameCount * rotfct / 1.03);
  texture(marsjpg);
  sphere(0.5*re);
  pop();

  push();
  rotateY(fi0jupiter+frameCount * transfct / 11.86);
  translate(0, 0, -700*fctr);
  rotateY(frameCount * rotfct / 0.41);
  texture(jupiterjpg);
  sphere(1*re);//falso
  pop();


  push();
  rotateY(fi0saturn+frameCount * transfct / 29.447);
  translate(0, 0, -700*fctr);
  rotateY(frameCount * rotfct / 0.444);
  texture(saturnjpg);
  rotateX(PI/5);
  sphere(1*re);//falso
  rotateX(PI/2);
      fill('gray'),
    torus(re+25,5);
    fill('white');
    torus(re+50, 5);
  pop();
}
function numeroDeDias() {

  //calcula numero de dias entre duas datas escolhidas
  // Por enquanto entre J2000 e o presente 
  now = new Date();
  timestamp = now.getTime(); //agora
  //time for 2000 elements

  let stampj2000 = (new Date('1999-12-31T00:00:00Z')).getTime();
  // epoca, em milisegundos
  let epoca = (timestamp - stampj2000) / 1000;
  numdias = epoca / 86400;
  centuries = numdias/36525;
  return numdias;
} //end function numeroDeDias

// Mousewheel to control x rotation
function mouseWheel(event) {
  rotx = rotx - event.delta;
  return false;
}
//
