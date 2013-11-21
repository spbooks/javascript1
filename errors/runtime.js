// This script contains three runtime errors
var MyScript = {
  init: function()
  {
    var example = document.getElementsById("example");
    
    for (var i = 0; i < example.length; i++)
    {
      Core.addEventListener(example[i], "click", doSomething);
    }

    var links = documents.getElementsByTagName("a");
    var firstLink = links[0];

    if (firstLink && firstLink.className == "")
    {
      alert("The first link has no class assigned to it!");
    }
  },
  doSomething: function(event)
  {
    alert("Hold onto your \"hat\"!");
  }
};

Core.start(MyScript);