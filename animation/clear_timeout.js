var ClearTimer =
{
  init: function()
  {
    var start = document.getElementById("start");
    Core.addEventListener(start, "click", ClearTimer.clickStart, false);
    
    var stop = document.getElementById("stop");
    Core.addEventListener(stop, "click", ClearTimer.clickStop, false);
  },
  clickStart: function()
  {
    ClearTimer.timer = setTimeout("alert('Launched')", 2000);
  },
  clickStop: function()
  {
    clearTimeout(ClearTimer.timer);
    
    alert("Aborted");
  }
};

Core.start(ClearTimer);