let Game=function () {
  this.lolipopUp=new LolipopUp(0,600,300,150);
  this.lolipopDown=new LolipopDown(420,1100,300,150);
  this.smily=new Smily(200,0);
  this.score=0;
};

Game.prototype={
  isGettingTouched:function () {
    let touchedWithLolipopUp=this.smily.top<=this.lolipopUp.height&&this.lolipopUp.left==15;
    let touchWithLolipopDown=this.smily.top+100>=this.lolipopDown.top&&this.lolipopDown.left==5;
    return touchedWithLolipopUp || touchWithLolipopDown;
  },
  updateScore:function (pointsToAdd) {
    this.score+=pointsToAdd;
    return this.score
  }
}
