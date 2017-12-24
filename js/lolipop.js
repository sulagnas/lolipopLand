const LolipopUp=function (top,left,height,width) {
  this.top=top;
  this.left=left;
  this.height=height;
  this.width=width;
};

LolipopUp.prototype={
  moveLeft:function (distanceToMove) {
    this.left-=distanceToMove;
    return this.left;
  },
  increaseHeight:function (heightToIncrease) {
    this.height+=heightToIncrease;
    return this.height;
  },
  increaseWidth:function (widthToIncrease) {
    this.width+=widthToIncrease;
    return this.width;
  }
};

const LolipopDown=function (top,left,height,width) {
  this.top=top;
  this.left=left;
  this.height=height;
  this.width=width;
};

LolipopDown.prototype={
  moveLeft:function (distanceToMove) {
    this.left-=distanceToMove;
    return this.left;
  },
  increaseTop:function (heightToIncrease) {
    this.top-=heightToIncrease;
    return this.top;
  },
  increaseHeight:function (heightToIncrease) {
    this.height+=heightToIncrease;
    return this.height;
  },
  increaseWidth:function (widthToIncrease) {
    this.width+=widthToIncrease;
    return this.width;
  }
};
