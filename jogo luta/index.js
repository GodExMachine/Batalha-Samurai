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
offSet:{
  x:0,
  y:0
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
offSet:{
  x:-50,
  y:0
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
    } else if (keys.d.pressed && player.lastKey === 'd'){
        player.velocity.x = 5
    }

    
    // enemy movement
    if(keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft'){
        enemy.velocity.x = -5
    } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight'){
        enemy.velocity.x = 5
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
        if(player.position.y <= 330){
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
        if(enemy.position.y <= 330){
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

