var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2,player3;
var players;
var player_img,player2_img,player3_img;
var map,mapSprite;
var stopGroup,stop;
var check1,check2,check3,check4,check5,check6,check7,check8,check10,check11;
var camper,owner,wife,groundskeeper,businessman;
var speed = 0.2;
var Luigi;
var camp1970,camp1970IMG;
var pills,pillsIMG;
var mark,markIMG;
var bird,birdIMG;
var pillSingle;

function preload(){
  player3_img = loadImage("images/D1.png");
  player2_img = loadImage("images/D2.png");
  player_img = loadImage("images/D3.png");
  map = loadImage("images/Apogee copy 2.png");
  camper1 = loadImage("images/tile007.png");
  owner1 = loadImage("images/tile052 copy 2.png");
  wife1 = loadImage("images/tile004.png");
  groundskeeper1 = loadImage("images/tile058.png");
  businessman1 = loadImage("images/tile052 copy.png");
  camp1970IMG = loadImage("images/Camp1970.png");
pillsIMG = loadImage("images/pills.png")
birdIMG = loadImage("images/deadBird.png")

markIMG = loadAnimation("images/tile110.png","images/tile111 2.png","images/tile111.png","images/tile1101.png","images/tile1111.png","images/tile1614.png")

  Luigi = loadSound("Luigi.mp3")
}
function setup() {
  
  createCanvas(810, 486);
  //Luigi.play();

camera.y = camera.y+50

  database = firebase.database();

  game = new Game();
  //BARRIERS   Move to Top of setup to hide
if(1===1){
  stopGroup = new Group();
  //mansionHallway
  console.log("p")
 game.barrier(2220,2990,50,60); 
 game.barrier(2364,3092,300,50); 
 game.barrier(2544,3032,100,50); 
 game.barrier(2652,3098,50,100); 
 game.barrier(2280,2918,50,50); 
 game.barrier(2316,2859,50,50); 
 game.barrier(2610,2546,50,800); 
 game.barrier(1191,2314,600,50); 
 game.barrier(2374,2335,20,460); 
 game.barrier(2473,2720,250,40); 
 game.barrier(1989,1510,450,40); 
 game.barrier(2289,1560,120,400); 
 game.barrier(2444,1795,320,160); 
 game.barrier(2017,1842,90,120); 
 game.barrier(1795,1533,60,200); 
 game.barrier(1536,1641,410,40); 
 game.barrier(1128,1605,450,160); 
 game.barrier(2832,1810,200,240); 
 game.barrier(2190,1533,60,200); 
 game.barrier(2000,2100,700,20); 
 game.barrier(1494,2190,20,300); 
 game.barrier(1587,2000,300,100); 
 game.barrier(932,2083,20,460); 
 game.barrier(1459,2000,20,200); 
 game.barrier(1172,2060,520,20); 
 game.barrier(2266,2255,200,300); 
 game.barrier(2964,2011,20,300); 
 game.barrier(2762,2139,300,120); 
 game.barrier(2657,1420,600,20); 
 game.barrier(2954,1605,30,200); 
 game.barrier(2312,2795,60,20); 

 game.barrier(340,856,600,30); 
 game.barrier(2646,1603,30,20); 

 game.barrier(1743,3232,10000,30);
 game.barrier(-858,3100,30,300);
 game.barrier(-981,2956,300,30);
 game.barrier(-1092,2784,30,300);
 game.barrier(-1279,2640,300,30);
 game.barrier(-1200,2109,30,1000);
 game.barrier(-1177,1550,30,30);
 game.barrier(-1111,1509,30,30);
 game.barrier(-848,1469,900,30);
 game.barrier(-267,1526,300,220); 
 game.barrier(7,1343,300,30); 
 game.barrier(-149,1409,30,120); 
 game.barrier(59,1250,400,200); 
 game.barrier(-40,1035,20,200); 
 game.barrier(21,862,100,200); 
 game.barrier(1035,1350,600,300); 
 game.barrier(602,980,20,700); 
 game.barrier(648,1211,540,200); 
 game.barrier(339,936,150,40); 
 game.barrier(-279,1891,100,10); 
 game.barrier(-379,1945,10,10); 
 game.barrier(-245,2027,60,15); 
 game.barrier(648,1211,500,200); 
 game.barrier(648,1211,500,200); 
 game.barrier(-871,2527,50,50); 
 game.barrier(-871,2257,50,50); 
 game.barrier(363,2257,50,50); 
 game.barrier(363,2527,50,50); 

 game.barrier(1068,3040,200,100); 
 game.barrier(656,3003,200,100); 
 game.barrier(350,2929,200,100); 
 game.barrier(-36,2480,200,140); 
 game.barrier(-36,2217,200,140); 
 game.barrier(-467,2480,200,140); 
 game.barrier(-467,2217,200,140); 
 game.barrier(1977,1597,60,20); 


 game.barrier(2028,2584,100,100); 
 game.barrier(2068,2524,50,50); 
 game.barrier(2267,2555,80,20); 
 game.barrier(1087,2873,80,20); 

}
//checks
if(1===1){
  check1 = createSprite(350,2929,250,160)
  check2 = createSprite(656,3003,250,160)
check3 = createSprite(1068,3040,250,160)
check4 = createSprite(1180,2373,20,20)
check5 = createSprite(354,1237,300,200)
check6= createSprite(2651,1800,10,200)
check7= createSprite(920,1800,20,200)
check8= createSprite(910,1800,110,200)
check9= createSprite(2646,1503,800,20)
check10= createSprite(-993,2118,200,200)
check11= createSprite(1750,2433,200,200)


stopGroup.add(check7);


}
  game.getState();
  game.start();
   

camper = createSprite(1100,2410,20,20)
camper.addImage(camper1);
camper.scale = 3;
owner = createSprite(1200,2410,20,20)
owner.addImage(owner1);
owner.scale = 3;
wife = createSprite(1300,2410,20,20)
wife.addImage(wife1);
wife.scale = 3;
groundskeeper = createSprite(1000,2410,20,20)
groundskeeper.addImage(groundskeeper1);
groundskeeper.scale = 3;
businessman = createSprite(1400,2410,20,20)
businessman.addImage(businessman1);
businessman.scale = 3;
pills = createSprite(-10000,-10000,50,50)
bird = createSprite(-993,2118,200,200)
bird.addImage(birdIMG)
bird.scale = 0.2;


mark1 = createSprite(350,2929,250,160)
mark2 = createSprite(656,3003,250,160)
mark3 = createSprite(1068,3040,250,160)
mark4 = createSprite(1180,2373,20,20)
mark5 = createSprite(354,1237,10,200)
mark6= createSprite(2651,1800,10,200)
mark8= createSprite(910,1800,60,200)
mark9= createSprite(2646,1503,800,20)
mark10= createSprite(-993,2118,200,200)
mark11= createSprite(1750,2433,200,200)
mark1.addAnimation("markIMG",markIMG);
mark2.addAnimation("markIMG",markIMG);
mark3.addAnimation("markIMG",markIMG);
mark4.addAnimation("markIMG",markIMG);
mark5.addAnimation("markIMG",markIMG);
mark6.addAnimation("markIMG",markIMG);
mark8.addAnimation("markIMG",markIMG);
mark9.addAnimation("markIMG",markIMG);
mark10.addAnimation("markIMG",markIMG);
mark11.addAnimation("markIMG",markIMG);
mark1.scale = 3;
mark2.scale = 3;
mark3.scale = 3;
mark4.scale = 3;
mark5.scale = 3;
mark6.scale = 3;
mark8.scale = 3;
mark9.scale = 3;
mark10.scale = 3;
mark11.scale = 3;


pillSingle = createSprite(553,1028,50,50)
pillSingle.addImage(pillsIMG);
pillSingle.scale = 0.1;
}

function draw() {

  if(frameCount%3700 === 1){
  Luigi.play();
 }
 
  if (playerCount >3) {
    player.updateCount(0);
    game.update(0);
    }
   if (playerCount === 3) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
  
   
}