var StripyTables =
{
  init: function()
  {
    var tables = Core.getElementsByClass("dataTable");

    for (var i = 0; i < tables.length; i++)
    {
      var tbodys = tables[i].getElementsByTagName("tbody");
      
      for (var j = 0; j < tbodys.length; j++)
      {
        var rows = tbodys[j].getElementsByTagName("tr");

        for (var k = 1; k < rows.length; k += 2)
        {
          Core.addClass(rows[k], "alt");
        }
      }
    }
  }
};

Core.start(StripyTables);