var Robot =
{
  init: function()
  {
    Robot.div = document.getElementById("robot");
    Robot.frameHeight = 150;
    Robot.frames = 10;
    Robot.offsetY = 0;
    
    Robot.animate();
  },
  animate: function()
  {
    Robot.offsetY -= Robot.frameHeight;
    
    if (Robot.offsetY <= -Robot.frameHeight * Robot.frames)
    {
      Robot.offsetY = 0;
    }
    
    Robot.div.style.backgroundPosition = "0 " + Robot.offsetY + "px";
    
    setTimeout(Robot.animate, 75);
  }
};

Core.start(Robot);