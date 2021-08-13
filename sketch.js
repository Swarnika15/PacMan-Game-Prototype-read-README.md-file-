var pacMan;
var pacMan1, pacMan2, pacMan3, pacMan4;
var ghost1, ghost2, ghost3, ghost4;
var ghostA, ghostB, ghostC, ghostD;
var wall1, wall2, wall3, wall4;
var cardboard1, cardboard2, cardboard3, cardboard4, cardboard5, cardboard6, cardboard7;

var score=0
var orb1;

function preload(){
pacMan1=loadImage("pacMan.png");
pacMan2=loadImage("pacMan2.png");
pacMan3=loadImage("pacMan3.png");
pacMan4=loadImage("pacMan4.png");
ghost1=loadImage("ghost1.png");
ghost2=loadImage("ghost2.png");
ghost3=loadImage("ghost3.png");
ghost4=loadImage("ghost4.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight-105);

  wall1 = createSprite(0,0,width*2,10);
  wall2 = createSprite(0,663,width*2,10);
  wall3 = createSprite(0,displayHeight/3,10,height+150);
  wall4 = createSprite(width,0,10,width);
  wall1.shapeColor="blue";
  wall2.shapeColor="blue";
  wall3.shapeColor="blue";
  wall4.shapeColor="blue";

  

  orb1 = createSprite(60,80,10,10);
  orb1.shapeColor="white";
  orb2 = createSprite(60,120,10,10);
  orb2.shapeColor="white";
  orb3 = createSprite(60,160,10,10);
  orb3.shapeColor="white";
  orb4 = createSprite(60,200,10,10);
  orb4.shapeColor="white";
  orb5 = createSprite(100,200,10,10);
  orb5.shapeColor="white";
  orb6 = createSprite(140,200,10,10);
  orb6.shapeColor="white";
  orb7 = createSprite(180,200,10,10);
  orb7.shapeColor="white";
  orb8 = createSprite(220,200,10,10);
  orb8.shapeColor="white";
  orb9 = createSprite(260,200,10,10);
  orb9.shapeColor="white";
  orb10 = createSprite(300,200,10,10);
  orb10.shapeColor="white";
  orb11 = createSprite(300,240,10,10);
  orb11.shapeColor="white";
  orb12 = createSprite(300,280,10,10);
  orb12.shapeColor="white";
  orb13 = createSprite(300,320,10,10);
  orb13.shapeColor="white";
  orb14 = createSprite(300,360,10,10);
  orb14.shapeColor="white";
  orb15 = createSprite(300,400,10,10);
  orb15.shapeColor="white";
  orb16 = createSprite(300,440,10,10);
  orb16.shapeColor="white";
  orb17 = createSprite(300,480,10,10);
  orb17.shapeColor="white";
  orb18 = createSprite(300,520,10,10);
  orb18.shapeColor="white";
  orb19 = createSprite(300,160,10,10);
  orb19.shapeColor="white";
  orb20 = createSprite(300,120,10,10);
  orb20.shapeColor="white";
  orb21 = createSprite(260,120,10,10);
  orb21.shapeColor="white";
  orb22 = createSprite(220,120,10,10);
  orb22.shapeColor="white";
  orb23 = createSprite(180,120,10,10);
  orb23.shapeColor="white";
  orb24 = createSprite(140,120,10,10);
  orb24.shapeColor="white";
  orb25 = createSprite(100,120,10,10);
  orb25.shapeColor="white";
  orb26 = createSprite(300,80,10,10);
  orb26.shapeColor="white";
  orb27 = createSprite(300,40,10,10);
  orb27.shapeColor="white";
  orb28 = createSprite(260,40,10,10);
  orb28.shapeColor="white";  
  orb29 = createSprite(220,40,10,10);
  orb29.shapeColor="white";
  orb30 = createSprite(180,40,10,10);
  orb30.shapeColor="white";
  orb31 = createSprite(140,40,10,10);
  orb31.shapeColor="white";
  orb32 = createSprite(100,40,10,10);
  orb32.shapeColor="white";
  orb33 = createSprite(60,40,10,10);
  orb33.shapeColor="white";
  orb34 = createSprite(340,40,10,10);
  orb34.shapeColor="white";
  orb35 = createSprite(380,40,10,10);
  orb35.shapeColor="white";
  orb36 = createSprite(420,40,10,10);
  orb36.shapeColor="white";
  orb37 = createSprite(460,40,10,10);
  orb37.shapeColor="white";
  orb38 = createSprite(500,40,10,10);
  orb38.shapeColor="white";
  orb39 = createSprite(540,40,10,10);
  orb39.shapeColor="white";
  orb40 = createSprite(580,40,10,10);
  orb40.shapeColor="white";
  orb41 = createSprite(620,40,10,10);
  orb41.shapeColor="white";
  orb42 = createSprite(340,120,10,10);
  orb42.shapeColor="white";
  orb43 = createSprite(380,120,10,10);
  orb43.shapeColor="white";
  orb44 = createSprite(420,120,10,10);
  orb44.shapeColor="white";
  orb45 = createSprite(460,120,10,10);
  orb45.shapeColor="white";
  orb46 = createSprite(500,120,10,10);
  orb46.shapeColor="white";
  orb47 = createSprite(540,120,10,10);
  orb47.shapeColor="white";
  orb48 = createSprite(580,120,10,10);
  orb48.shapeColor="white";
  orb49 = createSprite(580,80,10,10);
  orb49.shapeColor="white";
  orb50 = createSprite(620,120,10,10);
  orb50.shapeColor="white";
  orb51 = createSprite(660,120,10,10);
  orb51.shapeColor="white";
  orb52 = createSprite(700,120,10,10);
  orb52.shapeColor="white";
  orb53 = createSprite(740,120,10,10);
  orb53.shapeColor="white";
  orb54 = createSprite(780,120,10,10);
  orb54.shapeColor="white";
  orb55 = createSprite(820,120,10,10);
  orb55.shapeColor="white";
  orb56 = createSprite(860,120,10,10);
  orb56.shapeColor="white";
  orb57 = createSprite(900,120,10,10);
  orb57.shapeColor="white";
  orb58 = createSprite(940,120,10,10);
  orb58.shapeColor="white";
  orb59 = createSprite(980,120,10,10);
  orb59.shapeColor="white";
  orb60 = createSprite(780,80,10,10);
  orb60.shapeColor="white";
  orb61 = createSprite(780,40,10,10);
  orb61.shapeColor="white";
  orb62 = createSprite(820,40,10,10);
  orb62.shapeColor="white";
  orb63 = createSprite(860,40,10,10);
  orb63.shapeColor="white";
  orb64 = createSprite(900,40,10,10);
  orb64.shapeColor="white";
  orb65 = createSprite(940,40,10,10);
  orb65.shapeColor="white";
  orb66 = createSprite(980,40,10,10);
  orb66.shapeColor="white";
  orb67 = createSprite(1020,40,10,10);
  orb67.shapeColor="white";
  orb68 = createSprite(1060,40,10,10);
  orb68.shapeColor="white";
  orb69 = createSprite(1100,40,10,10);
  orb69.shapeColor="white";
  orb70 = createSprite(740,40,10,10);
  orb70.shapeColor="white";
  orb71 = createSprite(1140,40,10,10);
  orb71.shapeColor="white";
  orb72 = createSprite(1180,40,10,10);
  orb72.shapeColor="white";
  orb73 = createSprite(1220,40,10,10);
  orb73.shapeColor="white";
  orb74 = createSprite(1260,40,10,10);
  orb74.shapeColor="white";
  orb75 = createSprite(1300,40,10,10);
  orb75.shapeColor="white";
  orb76 = createSprite(1300,80,10,10);
  orb76.shapeColor="white";
  orb77 = createSprite(1300,120,10,10);
  orb77.shapeColor="white";
  orb78 = createSprite(1300,160,10,10);
  orb78.shapeColor="white";
  orb79 = createSprite(1300,200,10,10);
  orb79.shapeColor="white";
  orb80 = createSprite(1060,80,10,10);
  orb80.shapeColor="white";
  orb81 = createSprite(1060,120,10,10);
  orb81.shapeColor="white";
  orb82 = createSprite(1060,160,10,10);
  orb82.shapeColor="white";
  orb83 = createSprite(1060,200,10,10);
  orb83.shapeColor="white";
  orb84 = createSprite(1060,240,10,10);
  orb84.shapeColor="white";
  orb85 = createSprite(1060,280,10,10);
  orb85.shapeColor="white";
  orb86 = createSprite(1060,320,10,10);
  orb86.shapeColor="white";
  orb87 = createSprite(1060,360,10,10);
  orb87.shapeColor="white";
  orb88 = createSprite(1060,400,10,10);
  orb88.shapeColor="white";
  orb89 = createSprite(1060,440,10,10);
  orb89.shapeColor="white";
  orb90 = createSprite(1060,480,10,10);
  orb90.shapeColor="white";
  orb91 = createSprite(1060,520,10,10);
  orb91.shapeColor="white";
  orb92 = createSprite(1020,120,10,10);
  orb92.shapeColor="white";
  orb93 = createSprite(1100,120,10,10);
  orb93.shapeColor="white";
  orb94 = createSprite(1140,120,10,10);
  orb94.shapeColor="white";
  orb95 = createSprite(1180,120,10,10);
  orb95.shapeColor="white";
  orb96 = createSprite(1220,120,10,10);
  orb96.shapeColor="white";
  orb97 = createSprite(1260,120,10,10);
  orb97.shapeColor="white";
  orb98 = createSprite(1260,200,10,10);
  orb98.shapeColor="white";
  orb99 = createSprite(1220,200,10,10);
  orb99.shapeColor="white";
  orb100 = createSprite(1180,200,10,10);
  orb100.shapeColor="white";
  orb101 = createSprite(1140,200,10,10);
  orb101.shapeColor="white";
  orb102 = createSprite(1100,200,10,10);
  orb102.shapeColor="white";

  ghostA = createSprite(550,380,20,20);
  ghostB= createSprite(640,380,20,20);
  ghostC = createSprite(720,380,20,20);
  ghostD = createSprite(810,380,20,20);
  pacMan = createSprite(displayWidth/2+5,110,20,20);

  Cardboard1 = createSprite(displayWidth/8,80,100,20);
  Cardboard1.shapeColor="blue";
  Cardboard2 = createSprite(displayWidth/2+5,20,20,100);
  Cardboard2.shapeColor="blue";
  Cardboard3 = createSprite(displayWidth/4+100,80,120,20);
  Cardboard3.shapeColor="blue";
  Cardboard4 = createSprite(displayWidth*2/3+10,80,120,20);
  Cardboard4.shapeColor="blue";
  Cardboard5 = createSprite(displayWidth*2/3+280,80,100,20);
  Cardboard5.shapeColor="blue";
  Cardboard6 = createSprite(displayWidth/8,160,100,20);
  Cardboard6.shapeColor="blue";
  Cardboard7 = createSprite(displayWidth*2/3+280,160,100,20);
  Cardboard7.shapeColor="blue";
  Cardboard8 = createSprite(displayWidth/2-3,160,380,20);
  Cardboard8.shapeColor="blue";
  cardboard9 = createSprite(displayWidth/2+5,200,20,100);
  cardboard9.shapeColor="blue";
  cardboard10 = createSprite(displayWidth/2-220,250,150,20);
  cardboard10.shapeColor="blue";
  cardboard11 = createSprite(displayWidth/2+220,250,150,20);
  cardboard11.shapeColor="blue";
  cardboard12 = createSprite(displayWidth/4+40,250,20,160);
  cardboard12.shapeColor="blue";
  cardboard13 = createSprite(displayWidth/2+300,250,20,160);
  cardboard13.shapeColor="blue";
  cardboard14 = createSprite(110,250,220,20);
  cardboard14.shapeColor="blue";
  cardboard15 = createSprite(displayWidth/6,displayHeight/2-94,20,100);
  cardboard15.shapeColor="blue";
  cardboard16 = createSprite(110,330,220,20);
  cardboard16.shapeColor="blue";
  cardboard17 = createSprite(displayWidth-110,250,220,20);
  cardboard17.shapeColor="blue";
  cardboard18 = createSprite(displayWidth-220,displayHeight/2-94,20,100);
  cardboard18.shapeColor="blue";
  cardboard19 = createSprite(displayWidth-110,330,220,20);
  cardboard19.shapeColor="blue";
  cardboard20 = createSprite(550,330,100,20);
  cardboard20.shapeColor="blue";
  cardboard21 = createSprite(820,330,100,20);
  cardboard21.shapeColor="blue";
  cardboard22 = createSprite(500,370,20,100);
  cardboard22.shapeColor="blue";
  cardboard23 = createSprite(860,370,20,100);
  cardboard23.shapeColor="blue";
  cardboard24 = createSprite(displayWidth/2-3,410,380,20);
  cardboard24.shapeColor="blue";
  cardboard25 = createSprite(displayWidth-5,375,10,70);
  cardboard25.shapeColor="black";
  cardboard26 = createSprite(3,375,10,70);
  cardboard26.shapeColor="black";
  cardboard27 = createSprite(110,410,250,20);
  cardboard27.shapeColor="blue";
  cardboard28 = createSprite(110,485,250,20);
  cardboard28.shapeColor="blue";
  cardboard29 = createSprite(225,displayHeight/2+63,20,93);
  cardboard29.shapeColor="blue";
  cardboard30 = createSprite(displayWidth-220,displayHeight/2+63,20,75);
  cardboard30.shapeColor="blue";
  cardboard31 = createSprite(displayWidth-105,410,250,20);
  cardboard31.shapeColor="blue";
  cardboard32 = createSprite(displayWidth-105,485,250,20);
  cardboard32.shapeColor="blue";
  cardboard33 = createSprite(displayWidth/3-73,displayHeight/2+60,20,70);
  cardboard33.shapeColor="blue";
  cardboard34 = createSprite(displayWidth/2+300,displayHeight/2+60,20,70);
  cardboard34.shapeColor="blue";
  cardboard35 = createSprite(displayWidth/2-5,displayHeight/2+120,380,20);
  cardboard35.shapeColor="blue";
  cardboard36 = createSprite(displayWidth/2,displayHeight/2+150,20,80);
  cardboard36.shapeColor="blue";
  cardboard37 = createSprite(displayWidth/3-70,displayHeight-190,150,20);
  cardboard37.shapeColor="blue";
  cardboard38 = createSprite(displayWidth/2+300,displayHeight-190,150,20);
  cardboard38.shapeColor="blue";
  cardboard39 = createSprite(displayWidth/2+300,displayHeight-190,150,20);
  cardboard39.shapeColor="blue";
  cardboard40 = createSprite(150,600,90,20);
  cardboard40.shapeColor="blue";
  cardboard41 = createSprite(115,580,20,60);
  cardboard41.shapeColor="blue";
  cardboard42 = createSprite(displayWidth-150,600,90,20);
  cardboard42.shapeColor="blue";
  cardboard43 = createSprite(displayWidth-115,580,20,60);
  cardboard43.shapeColor="blue";

}

function draw() {
  background(0,0,0);  

  pacMan.addImage(pacMan1);
  pacMan.scale=0.2;

  ghostA.addImage(ghost1);
  ghostB.addImage(ghost2);
  ghostC.addImage(ghost3);
  ghostD.addImage(ghost4);

  ghostA.scale=0.2;
  ghostB.scale=0.2;
  ghostC.scale=0.2;
  ghostD.scale=0.2;

  textSize(20)
  text("Score: "+score, 15,35);

  if(pacMan.isTouching(cardboard25)){
   pacMan.x=30;
   pacMan.y=370;
  }

  if(pacMan.isTouching(cardboard26)){
    pacMan.x=displayWidth-30;
    pacMan.y=370;
   }
  
  movement();

  if(frameCount % 40 === 0){
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: ghostA.velocityX=-3
              ghostB.velocityX=3
              ghostC.velocityY=-3
              ghostD.velocityY=3
              break;
      case 2: ghostA.velocityX=3
              ghostB.velocityX=-3
              ghostC.velocityY=3
              ghostD.velocityY=-3
              break;
      case 3: ghostA.velocityY=-3
              ghostB.velocityY=3
              ghostC.velocityX=-3
              ghostD.velocityX=3
              break;
      case 4: ghostA.velocityY=3
              ghostB.velocityY=-3
              ghostC.velocityX=3
              ghostD.velocityX=-3
              break;
      default: break;
    }
  }

  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }
  if(pacMan.isTouching(orb1)){
    score=score+1
    orb1.shapeColor = "black";
  }

drawSprites();
 createEdgeSprites();
 pacMan.bounceOff(wall1);
 pacMan.bounceOff(wall2);
 pacMan.bounceOff(wall3);
 pacMan.bounceOff(wall4);
 pacMan.bounceOff(Cardboard1);
 pacMan.bounceOff(Cardboard2);
 pacMan.bounceOff(Cardboard3);
 pacMan.bounceOff(Cardboard4);
 pacMan.bounceOff(Cardboard5);
 pacMan.bounceOff(Cardboard6);
 pacMan.bounceOff(Cardboard7);
 pacMan.bounceOff(Cardboard8);
 pacMan.bounceOff(cardboard9);
 pacMan.bounceOff(cardboard10);
 pacMan.bounceOff(cardboard11);
 pacMan.bounceOff(cardboard12);
 pacMan.bounceOff(cardboard13);
 pacMan.bounceOff(cardboard14);
 pacMan.bounceOff(cardboard15);
 pacMan.bounceOff(cardboard16);
 pacMan.bounceOff(cardboard17);
 pacMan.bounceOff(cardboard18);
 pacMan.bounceOff(cardboard19);
 pacMan.bounceOff(cardboard20);
 pacMan.bounceOff(cardboard21);
 pacMan.bounceOff(cardboard22);
 pacMan.bounceOff(cardboard23);
 pacMan.bounceOff(cardboard24);
 //pacMan.bounceOff(cardboard25);
 //pacMan.bounceOff(cardboard26);
 pacMan.bounceOff(cardboard27);
 pacMan.bounceOff(cardboard28);
 pacMan.bounceOff(cardboard29);
 pacMan.bounceOff(cardboard30);
 pacMan.bounceOff(cardboard31);
 pacMan.bounceOff(cardboard32);
 pacMan.bounceOff(cardboard33);
 pacMan.bounceOff(cardboard34);
 pacMan.bounceOff(cardboard35);
 pacMan.bounceOff(cardboard36);
 pacMan.bounceOff(cardboard37);
 pacMan.bounceOff(cardboard38);
 pacMan.bounceOff(cardboard39);
 pacMan.bounceOff(cardboard40);
 pacMan.bounceOff(cardboard41);
 pacMan.bounceOff(cardboard42);
 pacMan.bounceOff(cardboard43);

 ghostA.bounceOff(wall1);
 ghostA.bounceOff(wall2);
 ghostA.bounceOff(wall3);
 ghostA.bounceOff(wall4);
 ghostA.bounceOff(Cardboard1);
 ghostA.bounceOff(Cardboard2);
 ghostA.bounceOff(Cardboard3);
 ghostA.bounceOff(Cardboard4);
 ghostA.bounceOff(Cardboard5);
 ghostA.bounceOff(Cardboard6);
 ghostA.bounceOff(Cardboard7);
 ghostA.bounceOff(Cardboard8);
 ghostA.bounceOff(cardboard9);
 ghostA.bounceOff(cardboard10);
 ghostA.bounceOff(cardboard11);
 ghostA.bounceOff(cardboard12);
 ghostA.bounceOff(cardboard13);
 ghostA.bounceOff(cardboard14);
 ghostA.bounceOff(cardboard15);
 ghostA.bounceOff(cardboard16);
 ghostA.bounceOff(cardboard17);
 ghostA.bounceOff(cardboard18);
 ghostA.bounceOff(cardboard19);
 ghostA.bounceOff(cardboard20);
 ghostA.bounceOff(cardboard21);
 ghostA.bounceOff(cardboard22);
 ghostA.bounceOff(cardboard23);
 ghostA.bounceOff(cardboard24);
 ghostA.bounceOff(cardboard25);
 ghostA.bounceOff(cardboard26);
 ghostA.bounceOff(cardboard27);
 ghostA.bounceOff(cardboard28);
 ghostA.bounceOff(cardboard29);
 ghostA.bounceOff(cardboard30);
 ghostA.bounceOff(cardboard31);
 ghostA.bounceOff(cardboard32);
 ghostA.bounceOff(cardboard33);
 ghostA.bounceOff(cardboard34);
 ghostA.bounceOff(cardboard35);
 ghostA.bounceOff(cardboard36);
 ghostA.bounceOff(cardboard37);
 ghostA.bounceOff(cardboard38);
 ghostA.bounceOff(cardboard39);
 ghostA.bounceOff(cardboard40);
 ghostA.bounceOff(cardboard41);
 ghostA.bounceOff(cardboard42);
 ghostA.bounceOff(cardboard43);

 ghostB.bounceOff(wall1);
 ghostB.bounceOff(wall2);
 ghostB.bounceOff(wall3);
 ghostB.bounceOff(wall4);
 ghostB.bounceOff(Cardboard1);
 ghostB.bounceOff(Cardboard2);
 ghostB.bounceOff(Cardboard3);
 ghostB.bounceOff(Cardboard4);
 ghostB.bounceOff(Cardboard5);
 ghostB.bounceOff(Cardboard6);
 ghostB.bounceOff(Cardboard7);
 ghostB.bounceOff(Cardboard8);
 ghostB.bounceOff(cardboard9);
 ghostB.bounceOff(cardboard10);
 ghostB.bounceOff(cardboard11);
 ghostB.bounceOff(cardboard12);
 ghostB.bounceOff(cardboard13);
 ghostB.bounceOff(cardboard14);
 ghostB.bounceOff(cardboard15);
 ghostB.bounceOff(cardboard16);
 ghostB.bounceOff(cardboard17);
 ghostB.bounceOff(cardboard18);
 ghostB.bounceOff(cardboard19);
 ghostB.bounceOff(cardboard20);
 ghostB.bounceOff(cardboard21);
 ghostB.bounceOff(cardboard22);
 ghostB.bounceOff(cardboard23);
 ghostB.bounceOff(cardboard24);
 ghostB.bounceOff(cardboard25);
 ghostB.bounceOff(cardboard26);
 ghostB.bounceOff(cardboard27);
 ghostB.bounceOff(cardboard28);
 ghostB.bounceOff(cardboard29);
 ghostB.bounceOff(cardboard30);
 ghostB.bounceOff(cardboard31);
 ghostB.bounceOff(cardboard32);
 ghostB.bounceOff(cardboard33);
 ghostB.bounceOff(cardboard34);
 ghostB.bounceOff(cardboard35);
 ghostB.bounceOff(cardboard36);
 ghostB.bounceOff(cardboard37);
 ghostB.bounceOff(cardboard38);
 ghostB.bounceOff(cardboard39);
 ghostB.bounceOff(cardboard40);
 ghostB.bounceOff(cardboard41);
 ghostB.bounceOff(cardboard42);
 ghostB.bounceOff(cardboard43);

 ghostC.bounceOff(wall1);
 ghostC.bounceOff(wall2);
 ghostC.bounceOff(wall3);
 ghostC.bounceOff(wall4);
 ghostC.bounceOff(Cardboard1);
 ghostC.bounceOff(Cardboard2);
 ghostC.bounceOff(Cardboard3);
 ghostC.bounceOff(Cardboard4);
 ghostC.bounceOff(Cardboard5);
 ghostC.bounceOff(Cardboard6);
 ghostC.bounceOff(Cardboard7);
 ghostC.bounceOff(Cardboard8);
 ghostC.bounceOff(cardboard9);
 ghostC.bounceOff(cardboard10);
 ghostC.bounceOff(cardboard11);
 ghostC.bounceOff(cardboard12);
 ghostC.bounceOff(cardboard13);
 ghostC.bounceOff(cardboard14);
 ghostC.bounceOff(cardboard15);
 ghostC.bounceOff(cardboard16);
 ghostC.bounceOff(cardboard17);
 ghostC.bounceOff(cardboard18);
 ghostC.bounceOff(cardboard19);
 ghostC.bounceOff(cardboard20);
 ghostC.bounceOff(cardboard21);
 ghostC.bounceOff(cardboard22);
 ghostC.bounceOff(cardboard23);
 ghostC.bounceOff(cardboard24);
 ghostC.bounceOff(cardboard25);
 ghostC.bounceOff(cardboard26);
 ghostC.bounceOff(cardboard27);
 ghostC.bounceOff(cardboard28);
 ghostC.bounceOff(cardboard29);
 ghostC.bounceOff(cardboard30);
 ghostC.bounceOff(cardboard31);
 ghostC.bounceOff(cardboard32);
 ghostC.bounceOff(cardboard33);
 ghostC.bounceOff(cardboard34);
 ghostC.bounceOff(cardboard35);
 ghostC.bounceOff(cardboard36);
 ghostC.bounceOff(cardboard37);
 ghostC.bounceOff(cardboard38);
 ghostC.bounceOff(cardboard39);
 ghostC.bounceOff(cardboard40);
 ghostC.bounceOff(cardboard41);
 ghostC.bounceOff(cardboard42);
 ghostC.bounceOff(cardboard43);

 ghostD.bounceOff(wall1);
 ghostD.bounceOff(wall2);
 ghostD.bounceOff(wall3);
 ghostD.bounceOff(wall4);
 ghostD.bounceOff(Cardboard1);
 ghostD.bounceOff(Cardboard2);
 ghostD.bounceOff(Cardboard3);
 ghostD.bounceOff(Cardboard4);
 ghostD.bounceOff(Cardboard5);
 ghostD.bounceOff(Cardboard6);
 ghostD.bounceOff(Cardboard7);
 ghostD.bounceOff(Cardboard8);
 ghostD.bounceOff(cardboard9);
 ghostD.bounceOff(cardboard10);
 ghostD.bounceOff(cardboard11);
 ghostD.bounceOff(cardboard12);
 ghostD.bounceOff(cardboard13);
 ghostD.bounceOff(cardboard14);
 ghostD.bounceOff(cardboard15);
 ghostD.bounceOff(cardboard16);
 ghostD.bounceOff(cardboard17);
 ghostD.bounceOff(cardboard18);
 ghostD.bounceOff(cardboard19);
 ghostD.bounceOff(cardboard20);
 ghostD.bounceOff(cardboard21);
 ghostD.bounceOff(cardboard22);
 ghostD.bounceOff(cardboard23);
 ghostD.bounceOff(cardboard24);
 ghostD.bounceOff(cardboard25);
 ghostD.bounceOff(cardboard26);
 ghostD.bounceOff(cardboard27);
 ghostD.bounceOff(cardboard28);
 ghostD.bounceOff(cardboard29);
 ghostD.bounceOff(cardboard30);
 ghostD.bounceOff(cardboard31);
 ghostD.bounceOff(cardboard32);
 ghostD.bounceOff(cardboard33);
 ghostD.bounceOff(cardboard34);
 ghostD.bounceOff(cardboard35);
 ghostD.bounceOff(cardboard36);
 ghostD.bounceOff(cardboard37);
 ghostD.bounceOff(cardboard38);
 ghostD.bounceOff(cardboard39);
 ghostD.bounceOff(cardboard40);
 ghostD.bounceOff(cardboard41);
 ghostD.bounceOff(cardboard42);
 ghostD.bounceOff(cardboard43);

}

function movement(){
  if(keyDown("w") || keyDown("UP_ARROW")){
    pacMan.y=pacMan.y-5;
    pacMan.addImage(pacMan4);
  }
  if(keyDown("s") || keyDown("DOWN_ARROW")){
    pacMan.y=pacMan.y+5;
    pacMan.addImage(pacMan2);
  }
  if(keyDown("a") || keyDown("LEFT_ARROW")){
    pacMan.x=pacMan.x-5;
    pacMan.addImage(pacMan3);
  }
  if(keyDown("d") || keyDown("RIGHT_ARROW")){
    pacMan.x=pacMan.x+5;
    pacMan.addImage(pacMan1);
  }
}

//function orbs(){
  for(var i=0; i<displayWidth-10; i++){
   orb=createSprite(i,35,10,10);
   orb.shapeColor="white";
   i=i+50;
  }

  if(pacMan.isTouching(orb)){
    orb.visibility=false;
  }

 //}