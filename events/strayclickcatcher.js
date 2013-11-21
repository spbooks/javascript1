var strayClickCatcher =
{
  init: function()
  {
    var links = document.getElementsByTagName("a");

    if (typeof document.addEventListener != "undefined")
    {
      document.addEventListener("click", strayClickCatcher.strayClickListener, false);
      for (var i = 0; i < links.length; i++)
      {
        links[i].addEventListener("click", strayClickCatcher.linkClickListener, false);
      }
    }
    else if (typeof document.attachEvent != "undefined")
    {
      document.attachEvent("onclick", strayClickCatcher.strayClickListener);
      for (var i = 0; i < links.length; i++)
      {
        links[i].attachEvent("onclick", strayClickCatcher.linkClickListener);
      }
    }
  },

  strayClickListener: function(event)
  {
    alert("Did you mean to click a link? It's that blue, underlined text.");
  },

  linkClickListener: function(event)
  {
    if (typeof event == "undefined")
    {
      event = window.event;
    }

    if (typeof event.stopPropagation != "undefined")
    {
      event.stopPropagation();
    }
    else
    {
      event.cancelBubble = true;
    }
  }
};

Core.start(strayClickCatcher);
