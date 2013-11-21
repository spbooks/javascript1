var Accordion =
{
  init: function()
  {
    Accordion.frameRate = 25;
    Accordion.duration = 0.5;
    
    var accordions = Core.getElementsByClass("accordion");

    for (var i = 0; i < accordions.length; i++)
    {
      var folds = accordions[i].childNodes;
      for (var j = 0; j < folds.length; j++)
      {
        if (folds[j].nodeType == 1)
        {
          var accordionContent = document.createElement("div");
          accordionContent.className = "accordionContent";
          
          for (var k = 0; k < folds[j].childNodes.length; k++)
          {
            if (folds[j].childNodes[k].nodeName.toLowerCase() != "h2")
            {
              accordionContent.appendChild(folds[j].childNodes[k]);
              k--;
            }
          }
          
          folds[j].appendChild(accordionContent);
          folds[j]._accordionContent = accordionContent;
          
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
    var content = fold._accordionContent;
    content._height = parseInt(content.style.height, 10);
    content._increment = content._height / (Accordion.frameRate * Accordion.duration);
    
    if (Core.hasClass(fold, "expanded"))
    {
      clearTimeout(content._timer);
      Accordion.collapseAnimate(content);
    }
    else
    {
      Core.addClass(fold, "collapsed");
    }
  },
  
  collapseAnimate: function(content)
  {
    var newHeight = content._height - content._increment;
    
    if (newHeight < 0)
    {
      newHeight = 0;
      Core.removeClass(content.parentNode, "expanded");
      Core.addClass(content.parentNode, "collapsed");
    }
    else
    {    
      content._timer = setTimeout(function()
        {
          Accordion.collapseAnimate(content);
        }, 1000 / Accordion.frameRate);
    }
    
    content._height = newHeight;
    content.style.height = Math.round(newHeight) + "px";
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
    var content = fold._accordionContent;
    
    Accordion.collapseAll(fold.parentNode);
    
    if (!Core.hasClass(fold, "expanded"))
    {
      content.style.height = "0";
      content._height = 0;
      Core.removeClass(fold, "collapsed");
      Core.addClass(fold, "expanded");
      content._increment = content.scrollHeight / (Accordion.frameRate * Accordion.duration);
      Accordion.expandAnimate(content);
    }
  },
  
  expandAnimate: function(content)
  {
    var newHeight = content._height + content._increment;
    
    if (newHeight > content.scrollHeight)
    {
      newHeight = content.scrollHeight;
    }
    else
    {
      content._timer = setTimeout(function()
          {
            Accordion.expandAnimate(content);
          }, 1000 / Accordion.frameRate);
    }
    
    content._height = newHeight;
    content.style.height = Math.round(newHeight) + "px";
    content.scrollTop = 0;
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
      if (element.parentNode.className == "accordion")
      {
        Accordion.expand(element);
        return;
      }
      element = element.parentNode;
    }
  }
};

Core.start(Accordion);
