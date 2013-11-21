var CascadingMenu =
{
  init: function()
  {
    var menus = Core.getElementsByClass("cascading");
    
    for (var i = 0; i < menus.length; i++)
    {
      CascadingMenu.convertLabelToFieldset(menus[i]);
      var masterMenu = CascadingMenu.extractMasterMenu(menus[i]);
      CascadingMenu.createLabelFromTitle(masterMenu);
      CascadingMenu.createLabelFromTitle(menus[i]);
      
      CascadingMenu.updateSlaveMenu(masterMenu);
      Core.addEventListener(masterMenu, "change", CascadingMenu.changeListener);
    }
  },
  
  convertLabelToFieldset: function(menu)
  {
    var menuId = menu.id;
    var labels = document.getElementsByTagName("label");
    
    for (var i = 0; i < labels.length; i++)
    {
      if (labels[i].htmlFor == menuId)
      {
        var label = labels[i];
        label.parentNode.removeChild(label);
        
        var legend = document.createElement("legend");
        while (label.hasChildNodes())
        {
          legend.appendChild(label.firstChild);
        }
        
        var fieldset = document.createElement("fieldset");
        fieldset.appendChild(legend);
        
        menu.parentNode.replaceChild(fieldset, menu);
        fieldset.appendChild(menu);
        
        return;
      }
    }
  },
  
  extractMasterMenu: function(menu)
  {
    var masterMenu = document.createElement("select");
    masterMenu.id = menu.id + "master";
    masterMenu.setAttribute("name", masterMenu.id);
    masterMenu.setAttribute("title", menu.getAttribute("title"));
    masterMenu._slave = menu;

    while (menu.hasChildNodes())
    {
      var optgroup = menu.firstChild;
      if (optgroup.nodeType == 1)
      {
        var masterOption = document.createElement("option");
        masterOption.appendChild(document.createTextNode(optgroup.getAttribute("label")));
        masterMenu.appendChild(masterOption);
        
        var slaveOptions = [];
        while (optgroup.hasChildNodes())
        {
          var option = optgroup.firstChild;
          slaveOptions[slaveOptions.length] = option;
          optgroup.removeChild(option);
        }
        masterOption._slaveOptions = slaveOptions;
  
        menu.setAttribute("title", optgroup.getAttribute("title"));
      }
      menu.removeChild(optgroup);
    }
    
    menu.parentNode.insertBefore(masterMenu, menu);
    
    return masterMenu;
  },
  
  createLabelFromTitle: function(menu)
  {
    var title = menu.getAttribute("title");
    menu.setAttribute("title", "");
    
    var label = document.createElement("label");
    label.htmlFor = menu.id;
    label.appendChild(document.createTextNode(title));
    
    menu.parentNode.insertBefore(label, menu);
  },
  
  updateSlaveMenu: function(masterMenu)
  {
    var selectedOption = masterMenu.options[masterMenu.selectedIndex];
    
    while (masterMenu._slave.hasChildNodes())
    {
      masterMenu._slave.removeChild(masterMenu._slave.firstChild);
    }
    
    for (var i = 0; i < selectedOption._slaveOptions.length; i++)
    {
      masterMenu._slave.appendChild(selectedOption._slaveOptions[i]);
    }
    masterMenu._slave.selectedIndex = 0;
  },
  
  changeListener: function(event)
  {
    CascadingMenu.updateSlaveMenu(this);
  }
};

Core.start(CascadingMenu);