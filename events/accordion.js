var Accordion =
{
  init: function()
  {
    var accordions = Core.getElementsByClass("accordion");

    for (var i = 0; i < accordions.length; i++)
    {
      var folds = accordions[i].childNodes;
      for (var j = 0; j < folds.length; j++)
      {
        if (folds[j].nodeType == 1)
        {
          Accordion.collapse(folds[j]);
          var foldLinks = folds[j].getElementsByTagName("a");
          var foldTitleLink = foldLinks[0];
          Core.addEventListener(foldTitleLink, "click", Accordion.clickListener);
          
          for (var k = 1; k < foldLinks.length; k++)
          {
            Core.addEventListener(foldLinks[k], "focus", Accordion.focusListener);
          }
        }
      }
      
      if (location.hash.length > 1)
      {
        var activeFold = document.getElementById(location.hash.substring(1));
        if (activeFold && activeFold.parentNode == accordions[i])
        {
          Accordion.expand(activeFold);
        }
      }
    }
  },

  collapse: function(fold)
  {
    Core.removeClass(fold, "expanded");
    Core.addClass(fold, "collapsed");
  },

  collapseAll: function(accordion)
  {
    var folds = accordion.childNodes;
    for (var i = 0; i < folds.length; i++)
    {
      if (folds[i].nodeType == 1)
      {
        Accordion.collapse(folds[i]);
      }
    }
  },

  expand: function(fold)
  {
    Accordion.collapseAll(fold.parentNode);
    Core.removeClass(fold, "collapsed");
    Core.addClass(fold, "expanded");
  },
  
  clickListener: function(event)
  {
    var fold = this.parentNode.parentNode;
    if (Core.hasClass(fold, "collapsed"))
    {
      Accordion.expand(fold);
    }
    else
    {
      Accordion.collapse(fold);
    }
    Core.preventDefault(event);
  },
  
  focusListener: function(event)
  {
    var element = this;
    while (element.parentNode)
    {
      if (Core.hasClass(element.parentNode, "accordion"))
      {
        Accordion.expand(element);
        return;
      }
      element = element.parentNode;
    }
  }
};

Core.start(Accordion);
