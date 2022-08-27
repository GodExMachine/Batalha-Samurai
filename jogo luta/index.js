const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')



canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7

const background = new Sprite({
position:{
  x: 0,
  y: 0
},
imageSrc: './img/background.png'

})

const shop = new Sprite({
  position:{
    x: 640,
    y: 138
  },
  imageSrc: './img/shop.png',
  scale: 2.67,
  framesMax: 6
  
  
  })


//jogador
const player = new Fighter({
    position:{
    x:250,
    y:200
},
velocity:{
    x:0,
    y:0
},
offset:{
  x:0,
  y:0
},
 imageSrc: './img/samuraiMack/Idle.png',
 scale: 2.5,
 framesMax: 8,
 offset:{
  x: 215,
  y: 156
},
  sprites:{
    idle:{
      imageSrc: './img/samuraiMack/Idle.png',
      framesMax: 8,
    },
    run:{
      imageSrc: './img/samuraiMack/Run.png',
      framesMax: 8,   
    },
    jump:{
      imageSrc: './img/samuraiMack/Jump.png',
      framesMax: 2,
    },
    fall:{
      imageSrc: './img/samuraiMack/Fall.png',
      framesMax: 2,  
    },
    attack1:{
      imageSrc: './img/samuraiMack/Attack1.png',
      framesMax: 6, 
    },
    takeHit:{
      imageSrc: './img/samuraiMack/Take Hit2.png',
      framesMax: 4
    }
  },
  attackBox:{
    offset:{
      x:100,
      y:50
    },
    width: 165,
    height: 50
  }


})



// inimigo
const enemy = new Fighter({
    position:{
    x:726,
    y:200
},
velocity:{
    x:0,
    y:0
},
color: 'blue'
,
offset:{
  x:-50,
  y:0
},

imageSrc: './img/kenji/Idle.png',
scale: 2.5,
framesMax: 4,
offset:{
 x: 215,
 y: 170
  },
    sprites:{
    idle:{
      imageSrc: './img/kenji/Idle.png',
      framesMax: 4,
    },
    run:{
      imageSrc: './img/kenji/Run.png',
      framesMax: 8,   
    },
    jump:{
      imageSrc: './img/kenji/Jump.png',
      framesMax: 2,
    },
    fall:{
      imageSrc: './img/kenji/Fall.png',
      framesMax: 2,  
    },
    attack1:{
      imageSrc: './img/kenji/Attack1.png',
      framesMax: 4, 
    },
    takeHit:{
      imageSrc: './img/kenji/Take hit2.png',
      framesMax: 3 
    }
  },
  attackBox:{
    offset:{
      x:-165,
      y:50
    },
    width: 165,
    height: 50
  }

})









decreaseTimer()

function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    shop.update()
    player.update()
    enemy.update()
     
    player.velocity.x = 0
    enemy.velocity.x = 0

    //movimentação do Player
    if(keys.a.pressed && player.lastKey === 'a'){
        player.velocity.x = VelEsquerdaPlayer   // quanto o player se movimenta
        player.switchSprites('run')
    } else if (keys.d.pressed && player.lastKey === 'd'){
        player.velocity.x = VelDireitaPlayer // quanto o player se movimenta
        player.switchSprites('run')
    } else{
    player.switchSprites('idle')
    }


    //anima o pulo e quadra do jogador
    if(player.velocity.y < 0){
      player.switchSprites('jump')
    }else if(player.velocity.y > 0){
      player.switchSprites('fall')
    }



    
  //movimentação do inimigo 
  if(keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft'){
    enemy.velocity.x = VelEsquerdaInimigo   // quanto o inimigo se movimenta
    enemy.switchSprites('run')
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight'){
     enemy.velocity.x = VelDireitaInimigo // quanto o inimigo se movimenta
     enemy.switchSprites('run')
    } else{
       enemy.switchSprites('idle')
      }

  if(enemy.velocity.y < 0){
     enemy.switchSprites('jump')
  } else if(enemy.velocity.y > 0){
     enemy.switchSprites('fall')
    }



    //caso o player acerte
    if(
      rectangularCollision({
        rectangle1: player,
        rectangle2: enemy
      }) &&
      player.isAttacking && player.frameCurrent ===  4
    )  {
        enemy.takeHit()
        player.isAttacking = false
        enemy.health -= danoPlayer  // quanto o player tira de vida
        document.querySelector('#enemyHealth').style.width = enemy.health +'%' 
      }


    //caso o player erre o ataque
    if( player.isAttacking && player.frameCurrent === 4 ){
      player.isAttacking = false  
    }



    //caso o inimigo acerte
    if(
      rectangularCollision({
        rectangle1: enemy,
        rectangle2: player
      }) &&
      enemy.isAttacking && enemy.frameCurrent === 2
    )  {
        player.takeHit()
        enemy.isAttacking = false
        player.health -= danoInimigo  // quanto o inimigo tira de vida
        document.querySelector('#playerHealth').style.width = player.health +'%'
      }

     //caso  o inimigo erre o ataque
     if( enemy.isAttacking && enemy.frameCurrent === 2 ){
      enemy.isAttacking = false 
     }

    //termina o jogo quando a vida chegar a 0

    if( enemy.health <= 0 ||  player.health <= 0){
     
      determineWinner({player, enemy, timerId})
    }


    

  
}

animate()

