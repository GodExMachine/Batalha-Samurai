
//leitura dos controles


// detecta se o botao está precionado
const keys = {
    a:{
        pressed: false
    },
    attackplayer:{
        pressed: false
    },
    d:{
        pressed: false
    },
    w:{
      pressed: false
    },
    ArrowRight:{
        pressed: false
    },
    attackinimigo:{
        pressed: false
    },
    ArrowLeft:{
        pressed: false
    },
    ArrowUp:{
        pressed: false
    },
    chu:{
      pressed: false
    },
    superpower:{
      pressed: false
    }
  
  
  }
  




  
  //ao precionar o botão -->
  var cliques = 0
  window.addEventListener('keydown', (event) => {
    // player keys
    if(!player.dead){ // <-- "se inimigo não está morto faça >"

      switch(event.key){
          case direitaplayer: 
            P1direita()
            break
          case esquerdaplayer:
            P1esquerda()
            break
          case puloplayer:
            P1pulo()
            break
          case attackplayer:
            P1attack()
            break 
          case churiquem:
            P1especial()
            break
            
              





      }
    }
  



    // enemy keys
    if(!enemy.dead){   // <-- "se inimigo não está morto faça >"
    
        switch(event.key){
          
          case direitainimigo:
            P2direita()
            break
          case esquerdainimigo:
            P2esquerda()
            break
          case puloinimigo:  
            P2pulo()
            break 
          case attackinimigo:
            P2attack()
            break 
          case superpower:
            P2especial()   
            break 
            
        }
    }
  })



  
  //ao soltar o botão -->
  window.addEventListener('keyup', (event) => {

    switch(event.key){ 
        //player keys
        case direitaplayer:
          keys.d.pressed = false
          break
        case esquerdaplayer:
          keys.a.pressed = false
          break
        case puloplayer:
          keys.w.pressed = false
          break
        case attackplayer:
          keys.attackplayer.pressed = false
          break
        case churiquem:
          keys.chu.pressed = false
          break
     
        
          
  
  
        //enemy keys
          case direitainimigo:
         keys.ArrowRight.pressed = false
          break
        case esquerdainimigo:
          keys.ArrowLeft.pressed = false
          break
        case puloinimigo:
          keys.ArrowUp.pressed = false
          break
        case attackinimigo:
          keys.attackinimigo.pressed = false
          break
        case superpower:
          keys.superpower.pressed = false
           break
        
  
    }
  
  })

  ///funçoes do player 1 ---------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


  //funçao que move o player para esquerda
  function P1direita(){
    keys.d.pressed = true
    player.lastKey = 'd' 
    removeGuiaBotao()
  }

  




  //funçao que move o player para esquerda
  function P1esquerda(){
    keys.a.pressed = true
    player.lastKey = 'a'  
    removeGuiaBotao()
   }

  //funçao que faz o jogador pular
  function P1pulo(){
    if(player.position.y <= 329){
       player.velocity.y = this.player.velocity.y
    } else{player.velocity.y = AltPuloPlayer}  // quanto o jogador pula
    removeGuiaBotao()
  }

  //funçao de ataque do jogador
  function P1attack(){
    
    keys.attackplayer.pressed =  true
    player.attackBox.width = 165  //posiçao
    player.attack()
    removeGuiaBotao()
  }

  //funçao de ataque especial do jogador
  function P1especial(){
    if(bolsashuriken > 0 && timer < 49 ){
        player.attackBox.offset.x = 90 //posiçao
        player.attackBox.width = 630//tamanho
        keys.chu.pressed = true  
        player.attackshuriken()
        console.log('churiquem de fogoooooo!')
        somshurikem()
        bolsashuriken--
        }
  }




  
  ///funçoes do player 2---------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




  //função que move o player 2 para direita
  function P2direita(){
    keys.ArrowRight.pressed = true
    enemy.lastKey =  'ArrowRight'  
    removeGuiaBotao()
  }

  //função que move o player 2 para esquerda
  function P2esquerda(){
    keys.ArrowLeft.pressed = true
    enemy.lastKey = 'ArrowLeft'  
    removeGuiaBotao()
  }

  //função que faz o jogador pular
  function P2pulo(){
    if(enemy.position.y <= 129){
        enemy.velocity.y = this.enemy.velocity.y
        } else{enemy.velocity.y = AltPuloInimigo} //  quanto o inimigo pula
    removeGuiaBotao()
  }

  //função de ataque do player 2
  function P2attack(){
    framecolisaop2 = 2
    keys.attackinimigo.pressed = true
    enemy.attackBox.offset.x = -165  //posiçao
    enemy.attackBox.width = 165 //tamanho
    
    enemy.attack()
    removeGuiaBotao()
  }

  //função de ataque especial do player 2
  function P2especial(){
    if(bolsasuperpower > 0 && timer < 49 ){
        enemy.attackBox.offset.x = -630  //posiçao  
        enemy.attackBox.width = 630 //tamanho
        keys.superpower.pressed = true
        framecolisaop2 = 2
        enemy.attackspear()
        console.log('shuriken das sombras')
        bolsasuperpower--
        somshurikem()
          }
    
  }


