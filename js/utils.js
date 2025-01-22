
// determina o jogador  vencedor
function determineWinner ({player, enemy, timerId}){
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'
      if(player.health === enemy.health){
        document.querySelector('#displayText').innerHTML = 'Empate'
      } else if(player.health > enemy.health){   
        document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
        enemy.switchSprites('death')
      } else if(player.health < enemy.health){   
        document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
        player.switchSprites('death')
      }
  
  }

var showbox = false
function show(){
  showbox = true
}

var p1ok = false
var p2ok = false

function comecar(){
  if(p1ok && p2ok){
    decreaseTimer()
  }
}


function somatempo(){

  timer += 20
}


  // temporizador 
  let timer = tempodojogo  
  let timerId 
  function decreaseTimer(){
    
    
    if(timer > 0 ){
  
      timerId = setTimeout(decreaseTimer, 1000)
      timer--
      document.querySelector('#timer').innerHTML = timer
      bolsas()
    
    }

     if(timer === 25){
      bolsashuriken = bolsashuriken + 2
      bolsasuperpower = bolsasuperpower + 2
     }
  
      if(timer === 0){
        
        determineWinner({player, enemy, timerId})
     
  
      }

  }
  
  
  //função que detecta a colisao dos jogadores
  function rectangularCollision({ rectangle1, rectangle2 }){
    return(
      rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
      rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
      rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
      rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
      
    )
  }
  



//tocar musica de fundo----
var timermusica = 0
var audio
function initAudioPlayer() {
  if(timermusica > 0){
    audio.pause()
  }else{
        audio = new Audio();
        audio.src = "./sounds/battletheme5.ogg";
        audio.play();
        audio.loop = true
        timermusica += 1
        
        document.querySelector('#playmusica').innerHTML=("Stop")
   }
  
}

//funcao faz os sons do ataque de shuriken
var estrelaninja = document.querySelector('#sonshurikenID')

function somshurikem(){
  estrelaninja.play()
}

// funçao que faz o barulho de tomar dano
var corte = document.querySelector('#sondedanoID')

function sondeDano(){
  corte.play()
}


//esta funcao mostra a guia de botoes
function guiabotoes(){
  document.querySelector('#controlesdisplay').src ='./img/Controles.png'
}

//esta funcao remove a guia de botoes
function removeGuiaBotao(){
  if(timer <= tempodojogo - 2){ 
    document.querySelector('#controlesdisplay').src =' ' // REMOVE A GUIA DE BOTOES APOS 2 SEGUNDOS
    }

}

// funcao que recarega a pagina
function refresh(){
  location.reload();
}



function bolsas(){
  document.getElementById('bolsa1').textContent = bolsashuriken
  document.getElementById('bolsa2').textContent = bolsasuperpower
}