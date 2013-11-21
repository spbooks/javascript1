// This script contains four syntax errors
var MyScript = {
  init: function
  {
    MyScript.doSomething();
  }
  doSomething: function()
  {
    alert("Hold onto your "hat"!");
    \\ something happens
  }
};

Core.start(MyScript);