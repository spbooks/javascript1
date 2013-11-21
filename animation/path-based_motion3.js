var SoccerBall =
{
  init: function()
  {
    SoccerBall.frameRate = 25;
    SoccerBall.deceleration = 10;
    SoccerBall.div = document.getElementById("soccerBall");
    SoccerBall.targetX = 600;
    SoccerBall.targetY = 150;
    SoccerBall.originX = parseInt(Core.getComputedStyle(SoccerBall.div, "left"), 10);
    SoccerBall.originY = parseInt(Core.getComputedStyle(SoccerBall.div, "top"), 10);
    SoccerBall.x = SoccerBall.originX;
    SoccerBall.y = SoccerBall.originY;
    
    SoccerBall.animate();
  },

  animate: function()
  {
    SoccerBall.x += (SoccerBall.targetX - SoccerBall.x) / SoccerBall.deceleration;
    SoccerBall.y += (SoccerBall.targetY - SoccerBall.y) / SoccerBall.deceleration;
    
    if ((SoccerBall.targetX > SoccerBall.originX && Math.round(SoccerBall.x) >= SoccerBall.targetX) || (SoccerBall.targetX < SoccerBall.originX && Math.round(SoccerBall.x) <= SoccerBall.targetX))
    {
      SoccerBall.x = SoccerBall.targetX;
      SoccerBall.y = SoccerBall.targetY;
    }
    else
    {
      setTimeout(SoccerBall.animate, 1000 / SoccerBall.frameRate)
    }

    SoccerBall.div.style.left = Math.round(SoccerBall.x) + "px";
    SoccerBall.div.style.top = Math.round(SoccerBall.y) + "px";
  }
};

Core.start(SoccerBall);