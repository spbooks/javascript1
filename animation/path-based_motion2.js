var SoccerBall =
{
  init: function()
  {
    SoccerBall.frameRate = 25;
    SoccerBall.duration = 2;
    SoccerBall.div = document.getElementById("soccerBall");
    SoccerBall.targetX = 600;
    SoccerBall.targetY = 150;
    SoccerBall.originX = parseInt(Core.getComputedStyle(SoccerBall.div, "left"), 10);
    SoccerBall.originY = parseInt(Core.getComputedStyle(SoccerBall.div, "top"), 10);
    SoccerBall.incrementX = (SoccerBall.targetX - SoccerBall.originX) / (SoccerBall.duration * SoccerBall.frameRate);
    SoccerBall.incrementY = (SoccerBall.targetY - SoccerBall.originY) / (SoccerBall.duration * SoccerBall.frameRate);
    SoccerBall.x = SoccerBall.originX;
    SoccerBall.y = SoccerBall.originY;
    
    SoccerBall.animate();
  },
  
  animate: function()
  {
    SoccerBall.x += SoccerBall.incrementX;
    SoccerBall.y += SoccerBall.incrementY;
    
    if ((SoccerBall.targetX > SoccerBall.originX && SoccerBall.x >= SoccerBall.targetX) || (SoccerBall.targetX < SoccerBall.originX && SoccerBall.x <= SoccerBall.targetX))
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