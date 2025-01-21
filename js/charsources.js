var framecolisaop1 = undefined
var framecolisaop2 = undefined


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
 imageSrc: './img/samuraiMack/Idleright.png',
 scale: 2.5,
 framesMax: 8,
 offset:{
  x: 215,
  y: 156
},
  sprites:{
    idle:{
      imageSrc: './img/samuraiMack/Idleright.png',
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
      imageSrc: './img/samuraiMack/Jumpright.png',
      framesMax: 2,
    },
    fall:{
      imageSrc: './img/samuraiMack/Fallright.png',
      framesMax: 2,  
    },
    attack1:{
      imageSrc: './img/samuraiMack/Attack1right.png',
      framesMax: 6, 
    },
    attack3:{
      imageSrc: './img/samuraiMack/Attack3right.png',
      framesMax: 6
    },
    takeHit:{
      imageSrc: './img/samuraiMack/Take Hit2right.png',
      framesMax: 4
    },
    death:{
      imageSrc: './img/samuraiMack/Deathright.png',
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
function troca1Mack(){
  player = mack
  framecolisaop1 = 4  /// o frame de colisão é o valor da metade dos frames
  document.getElementById("escolhacharp1").classList.remove("divbotaoescolha");
  document.getElementById("escolhacharp1").innerHTML = ''
}






 
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
 imageSrc: './img/samuraiMack/Idleleft.png',
 scale: 2.5,
 framesMax: 8,
 offset:{
  x: 215,
  y: 156
},
  sprites:{
    idle:{
      imageSrc: './img/samuraiMack/Idleleft.png',
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
      imageSrc: './img/samuraiMack/Jumpleft.png',
      framesMax: 2,
    },
    fall:{
      imageSrc: './img/samuraiMack/Fallleft.png',
      framesMax: 2,  
    },
    attack1:{
      imageSrc: './img/samuraiMack/Attack1left.png',
      framesMax: 6, 
    },
    attack3:{
      imageSrc: './img/samuraiMack/Attack3left.png',
      framesMax: 6
    },
    takeHit:{
      imageSrc: './img/samuraiMack/Take Hit2left.png',
      framesMax: 4
    },
    death:{
      imageSrc: './img/samuraiMack/Deathleft.png',
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
function troca2Mack(){
  enemy = mack2
  framecolisaop2 = 4  
  document.getElementById("escolhacharp2").classList.remove("divbotaoescolha");
  document.getElementById("escolhacharp2").innerHTML = ''
 }






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

imageSrc: './img/kenji/Idleright.png',
scale: 2.5,
framesMax: 4,
offset:{
 x: 215,
 y: 170
  },
    sprites:{
    idle:{
      imageSrc: './img/kenji/Idleright.png',
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
      imageSrc: './img/kenji/Jumpright.png',
      framesMax: 2,
    },
    fall:{
      imageSrc: './img/kenji/Fallright.png',
      framesMax: 2,  
    },
    attack1:{
      imageSrc: './img/kenji/Attack1right.png',
      framesMax: 4, 
    },
    attack3:{
      imageSrc: './img/kenji/attack3right.png',
      framesMax: 4, 
    },
    takeHit:{
      imageSrc: './img/kenji/Take hit2right.png',
      framesMax: 3 
    },
    death:{
      imageSrc: './img/kenji/Deathright.png',
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
function troca1Kenji(){
  player = kenji1
  framecolisaop1 = 2
  document.getElementById("escolhacharp1").classList.remove("divbotaoescolha");
  document.getElementById("escolhacharp1").innerHTML = ''
 }







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

imageSrc: './img/kenji/Idleleft.png',
scale: 2.5,
framesMax: 4,
offset:{
 x: 215,
 y: 170
  },
    sprites:{
    idle:{
      imageSrc: './img/kenji/Idleleft.png',
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
      imageSrc: './img/kenji/Jumpleft.png',
      framesMax: 2,
    },
    fall:{
      imageSrc: './img/kenji/Fallleft.png',
      framesMax: 2,  
    },
    attack1:{
      imageSrc: './img/kenji/Attack1left.png',
      framesMax: 4, 
    },
    attack3:{
      imageSrc: './img/kenji/attack3right.png',   // mudar para lef
      framesMax: 4,
    },
    takeHit:{
      imageSrc: './img/kenji/Take hit2left.png',
      framesMax: 3 
    },
    death:{
      imageSrc: './img/kenji/Deathleft.png',
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
function troca2Kenji(){
  enemy = kenji
  framecolisaop2 = 2  
  document.getElementById("escolhacharp2").classList.remove("divbotaoescolha");
  document.getElementById("escolhacharp2").innerHTML = ''
 }







// personagem warrior para o player 1
const warrior1 =  new Fighter({
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
imageSrc: './img/warrior/Idleright.png',
scale: 3,
framesMax: 10,
offset:{
x: 215,
y: 156
},
sprites:{
  idle:{
    imageSrc: './img/warrior/Idleright.png',
    framesMax: 10,
  },
  runLeft:{
    imageSrc: './img/warrior/Runleft.png',
    framesMax: 8,   
  },
  runRight:{
    imageSrc: './img/warrior/Runright.png',
    framesMax: 8,   
  },
  jump:{
    imageSrc: './img/warrior/Jumpright.png',
    framesMax: 3,
  },
  fall:{
    imageSrc: './img/warrior/Fallright.png',
    framesMax: 3,  
  },
  attack1:{
    imageSrc: './img/warrior/Attack1right.png',
    framesMax: 8, 
  },
  attack3:{
    imageSrc: './img/warrior/Attack3right.png',
    framesMax: 7
  },
  takeHit:{
    imageSrc: './img/warrior/Take Hitright.png',
    framesMax: 3
  },
  death:{
    imageSrc: './img/warrior/Deathright.png',
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
function troca1Warrior(){
player = warrior1
framecolisaop1 = 4  /// o frame de colisão é o valor da metade dos frames
document.getElementById("escolhacharp1").classList.remove("divbotaoescolha");
document.getElementById("escolhacharp1").innerHTML = ''
}







// personagem warrior para o player 2
const warrior2 =  new Fighter({
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
imageSrc: './img/warrior/Idleleft.png',
scale: 3,
framesMax: 10,
offset:{
x: 215,
y: 156
},
sprites:{
  idle:{
    imageSrc: './img/warrior/Idleleft.png',
    framesMax: 10,
  },
  runLeft:{
    imageSrc: './img/warrior/Runleft.png',
    framesMax: 8,   
  },
  runRight:{
    imageSrc: './img/warrior/Runright.png',
    framesMax: 8,   
  },
  jump:{
    imageSrc: './img/warrior/Jumpleft.png',
    framesMax: 3,
  },
  fall:{
    imageSrc: './img/warrior/Fallleft.png',
    framesMax: 3,  
  },
  attack1:{
    imageSrc: './img/warrior/Attack1left.png',
    framesMax: 8, 
  },
  attack3:{
    imageSrc: './img/warrior/Attack3left.png',
    framesMax: 6
  },
  takeHit:{
    imageSrc: './img/warrior/Take Hitleft.png',
    framesMax: 3
  },
  death:{
    imageSrc: './img/warrior/Deathleft.png',
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
function troca2Warrior(){
enemy = warrior2
framecolisaop2 = 4  
document.getElementById("escolhacharp2").classList.remove("divbotaoescolha");
document.getElementById("escolhacharp2").innerHTML = ''
}
















