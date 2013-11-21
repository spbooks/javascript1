var ContactForm =
{
  init: function()
  {
    var contactForm = document.getElementById("contactForm");
    Core.addEventListener(contactForm, "submit", ContactForm.submitListener);
  },
  submitListener: function(event)
  {
    var form = this;
    
    try
    {
      var requester = new XMLHttpRequest();
    }
    catch (error)
    {
      try
      {
        var requester = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch (error)
      {
        var requester = null;
      }
    }

    if (requester != null)
    {
      form._timer = setTimeout(function()
          {
            requester.abort();
            
            ContactForm.writeError("The server timed out while making your request.");
          }, 10000);
      
      var parameters = "submitby=ajax";
      var formElements = [];
    
      var textareas = form.getElementsByTagName("textarea");
    
      for (var i = 0; i < textareas.length; i++)
      {
        formElements[formElements.length] = textareas[i];
      }
    
      var selects = form.getElementsByTagName("select");
    
      for (var i = 0; i < selects.length; i++)
      {
        formElements[formElements.length] = selects[i];
      }
    
      var inputs = form.getElementsByTagName("input");

      for (var i = 0; i < inputs.length; i++)
      {
        var inputType = inputs[i].getAttribute("type");
      
        if (inputType == null || inputType == "text" || inputType == "hidden" || (typeof inputs[i].checked != "undefined" && inputs[i].checked == true))
        {
          formElements[formElements.length] = inputs[i];
        }
      }
    
      for (var i = 0; i < formElements.length; i++)
      {
        var elementName = formElements[i].getAttribute("name");
      
        if (elementName != null && elementName != "")
        {
          parameters += "&" + elementName + "=" + encodeURIComponent(formElements[i].value);
        }
      }
      
      requester.open("POST", form.getAttribute("action"), true);
      requester.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      requester.onreadystatechange = function()
      {
        clearTimeout(form._timer);
        
        if (requester.readyState == 4)
        {
          if (requester.status == 200 || requester.status == 304)
          {
            ContactForm.writeSuccess(form);
          }
          else
          {
            ContactForm.writeError("The server was unable to be contacted.");
          }
        }
      };
      requester.send(parameters);

      Core.preventDefault(event);
    }
  },
  writeSuccess: function(form)
  {
    var newP = document.createElement("p");
    newP.setAttribute("id", "success");
    newP.appendChild(document.createTextNode("Your message was submitted successfully."));
    form.parentNode.replaceChild(newP, form);
  },
  writeError: function(errorMsg)
  {
    alert(errorMsg);
  }
};

Core.start(ContactForm);