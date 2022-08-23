function determineWinner ({player, enemy, timerId}){
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'
      if(player.health === enemy.health){
        document.querySelector('#displayText').innerHTML = 'Empate'
      } else if(player.health > enemy.health){   
        document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
      } else if(player.health < enemy.health){   
        document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
      }
  
  }
  
  
  let timer = 20
  let timerId 
  function decreaseTimer(){
    if(timer > 0){
  
      timerId = setTimeout(decreaseTimer, 1000)
      timer--
      document.querySelector('#timer').innerHTML = timer
    }
      if(timer === 0){
        
        determineWinner({player, enemy, timerId})
     
  
    }
  }
  
  
  
  function rectangularCollision({ rectangle1, rectangle2 }){
    return(
      rectangle1.atackBox.position.x + rectangle1.atackBox.width >= rectangle2.position.x &&
      rectangle1.atackBox.position.x <= rectangle2.position.x + rectangle2.width &&
      rectangle1.atackBox.position.y + rectangle1.atackBox.height >= rectangle2.position.y &&
      rectangle1.atackBox.position.y <= rectangle2.position.y + rectangle2.height
      
    )
  }
  