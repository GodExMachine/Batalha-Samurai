
// personagem mack para o player 1
const mack =  new Fighter({
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
    runLeft:{
      imageSrc: './img/samuraiMack/RunLeft.png',
      framesMax: 8,   
    },
    runRight:{
      imageSrc: './img/samuraiMack/RunRight.png',
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
    attack3:{
      imageSrc: './img/samuraiMack/Attack3.png',
      framesMax: 6
    },
    takeHit:{
      imageSrc: './img/samuraiMack/Take Hit2.png',
      framesMax: 4
    },
    death:{
      imageSrc: './img/samuraiMack/Death.png',
      framesMax: 6
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


// personagem mack para o player 2
const mack2 =  new Fighter({
    position:{
    x:726,
    y:200
},
velocity:{
    x:0,
    y:0
},
offset:{
  x:-50,
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
    runLeft:{
      imageSrc: './img/samuraiMack/RunLeft.png',
      framesMax: 8,   
    },
    runRight:{
      imageSrc: './img/samuraiMack/RunRight.png',
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
    attack3:{
      imageSrc: './img/samuraiMack/Attack3.png',
      framesMax: 6
    },
    takeHit:{
      imageSrc: './img/samuraiMack/Take Hit2.png',
      framesMax: 4
    },
    death:{
      imageSrc: './img/samuraiMack/Death.png',
      framesMax: 6
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





//personagen kenji para o player 1
const kenji1 = new Fighter({
    position:{
    x:250,
    y:200
},
velocity:{
    x:0,
    y:0
},
color: 'blue'
,
offset:{
  x:0,
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
    runLeft:{
      imageSrc: './img/kenji/RunLeft.png',
      framesMax: 8,  
       
    },
    runRight:{
      imageSrc: './img/kenji/RunRight.png',
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
    attack3:{
      imageSrc: ' ',/// futuro ataque especial
      framesMax: 4, /// futuro ataque especial
    },
    takeHit:{
      imageSrc: './img/kenji/Take hit2.png',
      framesMax: 3 
    },
    death:{
      imageSrc: './img/kenji/Death.png',
      framesMax: 7
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








//personagen kenji para o player 2
const kenji = new Fighter({
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
    runLeft:{
      imageSrc: './img/kenji/RunLeft.png',
      framesMax: 8,  
       
    },
    runRight:{
      imageSrc: './img/kenji/RunRight.png',
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
    attack3:{
      imageSrc: ' ',/// futuro ataque especial
      framesMax: 4, /// futuro ataque especial
    },
    takeHit:{
      imageSrc: './img/kenji/Take hit2.png',
      framesMax: 3 
    },
    death:{
      imageSrc: './img/kenji/Death.png',
      framesMax: 7
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
