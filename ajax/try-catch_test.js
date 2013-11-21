var TryCatch =
{
  init: function()
  {
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
    
    alert(typeof requester);
  }
};

Core.start(TryCatch);