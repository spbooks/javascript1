var RequiredField =
{
  init: function()
  {
    var requiredField = document.getElementById("requiredfield");
    var theForm = requiredField.form;
    
    theForm.onsubmit = RequiredField.submitHandler;
  },
  
  submitHandler: function()
  {
    var requiredField = document.getElementById("requiredfield");
    
    if (requiredField.value == "")
    {
      requiredField.focus();
      alert("Please fill in a value for this required field.");
      return false;
    }
  }
};

Core.start(RequiredField);