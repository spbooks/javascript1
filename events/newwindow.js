var externalLinks =
{
  init: function()
  {
    var extLinks = Core.getElementsByClass("external");

    for (var i = 0; i < extLinks.length; i++)
    {
      extLinks[i].onclick = externalLinks.clickHandler;
    }
  },

  clickHandler: function()
  {
    open(this.href);
    return false;
  }
};

Core.start(externalLinks);
