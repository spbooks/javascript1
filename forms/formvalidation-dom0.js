var FormValidation =
{
  init: function()
  {
    var forms = document.getElementsByTagName("form");
    
    for (var i = 0; i < forms.length; i++)
    {
      forms[i].onsubmit = FormValidation.submitHandler;
    }
  },

  rules:
  {
    required: /./,
    requiredNotWhitespace: /\S/,
    positiveInteger: /^\d*[1-9]\d*$/,
    positiveOrZeroInteger: /^\d+$/,
    integer: /^-?\d+$/,
    decimal: /^-?\d+(\.\d+)?$/,
    email: /^[\w\.\-]+@([\w\-]+\.)+[a-zA-Z]+$/,
    telephone: /^(\+\d+)?( |\-)?(\(?\d+\)?)?( |\-)?(\d+( |\-)?)*\d+$/
  },

  errors:
  {
    required: "Please fill in this required field.",
    requiredNotWhitespace: "Please fill in this required field.",
    positiveInteger: "This field may only contain a positive whole number.",
    positiveOrZeroInteger: "This field may only contain a non-negative whole number.",
    integer: "This field may only contain a whole number.",
    decimal: "This field may only contain a number.",
    email: "Please enter a valid email address into this field.",
    telephone: "Please enter a valid telephone number into this field."
  },
  
  submitHandler: function()
  {
    var fields = this.elements;
    
    for (var i = 0; i < fields.length; i++)
    {
      var className = fields[i].className;
      var classRegExp = /(^| )(\S+)( |$)/g;
      var classResult;
      
      while (classResult = classRegExp.exec(className))
      {
        var oneClass = classResult[2];
        var rule = FormValidation.rules[oneClass];
        if (typeof rule != "undefined")
        {
          if (!rule.test(fields[i].value))
          {
            fields[i].focus();
            alert(FormValidation.errors[oneClass]);
            return false;
          }
        }
      }
    }
  }
};

Core.start(FormValidation);