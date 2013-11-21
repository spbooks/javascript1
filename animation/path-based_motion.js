var SoccerBall =
{
  init: function()
  {
    SoccerBall.frameRate = 25;
    SoccerBall.duration = 2;
    SoccerBall.div = document.getElementById("soccerBall");
    SoccerBall.targetX = 600;
    SoccerBall.originX = parseInt(Core.getComputedStyle(SoccerBall.div, "left"), 10);
    SoccerBall.increment = (SoccerBall.targetX - SoccerBall.originX) / (SoccerBall.duration * SoccerBall.frameRate);
    SoccerBall.x = SoccerBall.originX;
    
    SoccerBall.animate();
  },

  animate: function()
  {
    SoccerBall.x += SoccerBall.increment;
    
    if ((SoccerBall.targetX > SoccerBall.originX && SoccerBall.x >= SoccerBall.targetX) || (SoccerBall.targetX < SoccerBall.originX && SoccerBall.x <= SoccerBall.targetX))
    {
      SoccerBall.x = SoccerBall.targetX;
    }
    else
    {
      setTimeout(SoccerBall.animate, 1000 / SoccerBall.frameRate)
    }

    SoccerBall.div.style.left = Math.round(SoccerBall.x) + "px";    
  }
};

Core.start(SoccerBall);