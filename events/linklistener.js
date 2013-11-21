var wikipediaLink =
{
  init: function()
  {
    var link = document.getElementById("wikipedia");

    if (typeof link.addEventListener != "undefined")
    {
      link.addEventListener("click", wikipediaLink.clickListener, false);
    }
    else if (typeof link.attachEvent != "undefined")
    {
      link.attachEvent("onclick", wikipediaLink.clickListener);
    }
  },

  clickListener: function()
  {
    alert("Don't believe everything you read on Wikipedia!");
  }
};

Core.start(wikipediaLink);
