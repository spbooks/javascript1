var RequiredField =
{
  init: function()
  {
    var requiredField = document.getElementById("requiredfield");
    var theForm = requiredField.form;
    
    Core.addEventListener(theForm, "submit", RequiredField.submitListener);
  },
  
  submitListener: function(event)
  {
    var requiredField = document.getElementById("requiredfield");
    
    if (requiredField.value == "")
    {
      requiredField.focus();
      alert("Please fill in a value for this required field.");
      Core.preventDefault(event);
    }
  }
};

Core.start(RequiredField);