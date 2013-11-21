var SoccerBall =
{
  init: function()
  {
  
    SoccerBall.frameRate = 25;
    SoccerBall.acceleration = 2;
    SoccerBall.threshold = 0.5;
    SoccerBall.div = document.getElementById("soccerBall");
    SoccerBall.targetX = 600;
    SoccerBall.targetY = 150;
    SoccerBall.originX = parseInt(Core.getComputedStyle(SoccerBall.div, "left"));
    SoccerBall.originY = parseInt(Core.getComputedStyle(SoccerBall.div, "top"));
    
    if (SoccerBall.targetX < SoccerBall.originX)
    {
      SoccerBall.x = SoccerBall.originX - SoccerBall.threshold;
    }
    else
    {
      SoccerBall.x = SoccerBall.originX + SoccerBall.threshold;
    }
    
    SoccerBall.distanceY = SoccerBall.targetY - SoccerBall.originY;
    
    SoccerBall.animate();
  },

  animate: function()
  {
    SoccerBall.x += (SoccerBall.x - SoccerBall.originX) / SoccerBall.acceleration;
    var movementRatio = (SoccerBall.x - SoccerBall.originX) / (SoccerBall.targetX - SoccerBall.originX);
    var y = SoccerBall.originY + SoccerBall.distanceY * movementRatio;
    
    if ((SoccerBall.targetX > SoccerBall.originX && SoccerBall.x >= SoccerBall.targetX) || (SoccerBall.targetX < SoccerBall.originX && SoccerBall.x <= SoccerBall.targetX))
    {
      SoccerBall.x = SoccerBall.targetX;
      y = SoccerBall.targetY;
    }
    else
    {
      setTimeout(SoccerBall.animate, 1000 / SoccerBall.frameRate)
    }

    SoccerBall.div.style.left = Math.round(SoccerBall.x) + "px";
    SoccerBall.div.style.top = Math.round(y) + "px";
  }
};

Core.start(SoccerBall);