var Tooltips =
{
  init: function()
  {
    var links = document.getElementsByTagName("a");
    
    for (var i = 0; i < links.length; i++)
    {
      var title = links[i].getAttribute("title");
      
      if (title && title.length > 0)
      {
        Core.addEventListener(links[i], "mouseover", Tooltips.showTipListener);
        Core.addEventListener(links[i], "focus", Tooltips.showTipListener);
        Core.addEventListener(links[i], "mouseout", Tooltips.hideTipListener);
        Core.addEventListener(links[i], "blur", Tooltips.hideTipListener);
      }
    }
  },

  showTip: function(link)
  {
    Tooltips.hideTip(link);

    var tip = document.createElement("span");
    tip.className = "tooltip";
    var tipText = document.createTextNode(link.getAttribute("title"));
    tip.appendChild(tipText);
    link.appendChild(tip);
    
    link._tooltip = tip;
    link.title = "";

    // Fix for Safari2/Opera9 repaint issue
    document.documentElement.style.position = "relative";
  },
  
  hideTip: function(link)
  {
    if (link._tooltip)
    {
      link.title = link._tooltip.childNodes[0].nodeValue;      
      link.removeChild(link._tooltip);
      link._tooltip = null;

      // Fix for Safari2/Opera9 repaint issue
      document.documentElement.style.position = "static";
    }
  },

  showTipListener: function(event)
  {
    var link = this;
    this._timer = setTimeout(function()
        {
          Tooltips.showTip(link);
        }, 500);
    Core.preventDefault(event);
  },
  
  hideTipListener: function(event)
  {
    clearTimeout(this._timer);
    Tooltips.hideTip(this);
  }
};

Core.start(Tooltips);
