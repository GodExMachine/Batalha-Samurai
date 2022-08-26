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



const player = new Fighter({
    position:{
    x:300,
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
  }


}
})


const enemy = new Fighter({
    position:{
    x:676,
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
    }
  }
})








const keys = {
    a:{
        pressed: false
    },
    d:{
        pressed: false
    },
    ArrowRight:{
        pressed: false
    },
    ArrowLeft:{
        pressed: false
    }


}



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

    // player movement

    if(keys.a.pressed && player.lastKey === 'a'){
        player.velocity.x = -5
        player.switchSprites('run')
    } else if (keys.d.pressed && player.lastKey === 'd'){
        player.velocity.x = 5
        player.switchSprites('run')
    } else{
    player.switchSprites('idle')
    }


    // jumping
    if(player.velocity.y < 0){
      player.switchSprites('jump')
    }else if(player.velocity.y > 0){
      player.switchSprites('fall')
    }



    
    // enemy movement  
  if(keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft'){
    enemy.velocity.x = -5
    enemy.switchSprites('run')
} else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight'){
    enemy.velocity.x = 5
    enemy.switchSprites('run')
}else{
  enemy.switchSprites('idle')
  }

  if(enemy.velocity.y < 0){
    enemy.switchSprites('jump')
  }else if(enemy.velocity.y > 0){
    enemy.switchSprites('fall')
  }


    //dectect collision

    //player acerta
    if(
      rectangularCollision({
        rectangle1: player,
        rectangle2: enemy
      }) &&
      player.isAttacking
    )  {
      player.isAttacking = false
      enemy.health -= 20
      document.querySelector('#enemyHealth').style.width = enemy.health +'%' 
    }

    // inimigo acerta
    if(
      rectangularCollision({
        rectangle1: enemy,
        rectangle2: player
      }) &&
      enemy.isAttacking
    )  {
      enemy.isAttacking = false
      player.health -= 20
      document.querySelector('#playerHealth').style.width = player.health +'%'
    }

    // end game based on helth
    if( enemy.health <= 0 ||  player.health <= 0){
      determineWinner({player, enemy, timerId})

    }

}

animate()



window.addEventListener('keydown', (event) => {
    
    switch(event.key){
        //player keys

        case'd': 
          keys.d.pressed = true
          player.lastKey = 'd'  
         break
        case'a':
          keys.a.pressed = true
          player.lastKey = 'a'  
          break
        case'w':
        if(player.position.y <= 329){
          player.velocity.y = this.player.velocity.y
          } else{player.velocity.y = -20}
          break

        case ' ':
          player.attack()
          break 

        //enemy keys
        case'ArrowRight':
         keys.ArrowRight.pressed = true
          enemy.lastKey =  'ArrowRight'  
          break
        case'ArrowLeft':
          keys.ArrowLeft.pressed = true
          enemy.lastKey = 'ArrowLeft'  
          brea
        case'ArrowUp':  
        if(enemy.position.y <= 329){
          enemy.velocity.y = this.enemy.velocity.y
          } else{enemy.velocity.y = -20}
          break 

          case'ArrowDown':
          enemy.attack()
          break 

    }

})


window.addEventListener('keyup', (event) => {
    switch(event.key){
        //player keys
          case'd':
         keys.d.pressed = false
          break
        case'a':
          keys.a.pressed = false
          break
        case'w':
          keys.w.pressed = false
          break

        //enemy keys
          case'ArrowRight':
         keys.ArrowRight.pressed = false
          break
        case'ArrowLeft':
          keys.ArrowLeft.pressed = false
          break
        case'ArrowUp':
          keys.ArrowUp.pressed = false
          break

    }

})

