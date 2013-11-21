var wikipediaLink =
{
  init: function()
  {
    var link = document.getElementById("wikipedia");
    link.onclick = wikipediaLink.clickHandler;
  },

  clickHandler: function()
  {
    if (!confirm("Are you sure you want to leave this site?"))
    {
      return false;
    }
  }
};

Core.start(wikipediaLink);
