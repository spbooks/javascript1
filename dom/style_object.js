var StyleObject =
{
  init: function()
  {
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "#000000";
    body.style.color = "#FFFFFF";
  }
};

Core.start(StyleObject);