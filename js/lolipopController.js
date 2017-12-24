let game=new Game();

const getLolipop=function () {
  let lolipopList=["images/lolipop1.png","images/lolipop2.png","images/lolipop4.png","images/lolipop6.png","images/lolipop8.png","images/lolipop9.png","images/lolipop11.png","images/lolipop15.png","images/lolipop17.png","images/lolipop20.png","images/lolipop21.png"];
  return lolipopList[Math.floor(Math.random()*10)];
};

const startGame=function () {
  lolipopMove();
};

const lolipopMove=function () {
  lolipopUpMove();
  lolipopDownMove();
  if(game.lolipopUp.left==15||game.lolipopDown.left==5){
    updateOrEndGame();
  }
};

const lolipopUpMove=function () {
  let lolipopUp=document.getElementById('lolipopUp');
  lolipopUp.src=getLolipop();
  let heightToIncrease=getHeightToIncrease();
  lolipopUp.style.left=game.lolipopUp.moveLeft(15)+'px';
  lolipopUp.style.height=game.lolipopUp.increaseHeight(heightToIncrease+1)+'px';
};

const lolipopDownMove=function (lolipop) {
  lolipopDown=document.getElementById('lolipopDown');
  lolipopDown.src=getLolipop();
  let heightToIncrease=getHeightToIncrease();
  lolipopDown.style.left=game.lolipopDown.moveLeft(15)+'px';
  lolipopDown.style.top=game.lolipopDown.increaseTop(heightToIncrease)+'px';
  lolipopDown.style.height=game.lolipopDown.increaseHeight(heightToIncrease)+'px';
};

const getHeightToIncrease=function () {
  return Math.floor(Math.random()*8);
};

const updateOrEndGame=function () {
  if(isGameOver()){
    clearInterval(goLolipop);
    showYouLoose();
  }
  else if (game.lolipopUp.left==15) {
    updateScoreBy(10);
  }
  else if(game.lolipopDown.left==5){
    updateScoreBy(10);
    updateGame();
  }
};

const isGameOver=function () {
  return game.isGettingTouched();
};

const showYouLoose=function () {
  let lolipopUp=document.getElementById('lolipopUp');
  let lolipopDown=document.getElementById('lolipopDown');
  let smily=document.getElementById('smily');
  let crying=document.getElementById('crying');
  let replay=document.getElementById('replay')
  crying.style.visibility="visible";
  lolipopUp.style.visibility="hidden";
  lolipopDown.style.visibility="hidden";
  smily.style.visibility="hidden";
  replay.style.visibility='visible';
};

const updateScoreBy=function () {
  let score=document.getElementById('score');
  score.innerHTML=game.updateScore(10);
};

const updateGame=function () {
  resetPositionOfLolipop();
};

const resetPositionOfLolipop=function () {
  game.lolipopUp.left=600;
  game.lolipopUp.height=300;
  game.lolipopDown.left=1100;
  game.lolipopDown.top=420;
  game.lolipopDown.height=300;
};

let goLolipop=setInterval(lolipopMove,40);

const jumpUp=function (smily) {
  if(game.smily.top>40){
    smily.style.top=game.smily.moveUp(100)+'px'
    smily.src='images/smilyUp.png';
  }
};

const jumpDown=function (smily) {
  if(game.smily.top<600){
    smily.style.top=game.smily.moveDown(100)+'px'
    smily.src='images/smilyDown.png';
  }
};

const jump=function (event) {
  let smily=document.getElementById('smily');
  if (event.keyCode==38){
    jumpUp(smily);
  }
  else if (event.keyCode==40) {
    jumpDown(smily);
  }
};
