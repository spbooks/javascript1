var wikipediaLink =
{
  init: function()
  {
    var link = document.getElementById("wikipedia");

    if (link.addEventListener)
    {
      link.addEventListener("click", wikipediaLink.clickListener, false);
    }
    else if (link.attachEvent)
    {
      link.attachEvent("onclick", wikipediaLink.clickListener);
    }
  },

  clickListener: function(event)
  {
    if (typeof event == "undefined")
    {
      event = window.event;
    }

    if (!confirm("Are you sure you want to leave this site?"))
    {
      if (typeof event.preventDefault != "undefined")
      {
        event.preventDefault();
      }
      else
      {
        event.returnValue = false;
      }
    }
  }
};

Core.start(wikipediaLink);
