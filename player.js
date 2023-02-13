class Player{

    constructor(){
        //Creating player
        this.player  = createSprite(400, 100, 50, 50);
        this.animations();
        this.cupheadLeftFlag = false
        this.cupheadRightFlag  = false
        this.cupheadUpFlag = false 
        this.cupheadJumpFlag= false;
        this.cupheadShootFlag = false;
        this.cupheadShootTimer=5
        this.health=3;
        this.immunityFrames=0;
        this.bulletGroup = new Group()
        

        this.player.scale = 0.5;
        this.player.x = 200
        this.player.y = 400




    }

    animations(){
        this.player.addAnimation("standRight", cupheadStandRight);
        //this.player.addAnimation("stand", cupheadStand);
        this.player.addAnimation("crouch", cupheadCrouch);
        this.player.addAnimation("walkRight", cupheadWalkRight);
        this.player.addAnimation("walkLeft", cupheadWalkLeft);
        this.player.addAnimation("walkBottom", cupheadWalkBottom);
        this.player.addAnimation("walkTop", cupheadWalkTop);
        this.player.addAnimation("winpose", cupheadWinpose);
        this.player.addAnimation("jump", cupheadJump);
        this.player.addAnimation("hit", cupheadHit);
        this.player.addAnimation("standLeft", cupheadStandLeft);
        this.player.addAnimation("standUp", cupheadStandUp);
        this.player.addAnimation("standDown", cupheadStandDown);
        //Fight Animations
        this.player.addAnimation("fightIntro", cupheadFightIntro);
        this.player.addAnimation("fightIdle", cupheadFightIdle);
        this.player.addAnimation("fightJump", cupheadFightJump);
        this.player.addAnimation("FightRun", cupheadFightRun);
        this.player.addAnimation("FightRunShooting", cupheadFightRunShooting);
        //this.player.addAnimation("RunShootDiagonalUp",cupheadFightRunShootingDiagonalUp);
        
        this.player.addAnimation("ShootStraight",cupheadShootStraight);
        this.player.addAnimation("ShootUp",cupheadShootUp);
        this.player.addAnimation("ShootDown",cupheadShootDown);
        this.player.addAnimation("ShootDiagonalUp",cupheadShootDiagonalUp);
        this.player.addAnimation("ShootDiagonalDown",cupheadShootDiagonalDown);


    }

    move(){
        if(gamestate==="overworld"){
          if(keyDown("a")|| keyDown(LEFT_ARROW)){
            this.player.x-=3;
            this.player.changeAnimation("walkLeft")
            this.cupheadUpFlag = false
            this.cupheadDownFlag = false
            this.cupheadRightFlag = false
            this.cupheadLeftFlag = true
          }
          else if(keyDown("w") || keyDown(UP_ARROW)){
            this.player.y -= 3;
            this.player.changeAnimation("walkTop")
            this.cupheadUpFlag = true
            this.cupheadDownFlag = false
            this.cupheadRightFlag = false
            this.cupheadLeftFlag = false
          }
          
          else if(keyDown("s") || keyDown(DOWN_ARROW)){
            this.player.changeAnimation("walkBottom")
            this.player.y += 3;
            this.cupheadUpFlag = false
            this.cupheadDownFlag = true
            this.cupheadRightFlag = false
            this.cupheadLeftFlag = false
          }
          else if(keyDown("d")|| keyDown(RIGHT_ARROW)){
            this.player.x+=3;
            this.player.changeAnimation("walkRight")
            this.cupheadUpFlag = false
            this.cupheadDownFlag = false
            this.cupheadRightFlag = true
            this.cupheadLeftFlag = false
          }
          this.player.collide(invisWallGroup)
        }
      
        else if(gamestate==="fight"){
          //Gravity to the player
          this.player.velocityY+=0.5;

          if(keyDown("a")|| keyDown(LEFT_ARROW)){
            this.player.x-=5;
            this.player.changeAnimation("FightRun")
            this.cupheadUpFlag = false
            this.cupheadDownFlag = false
            this.cupheadRightFlag = false
            this.cupheadLeftFlag = true
          }
        

          else if(keyDown("d")|| keyDown(RIGHT_ARROW)){
            this.player.x+=5;
            this.player.changeAnimation("FightRun")
            this.cupheadUpFlag = false
            this.cupheadDownFlag = false
            this.cupheadRightFlag = true
            this.cupheadLeftFlag = false
          }
          else{
            this.player.changeAnimation("cupheadFightIdle")
          }
          if(keyDown("space") && this.player.y>=(ground.y-90)){
            this.player.velocityY = -12;
            this.player.changeAnimation("fightJump")
            this.cupheadUpFlag = false
            this.cupheadDownFlag = false
            this.cupheadRightFlag = false
            this.cupheadLeftFlag = false 
            this.cupheadJumpFlag = true
            //this.player.changeAnimation("fightJump")
      
            

            //HEALTH OF BOSS
          /*   this.bulletGroup.collide(boss.boss,function(bullet,boss){
              bullet.destroy()
              boss.health--;  
              console.log("Bullet hit")
              console.log("boss health in player.js: "+boss.health);
            }) */

          }
          if(keyDown("j")){
            this.cupheadShootFlag=true;
            this.player.changeAnimation("FightRunShooting") 
          }
          
      
        }
        this.immunityFrames--;
        //console.log(this.immunityFrames)

        if(this.immunityFrames>=0){
          this.invincibility();
        }

        //HEALTH DETAILS
        
        push()
          image(heartImg, 10, 20, 30, 30);
          stroke("red")
          //strokeWidth(2);
          fill("white")
          textSize(30)
          text(this.health,45,45)
        pop()
        
        
        if(this.health<=0){
          this.health=0
          gamestate="end"
          //Dying cuphead animation
          //GameOver text/animation

        }

        
      }

      
     shoot(){
        if(keyDown("j") && this.cupheadShootTimer<=0){
          var bullet=createSprite(this.player.x,this.player.y,30,10)
          bullet.velocityX=20;
          this.cupheadShootTimer=5;
          this.bulletGroup.add(bullet)
          
        }
       this.cupheadShootTimer--;
      
      
      }
      
      standingAnimations(){
        //STANDING ANIMATION OF CUPHEAD
        if(this.cupheadUpFlag){
            this.player.changeAnimation("standUp");
        }
        else if(this.cupheadDownFlag){
            this.player.changeAnimation("standDown");
        }
        else if(this.cupheadRightFlag){
            this.player.changeAnimation("standRight");
        }
        else if(this.cupheadLeftFlag){
            this.player.changeAnimation("standLeft");
        }
        if(this.cupheadJumpFlag){
            this.player.changeAnimation("fightJump")
        }
        if(this.cupheadRightFlag){
            this.player.changeAnimation("standRight");
          }
          else if(player.cupheadLeftFlag){
            this.player.changeAnimation("standLeft");
          }
        if(this.cupheadShootFlag){
          this.player.changeAnimation("FightRunShooting")
        }
        


        
      }

      invincibility(){

      }


}