export default class Player{
    constructor(){
    this.controller = {
      68: {pressed: false},
      65: {pressed: false},
      83: {pressed: false},
      87: {pressed: false}
    }
    this.qualitys = {
        x: 10,
        y: 10,
        size:{
          x: 100,
          y: 100
        },
        speed:2,
        img: {
          left: new Image(),
          right: new Image(),
          up: new Image(),
          down: new Image(),
          stand: new Image()
        },
        moving:{
          left: false,
          right: false,
          up: false,
          down: false
        },
        canMove: {
          left: true,
          right: true,
          up: true,
          down: true
        },
        frame: 0,
        numFrame: 0,
        imgSize: 1200,
      }
    }
    update(){
        this.qualitys.img.left.src = "/images/player/left.png";
        this.qualitys.img.right.src = "/images/player/Right.png";
        this.qualitys.img.up.src = "/images/player/Up.png";
        this.qualitys.img.down.src = "/images/player/down.png";
        this.qualitys.img.stand.src = "images/player/stand.png";
    }
    move(context, gameFrame, staggerFrame){
        if(this.controller[65].pressed && this.qualitys.canMove.left){
            this.qualitys.x-=this.qualitys.speed;
            this.qualitys.numFrame = 4;
            this.qualitys.moving.left = true;
            console.log(this.qualitys.x + ', ' + this.qualitys.y);
          }else{
            this.qualitys.moving.left = false;
          }
          if(this.controller[68].pressed && this.qualitys.canMove.right){
            this.qualitys.x+=this.qualitys.speed;
            this.qualitys.numFrame = 4;
            this.qualitys.moving.right = true;
            console.log(this.qualitys.x + ', ' + this.qualitys.y);
          }else{
            this.qualitys.moving.right = false;
          }
          if(this.controller[83].pressed && this.qualitys.canMove.down){
            this.qualitys.y+=this.qualitys.speed;
            this.qualitys.moving.down = true;
            this.qualitys.numFrame = 2;
            console.log(this.qualitys.x + ', ' + this.qualitys.y);
          }else{
            this.qualitys.moving.down = false;
          }
          if(this.controller[87].pressed && this.qualitys.canMove.up){
            this.qualitys.y-=this.qualitys.speed;
            this.qualitys.moving.up = true;
            this.qualitys.numFrame = 2;
            console.log(this.qualitys.x + ', ' + this.qualitys.y);
          }else{
            this.qualitys.moving.up = false;
          }
          if(!this.controller[87].pressed && !this.controller[83].pressed && !this.controller[68].pressed && !this.controller[65].pressed){
            this.qualitys.numFrame = 1;
          }
          this.qualitys.frame=this.qualitys.imgSize * (Math.floor(gameFrame/staggerFrame) % this.qualitys.numFrame);
          if(this.qualitys.moving.left){
            context.drawImage(this.qualitys.img.left, this.qualitys.frame,0,this.qualitys.imgSize,this.qualitys.imgSize, this.qualitys.x,this.qualitys.y,this.qualitys.size.x,this.qualitys.size.y);
          }else if(this.qualitys.moving.right){
            context.drawImage(this.qualitys.img.right, this.qualitys.frame,0,this.qualitys.imgSize,this.qualitys.imgSize, this.qualitys.x,this.qualitys.y,this.qualitys.size.x,this.qualitys.size.y);
          }else if(this.qualitys.moving.up){
            context.drawImage(this.qualitys.img.up, this.qualitys.frame,0,this.qualitys.imgSize,this.qualitys.imgSize, this.qualitys.x,this.qualitys.y,this.qualitys.size.x,this.qualitys.size.y);
          }else if(this.qualitys.moving.down){
            context.drawImage(this.qualitys.img.down, this.qualitys.frame,0,this.qualitys.imgSize,this.qualitys.imgSize, this.qualitys.x,this.qualitys.y,this.qualitys.size.x,this.qualitys.size.y);
          }else{
            context.drawImage(this.qualitys.img.stand, this.qualitys.frame,0,this.qualitys.imgSize,this.qualitys.imgSize, this.qualitys.x,this.qualitys.y,this.qualitys.size.x,this.qualitys.size.y);
          }

    }
  border(x,y,width,height){
      if(!(this.qualitys.x > x &&this.qualitys.x + this.qualitys.size.x < x + width && this.qualitys.y > y && this.qualitys.y + this.qualitys.size.y < y + height)){
        if(this.qualitys.x < x){
          this.qualitys.canMove.left = false;
        }
        if(this.qualitys.x + this.qualitys.size.x > x + width ){
          this.qualitys.canMove.right = false
        }
        if(this.qualitys.y < y){
          this.qualitys.canMove.up = false;
        }
        if(this.qualitys.y + this.qualitys.size.y > y + height ){
          this.qualitys.canMove.down = false
        }
      }else{
        this.qualitys.canMove.up = true;
        this.qualitys.canMove.right = true;
        this.qualitys.canMove.left = true;
        this.qualitys.canMove.down = true;
    }
  }
  controlsOff(what){
    this.controller[what].pressed = false;
  }
  controlsOn(nan){
    this.controller[nan].pressed = true;
  }
}
