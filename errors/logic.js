// This script contains three logic errors
var MyScript = {
  init: function()
  {
    var links = document.getElementsByTagName("a");
    var exampleLinks = [];
    for (var i = 0; i < links.length; i++)
    {
      if (links[i].className = "Example")
      {
        Core.addEventListener(
            links[i], "click", MyScript.doSomething);
        exampleLinks[exampleLinks.length] = links[i];
        i--;
      }
    }
  },
  doSomething: function(event)
  {
    alert("Hold onto your \"hat\"!");
  }
};

Core.start(MyScript);