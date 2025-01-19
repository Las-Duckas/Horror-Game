import Player from "./player.js";

const canvas = document.getElementById("WHAT");
const ctx = canvas.getContext('2d')
var CANVAS_WIDTH = canvas.width = window.innerWidth
var CANVAS_HEIGHT = canvas.height = window.innerHeight
var mouse= {
  x:CANVAS_WIDTH/2,
  y:CANVAS_HEIGHT/2,
}
var setting = {
  opened: false,
  volume: 100,
}
var startScreen = {
  bg: new Image(),
  1: new Image(),
  2: new Image(),
  3: new Image(),
  extra:30,
  movefactor1:0.01,
  movefactor2:0.02,
  movefactor3:0.03,
  x1:0,
  x2:0,
  x3:0,
  y1:0,
  y2:0,
  y3:0,
  button: {
    img: new Image(),
    x:CANVAS_WIDTH/4,
    y:CANVAS_HEIGHT/4,
    width:CANVAS_WIDTH/2,
    height:CANVAS_HEIGHT/8,
  },
  setting: {
    img: new Image(),
    x:CANVAS_WIDTH/4,
    y:CANVAS_HEIGHT/4 + CANVAS_HEIGHT/8,
    width:CANVAS_WIDTH/2,
    height:CANVAS_HEIGHT/8,
  },
}
startScreen.bg.src = "images/start screen/background.png"
startScreen.button.img.src = "images/start screen/start button.png"
startScreen.setting.img.src = "images/start screen/settings button.png"
startScreen[1].src = "images/start screen/trees1.png"
startScreen[2].src = "images/start screen/trees2.png"
startScreen[3].src = "images/start screen/trees3.png"
var player = new Player();
var gameStarted = false;
var gameFrame = 0;
window.addEventListener('click', e => {
  function defaultButton(x,y,width,height){
    if (e.x > x && e.x < x + width && e.y > y && e.y < y + height) {
      return true;
    }
  }
  if(defaultButton(startScreen.button.x,startScreen.button.y,startScreen.button.width,startScreen.button.height)){
    gameStarted = true;
  }
  if(defaultButton(startScreen.setting.x,startScreen.setting.y,startScreen.setting.width,startScreen.setting.height)){
    
  }
  console.log(e.x + ', ' + e.y);
});//wadda datta

document.addEventListener("mousemove", (e) => {
  function defaultButton(x,y,width,height){
    if (e.x > x && e.x < x + width && e.y > y && e.y < y + height) {
      return true;
    }
  }
  if(defaultButton(startScreen.button.x,startScreen.button.y,startScreen.button.width,startScreen.button.height)){
    startScreen.button.x = CANVAS_WIDTH/4 - 10;
    startScreen.button.y = CANVAS_HEIGHT/4 -10;
    startScreen.button.width =CANVAS_WIDTH/2 + 20;
    startScreen.button.height =CANVAS_HEIGHT/8 + 20;
  }else{
    startScreen.button.width =CANVAS_WIDTH/2;
    startScreen.button.height =CANVAS_HEIGHT/8;
    startScreen.button.x = CANVAS_WIDTH/4;
    startScreen.button.y = CANVAS_HEIGHT/4;
  }
  if(defaultButton(startScreen.setting.x,startScreen.setting.y,startScreen.setting.width,startScreen.setting.height)){
    startScreen.setting.x = CANVAS_WIDTH/4 - 10;
    startScreen.setting.y = CANVAS_HEIGHT/4 + CANVAS_HEIGHT/8 -10;
    startScreen.setting.width =CANVAS_WIDTH/2 + 20;
    startScreen.setting.height =CANVAS_HEIGHT/8 + 20;
  }else{
    startScreen.setting.width =CANVAS_WIDTH/2;
    startScreen.setting.height =CANVAS_HEIGHT/8;
    startScreen.setting.x = CANVAS_WIDTH/4;
    startScreen.setting.y = CANVAS_HEIGHT/4 + CANVAS_HEIGHT/8;
  }
  mouse.x = e.x;
  mouse.y = e.y;
})
document.addEventListener("keydown", (e) => {
  if(gameStarted){
    player.controlsOff(e.keyCode);
  }
})
document.addEventListener("keyup", (e) => {
  if(gameStarted){
    player.controlsOff(e.keyCode);
  }
})
window.onresize = function() {//on resize
  CANVAS_WIDTH = canvas.width = window.innerWidth
  CANVAS_HEIGHT = canvas.height = window.innerHeight

}
function ani() {
  //beginning of the draw function!!!!
  //IF YOU ARE LOOKING FOR THE BEGINING OF THE ANI FUNCTION IT IS HERE!!!!
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  if (gameStarted) {   
    
/*
     *This is the game itself!!
     *DONT SCROLL PAST THIS!!!!
     */
  } else {
    /**
     * this is the Before Game
     * if you want to edit the start screen, you are in the right place
     */
    
    startScreen.x1 = ((mouse.x - CANVAS_WIDTH/2) * startScreen.movefactor1) -startScreen.extra;
    startScreen.y1 = ((mouse.y - CANVAS_HEIGHT/2) * startScreen.movefactor1) -startScreen.extra;
    startScreen.x2 = ((mouse.x - CANVAS_WIDTH/2) * startScreen.movefactor2) -startScreen.extra;
    startScreen.y2 = ((mouse.y - CANVAS_HEIGHT/2) * startScreen.movefactor2) -startScreen.extra;
    startScreen.x3 = ((mouse.x - CANVAS_WIDTH/2) * startScreen.movefactor3) -startScreen.extra;
    startScreen.y3 = ((mouse.y - CANVAS_HEIGHT/2) * startScreen.movefactor3) -startScreen.extra;
    ctx.drawImage(startScreen.bg, startScreen.x3, startScreen.y3, CANVAS_WIDTH + startScreen.extra +startScreen.extra, CANVAS_HEIGHT +startScreen.extra +startScreen.extra);
    ctx.drawImage(startScreen[1], startScreen.x1, startScreen.y1, CANVAS_WIDTH + startScreen.extra +startScreen.extra, CANVAS_HEIGHT +startScreen.extra +startScreen.extra);
    ctx.drawImage(startScreen[2], startScreen.x2, startScreen.y2, CANVAS_WIDTH + startScreen.extra +startScreen.extra, CANVAS_HEIGHT +startScreen.extra +startScreen.extra);
    ctx.drawImage(startScreen[3], startScreen.x3, startScreen.y3, CANVAS_WIDTH + startScreen.extra +startScreen.extra, CANVAS_HEIGHT +startScreen.extra +startScreen.extra);
    ctx.drawImage(startScreen.button.img,startScreen.button.x,startScreen.button.y,startScreen.button.width,startScreen.button.height)
    ctx.drawImage(startScreen.setting.img,startScreen.setting.x,startScreen.setting.y,startScreen.setting.width,startScreen.setting.height)
    }
    gameFrame++;
 
  requestAnimationFrame(ani);
}//end of draw function AKA ANI~
ani();
