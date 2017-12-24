const Smily=function (top,left) {
  this.top=top;
  this.left=left
};

Smily.prototype={
  moveUp:function (distanceToMove) {
    this.top-=distanceToMove;
    return this.top;
  },
  moveDown:function (distanceToMove) {
    this.top+=distanceToMove;
    return this.top;
  }
};
