
//desenha as sprites

class Sprite {
  constructor({ 
    position, 
    imageSrc, 
    scale = 1, 
    framesMax = 1, 
    offset = {x: 0, y: 0} 
  }) {
    this.position = position
    this.width = 50
    this.height = 150
    this.image = new Image()
    this.image.src = imageSrc
    this.scale = scale
    this.framesMax = framesMax
    this.frameCurrent = 0
    this.framesElapsed = 0
    this.framesHold = 10
    this.offset =  offset
  }


  draw() {
    c.drawImage(
      this.image,
      this.frameCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,

      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
    )
  }

  animateFrames(){
    this.framesElapsed++

    if (this.framesElapsed % this.framesHold === 0) {

      if (this.frameCurrent < this.framesMax - 1) {
        this.frameCurrent++
      } else {
        this.frameCurrent = 0
      }
    }
  }

  update() {
    this.draw()
    this.animateFrames()

  }
}



// desenha os lutadores

class Fighter extends Sprite {
  constructor({
    position,
    velocity,
    color = 'red',
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = {x: 0, y: 0},
    sprites,
    attackBox = {offset:{}, width: undefined, height: undefined}

  }) {

    super({
      position,
      imageSrc,
      scale,
      framesMax,
      offset,
      
    })

    
    this.velocity = velocity
    this.width = 50
    this.height = 150
    this.lastKey
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      offset: attackBox.offset,
      width: attackBox.width,
      height: attackBox.height,

    }
    this.color = color
    this.isAttacking = false
    this.health = 100
    this.frameCurrent = 0
    this.framesElapsed = 0
    this.framesHold = 5
    this.sprites = sprites 
    this.dead = false

    for( const sprite in this.sprites){
      sprites[sprite].image = new Image()
      sprites[sprite].image.src = sprites[sprite].imageSrc
    }
    console.log(this.sprites);
  }



  update() {
    this.draw() 
    if(!this.dead) this.animateFrames()


      
    

    // atack boxes
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y

    ///--------------------->>>>>>
    //desenha a attack box
     //c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
    

     //aqui so libera os movimentos de jogo igual true
    
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    

  //gravity function
    if (this.position.y + this.height + this.velocity.y >= canvas.height - 96) {
      this.velocity.y = 0
      this.position.y = 330
    } else this.velocity.y += gravity
  }



  attack() {
    this.switchSprites('attack1')
    this.isAttacking = true
  }


  attackshuriken(){ 
    this.switchSprites('attack3')
    this.isAttacking = true
  }

  attackspear(){ 
    this.switchSprites('attack3')
    this.isAttacking = true
  }


  takeHit(){
    this.switchSprites('takeHit')
    sondeDano()
    
  }
 

 
 


switchSprites(sprite){

    // sobrepoe a animação morte sobre as outras
    if(this.image === this.sprites.death.image){
      if (this.frameCurrent === this.sprites.death.framesMax -1)
       this.dead = true
      return}
 
    // sobrepoe a animação de ataque sobre as outras
    if(this.image === this.sprites.attack1.image &&
      this.frameCurrent < this.sprites.attack1.framesMax - 1
    )
     return

    // sobrepoe a animação de ataque shuriken sobre as outras
    if(this.image === this.sprites.attack3.image &&
      this.frameCurrent < this.sprites.attack3.framesMax - 1
    )
     return

    // sobrepoe a animação de receber dano sobre as outras
    if(this.image === this.sprites.takeHit.image &&
    this.frameCurrent < this.sprites.takeHit.framesMax - 1
    )
     return


  
  /////////troca sprites////////


  
    switch (sprite){
    case 'idle':
      if(this.image !== this.sprites.idle.image){
      this.image =  this.sprites.idle.image
      this.framesMax =  this.sprites.idle.framesMax
      this.frameCurrent = 0
    }
      break;
    case 'runLeft':
      if(this.image !== this.sprites.runLeft.image){
      this.image =  this.sprites.runLeft.image 
      this.framesMax =  this.sprites.runLeft.framesMax
      this.frameCurrent = 0
    }
    break;
    case 'runRight':
      if(this.image !== this.sprites.runRight.image){
      this.image =  this.sprites.runRight.image 
      this.framesMax =  this.sprites.runRight.framesMax
      this.frameCurrent = 0
    }
    break;
    case 'jump':
      if(this.image !== this.sprites.jump.image){
      this.image = this.sprites.jump.image
      this.framesMax =  this.sprites.jump.framesMax
      this.frameCurrent = 0
      }
    break;
    case 'fall':
      if(this.image !== this.sprites.fall.image){
      this.image = this.sprites.fall.image
      this.framesMax =  this.sprites.fall.framesMax
      this.frameCurrent = 0
      }
    break;
    case 'attack1':
      if(this.image !== this.sprites.attack1.image){
      this.image = this.sprites.attack1.image
      this.framesMax =  this.sprites.attack1.framesMax
      this.frameCurrent = 0
      }
    break;
    case 'attack3':
      if(this.image !== this.sprites.attack3.image){
      this.image = this.sprites.attack3.image
      this.framesMax =  this.sprites.attack3.framesMax
      this.frameCurrent = 0
      }
    break;
    case 'takeHit':
      if(this.image !== this.sprites.takeHit.image){
      this.image = this.sprites.takeHit.image
      this.framesMax =  this.sprites.takeHit.framesMax
      this.frameCurrent = 0
      }
    break;

    case 'death':
      if(this.image !== this.sprites.death.image){
      this.image = this.sprites.death.image
      this.framesMax =  this.sprites.death.framesMax
      this.frameCurrent = 0
      }
    
  }
  







}
}

