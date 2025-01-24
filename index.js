const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')



canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7


/// imagens de fundo disponiveis
var background1 = new Sprite({
position:{
    x: 0,
    y: 0
  },
  imageSrc: './img/background1.png'
})

var background2 = new Sprite({
  position:{
    x: 0,
    y: 0
  },
  imageSrc: './img/background2.png'
})

var background3 = new Sprite({
  position:{
    x: 0,
    y: 0
  },
  imageSrc: './img/background3.png'
})

var background4 = new Sprite({
  position:{
    x: 0,
    y: 0
  },
  imageSrc: './img/background4.png'
})

var background5 = new Sprite({
  position:{
    x: 0,
    y: 0
  },
  imageSrc: './img/background5.png'
})
  
//imagem da lojinha
const shop = new Sprite({
  position:{
    x: 640,
    y: 138
  },
  imageSrc: './img/shop.png',
  scale: 2.67,
  framesMax: 6
  
  
})

var numbackground = 1




///esta função muda a imagen de fundo
function fundoescolhido(){

  if(numbackground === 2){
    background2.update()
  }else
  if(numbackground === 3){
    background3.update()
  }else 
  if(numbackground === 4){
    background4.update()
  }else
  if((numbackground === 5)){
    background5.update()
    shop.update() //desenha a lojinha
  }else
  if(numbackground === 1){
    background1.update()
    numbackground = 1
  }
}

// até aqui 






// aqui muda o fundo direto par ao 4 //<--- usar esse estilo de funcao para a proxima atualizada


function backgroud1(){
  numbackground = 1
  document.getElementById("escolhepemapa").classList.remove("divEscolhemapa");
  document.getElementById("escolhepemapa").innerHTML = '' 
}
function backgroud2(){
  numbackground = 2
  document.getElementById("escolhepemapa").classList.remove("divEscolhemapa");
  document.getElementById("escolhepemapa").innerHTML = ''
}
function backgroud3(){
  numbackground = 3
  document.getElementById("escolhepemapa").classList.remove("divEscolhemapa");
  document.getElementById("escolhepemapa").innerHTML = ''
}
function backgroud4(){
  numbackground = 4
  document.getElementById("escolhepemapa").classList.remove("divEscolhemapa");
  document.getElementById("escolhepemapa").innerHTML = ''
}
function backgroud5(){  
  numbackground = 5 
  document.getElementById("escolhepemapa").classList.remove("divEscolhemapa");
  document.getElementById("escolhepemapa").innerHTML = ''
}








// Exibe aviso se for um dispositivo móvel
function isMobileDevice() {
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
  document.getElementById('mobile-warning').style.display = 'block';
  document.getElementById('main-content').style.display = 'none';
}

















//jogador
var player = undefined

// inimigo
var enemy = undefined



bolsas()

//decreaseTimer()


function animate(){  
  window.requestAnimationFrame(animate)
  
  
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    fundoescolhido()  // aqui  chamamos a função que puxa o fundo escolhido dentro do canvas 
    c.fillStyle = 'rgba(255, 255, 255, 0.15)'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()
     
    player.velocity.x = 0
    enemy.velocity.x = 0




    //movimentação do Player
    if(keys.a.pressed && player.lastKey === 'a'){
        player.velocity.x = VelEsquerdaPlayer   // quanto o player se movimenta
        player.switchSprites('runLeft')
    } else if (keys.d.pressed && player.lastKey === 'd'){
        player.velocity.x = VelDireitaPlayer // quanto o player se movimenta
        player.switchSprites('runRight')
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
    enemy.switchSprites('runLeft')
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight'){
     enemy.velocity.x = VelDireitaInimigo // quanto o inimigo se movimenta
     enemy.switchSprites('runRight')
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
      player.isAttacking && player.frameCurrent ===  framecolisaop1
    )  {
        enemy.velocity.x += 100
        enemy.takeHit()
        player.isAttacking = false
        enemy.health -= danoPlayer  // quanto o player tira de vida
        //document.querySelector('#enemyHealth').style.width = enemy.health +'%' 
        gsap.to('#enemyHealth',{
          width: enemy.health +'%' 
        })
      }


    //caso o player erre o ataque
    if( player.isAttacking && player.frameCurrent === framecolisaop1  ){
      player.isAttacking = false  
    }






    
    //caso o inimigo acerte
    if(
      rectangularCollision({
        rectangle1: enemy,
        rectangle2: player
      }) &&
      enemy.isAttacking && enemy.frameCurrent === framecolisaop2
    )  {
        player.velocity.x -= 100  // aqui faz o jogador ir pra esquerda ou direita se acertado.
        player.takeHit()
        enemy.isAttacking = false
        player.health -= danoInimigo  // quanto o inimigo tira de vida
        //document.querySelector('#playerHealth').style.width = player.health +'%'
        gsap.to('#playerHealth',{
          width: player.health +'%' 
        })
      }


     //caso  o inimigo erre o ataque
     if( enemy.isAttacking && enemy.frameCurrent === framecolisaop2 ){
      enemy.isAttacking = false 
     }







    //termina o jogo quando a vida chegar a 0

    if( enemy.health <= 0 ||  player.health <= 0){
      
      determineWinner({player, enemy, timerId})
    }


    

  
}

animate()




