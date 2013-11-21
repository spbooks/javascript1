var ClassChange =
{
  init: function()
  {
    var body = document.getElementsByTagName("body")[0];
    Core.addClass(body, "unreadable");
  }
};

Core.start(ClassChange);