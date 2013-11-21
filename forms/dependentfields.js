var DependentFields =
{
  init: function()
  {
    var forms = document.getElementsByTagName("form");
    
    for (var i = 0; i < forms.length; i++)
    {
      Core.addEventListener(forms[i], "change", DependentFields.changeListener);
      Core.addEventListener(forms[i], "click", DependentFields.clickListener);

      var fields = forms[i].getElementsByTagName("input");
      var lastIndependentField = null;
      forms[i]._dependents = [];
      for (var j = 0; j < fields.length; j++)
      {
        if (!Core.hasClass(fields[j], "dependent"))
        {
          lastIndependentField = fields[j];
        }
        else
        {
          if (lastIndependentField)
          {
            forms[i]._dependents[forms[i]._dependents.length] = fields[j];
            fields[j]._master = lastIndependentField;
          }
        }
      }
      DependentFields.updateDependents(forms[i]);
    }
  },
  
  disable: function(field)
  {
    field.disabled = true;
    Core.addClass(field, "disabled");
    Core.addClass(field.parentNode, "disabled");
  },
  
  enable: function(field)
  {
    field.disabled = false;
    Core.removeClass(field, "disabled");
    Core.removeClass(field.parentNode, "disabled");
  },
  
  updateDependents: function(form)
  {
    var dependents = form._dependents;
    if (!dependents)
    {
      return;
    }
    
    for (var i = 0; i < dependents.length; i++)
    {
      var disabled = true;
      var master = dependents[i]._master;
      
      if (master.type == "text" || master.type == "password")
      {
        if (master.value.length > 0)
        {
          disabled = false;
        }
      }
      else if (master.type == "checkbox" || master.type == "radio")
      {
        if (master.checked)
        {
          disabled = false;
        }
      }

      if (disabled)
      {
        DependentFields.disable(dependents[i]);
      }
      else
      {
        DependentFields.enable(dependents[i]);
      }
    }    
  },
  
  changeListener: function(event)
  {
    DependentFields.updateDependents(this);
  },
  
  clickListener: function(event)
  {
    DependentFields.updateDependents(this);
  }
};

Core.start(DependentFields);