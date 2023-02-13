class Boss{

    constructor(){

        this.boss = createSprite(1000,350,50,50)
        this.boss.debug=true
        this.boss.scale=0.6
        this.boss.visible=true
        this.bossAttackTimer=0;
        this.bossHit;
       
        this.seedGroup= new Group()
        //this.boomerangGroup= new Group()
        this.acornGroup = new Group()
        
        this.boomerang=createSprite(this.boss.x-100,this.boss.y,50,50);
        this.boomerang.visible=false
        this.boomerang.scale=0.7
        
        this.acorn1=createSprite(this.boss.x-100,this.boss.y, 20, 20)
        this.acorn2=createSprite(this.boss.x-100,this.boss.y-50,20,20)
        this.acorn3=createSprite(this.boss.x-100,this.boss.y+50,20,20)
        this.acornGroup.add(this.acorn1)
        this.acornGroup.add(this.acorn2)
        this.acornGroup.add(this.acorn3)
        this.acorn1.scale=0.7
        this.acorn2.scale=0.7
        this.acorn3.scale=0.7
        this.acorn1.visible=false
        this.acorn2.visible=false
        this.acorn3.visible=false
        this.createTimer=0;
        this.vineGroup;
        this.vineX = 0;
        this.vine;
        this.health=200;
        
        this.animations();
    }

    animations(){
        this.boss.addAnimation("Intro",bossIntro)
        this.boss.addAnimation("Idle",bossIdle)
        this.boss.addAnimation("Create",bossCreate)
        this.boss.addAnimation("FireSeeds",bossFireSeeds)
        this.boss.addAnimation("FAHigh",bossFaceAttackHigh)
        this.boss.addAnimation("FALow",bossFaceAttackLow)
        this.boss.addAnimation("FFIntro",bossFinalFormIntro)
        this.boss.addAnimation("FFIdle",bossFinalFormIdle)
        this.boss.addAnimation("FF_FP",bossFinalFormFP)
        this.boss.addAnimation("Death",bossFinalFormDeath)
        this.boomerang.addAnimation("Image",boomerang)
        this.acorn1.addAnimation("acorn",acorn)
        this.acorn2.addAnimation("acorn",acorn)
        this.acorn3.addAnimation("acorn",acorn)
       
    }

    changeAnimations(){
        this.bossAttackTimer ++;
        this.boss.x = 1000
        
        //HEALTH BAR
        push()
        image(heartImg, width-325, 30, 20, 20)
        fill("white")
        rect(width-300,30,200,20)
        fill("#ff4800")
        rect(width-300,30,this.health,20)
        pop()
        
        

       

        //console.log(this.bossAttackTimer);
        if(this.bossAttackTimer<60){
          player.player.changeAnimation("fightIntro")
        }
        if(this.bossAttackTimer === 80){
            this.boss.changeAnimation("Idle")
        }

        if(this.bossAttackTimer>180 && this.bossAttackTimer<=350){
            this.boss.changeAnimation("FAHigh")
            
            this.boss.x = 800
            
            if(this.boss.isTouching(player.player)){
                if(player.immunityFrames<0){
                player.health--;
                //player.immunityFrames=120
                player.player.x=100
                }
            }
        }
         if(this.bossAttackTimer > 350  && this.bossAttackTimer<=620 ){
            this.boss.changeAnimation("FireSeeds")
            if(this.bossAttackTimer<520){
                this.fireSeedsAttack()
            }
            if(this.boss.isTouching(player.player)){
                player.health--;
                //player.immunityFrames=120
                player.player.x=100
            }
            
            this.seedGroup.collide(player.player, function(s,p){ 
                s.destroy();
                if(player.immunityFrames<0){
                    player.health--;
                    player.immunityFrames = 120;
                }
                console.log("collide")
                
            })
        }
        
        if(this.bossAttackTimer> 620  && this.bossAttackTimer<=920 ){
            this.boss.changeAnimation("Create")
            this.createAttack();
            if(this.boss.isTouching(player.player)){
                player.health--;
                //player.immunityFrames=120
                player.player.x=100
            }
            
            this.acornGroup.collide(player.player, function(a,p){ 
                a.destroy();
                if(player.immunityFrames<0){
                    player.health--;
                    player.immunityFrames = 120;
                }

                console.log("collide")
                

            })
             
            this.boomerang.collide(player.player, function(b,p){ 
                b.destroy();
                if(player.immunityFrames<0){
                    player.health--;
                    player.immunityFrames = 120;
                }
                
                console.log("collide")
                
            })
            
             
        }
      
         if(this.bossAttackTimer> 920 && this.bossAttackTimer<=1090){
            this.boss.changeAnimation("FALow")
            this.boss.x = 800
            if(this.boss.isTouching(player.player)){
                if(player.immunityFrames<0){
                    player.health--;
                    //player.immunityFrames=120
                    player.player.x=100
                    }
            }
        }
         
        if(this.bossAttackTimer>1090 && this.bossAttackTimer<=1390){
            this.boss.changeAnimation("Create")
            this.createAttack();
        } 
        
        if(this.bossAttackTimer>1390 && this.bossAttackTimer<=1660){
            this.boss.changeAnimation("FireSeeds")
            this.fireSeedsAttack()
        }
        if(this.bossAttackTimer>1660){
            this.boss.changeAnimation("Create")
            this.createAttack();
        }   
        
    }
    
    fireSeedsAttack(){
        this.vineGroup = new Group();
        if(this.bossAttackTimer%25==0){
            var seed=createSprite(this.boss.x,this.boss.y-200,10,30)
            seed.velocityX=-1
            seed.velocityY=-10
            seed.lifeTime=100
        }
        if(this.bossAttackTimer>350 && this.bossAttackTimer%50 === 0){
            var seed=createSprite(random(100,700),-5,10,30)
            seed.velocityY=5
            this.seedGroup.add(seed)
            //seed.collide(ground)
            
        }
       
        if(this.vineX!==0){
            var vine=createSprite(this.vineX,ground.y, 20, 20)

            //this.vineX = 0;
        }

       
        

    }
    
    createAttack(){
        this.createTimer++;
        if(this.createTimer>40){   
            this.boomerang.visible = true;
        }
        if(this.createTimer===80){
            this.boomerang.velocityX=-10
        }
        
        var invisWall=createSprite(-100,height/2,10,height)
        this.boomerang.bounceOff(invisWall, function(b, w){
            b.y = 450
        });
        if(this.bossAttackTimer===790){
            this.acorn1.visible = true;
            this.acorn2.visible = true; 
            this.acorn3.visible = true;
            //console.log("yes" + this.bossAttackTimer)
        }
        if(this.createTimer===180){
            this.acorn2.velocityX=-10

        }
        if(this.createTimer===200){
            this.acorn3.velocityX=-10

        }
        if(this.createTimer===220){
            this.acorn1.velocityX=-10

        }
        if(this.createTimer>300){
            this.createTimer=0
            this.acorn1.visible=false
            this.acorn2.visible=false
            this.acorn3.visible=false
            this.boomerang.visible = false;
            this.boomerang.x = this.boss.x-100
            this.boomerang.y = this.boss.y
            this.acorn1.x = this.boss.x - 100;
            this.acorn2.x = this.boss.x - 100;
            this.acorn3.x = this.boss.x - 100;
            this.acorn1.y = this.boss.y;
            this.acorn2.y = this.boss.y - 50;
            this.acorn3.y = this.boss.y + 50;
            this.acorn1.velocityX = 0;
            this.acorn1.velocityY = 0;
            this.acorn2.velocityX = 0;
            this.acorn2.velocityY = 0;
            this.acorn3.velocityX = 0;
            this.acorn3.velocityY = 0;
            this.boomerang.velocityX=0;
        }        
        
    }

    createVine(x){
        var vine=createSprite(x,ground.y)
        vine.addAnimation("vine",vine)
        
    }
}