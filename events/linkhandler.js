var wikipediaLink =
{
  init: function()
  {
    var link = document.getElementById("wikipedia");
    link.onclick = wikipediaLink.clickHandler;
  },

  clickHandler: function()
  {
    alert("Don't believe everything you read on Wikipedia!");
  }
};

Core.start(wikipediaLink);
