var Slider =
{
  init: function()
  {
    var sliderFields = Core.getElementsByClass("slider");
    
    for (var i = 0; i < sliderFields.length; i++)
    {
      var fromMatch = /(^| )from(\d+)( |$)/.exec(sliderFields[i].className);
      var from = parseInt(fromMatch[2], 10);
      
      var toMatch = /(^| )to(\d+)( |$)/.exec(sliderFields[i].className);
      var to = parseInt(toMatch[2], 10);
      
      var scaleMatch = /(^| )scale(\d+)( |$)/.exec(sliderFields[i].className);
      var scale = parseInt(scaleMatch[2], 10);
      
      var slider = document.createElement("span");
      slider.id = sliderFields[i].id + "slider";
      slider.className = "sliderControl";
      
      var track = document.createElement("span");
      track.id = sliderFields[i].id + "track";
      track.className = "sliderTrack";
      
      var thumb = document.createElement("span");
      thumb.id = sliderFields[i].id + "thumb";
      thumb.className = "sliderThumb";
      thumb._input = sliderFields[i];
      thumb._from = from;
      thumb._to = to;
      thumb._scale = scale;
      
      sliderFields[i]._thumb = thumb;

      slider.appendChild(track);
      slider.appendChild(thumb);
      sliderFields[i].parentNode.replaceChild(slider, sliderFields[i]);
      slider.appendChild(sliderFields[i]);
      
      var value = parseInt(sliderFields[i].value, 10);
      thumb.style.left = ((value - from) * scale) + "px";
      
      Core.addEventListener(sliderFields[i], "change", Slider.changeListener);
      Core.addEventListener(thumb, "mousedown", Slider.mousedownListener);
    }
  },
  
  changeListener: function(event)
  {
    var thumb = this._thumb;
    var value = parseInt(this.value, 10);
    
    if (value < thumb._from)
    {
      value = thumb._from;
    }
    else if (value > thumb._to)
    {
      value = thumb._to;
    }
    
    thumb.style.left = ((value - thumb._from) * thumb._scale) + "px";
    this.value = value;
  },
  
  mousedownListener: function(event)
  {
    this._valueorigin = parseInt(this.style.left, 10) / this._scale - this._from;
    this._dragorigin = event.clientX;
    document._currentThumb = this;
    
    Core.addEventListener(document, "mousemove", Slider.mousemoveListener);
    Core.addEventListener(document, "mouseup", Slider.mouseupListener);
    Core.preventDefault(event);
  },
  
  mousemoveListener: function(event)
  {
    var thumb = document._currentThumb;
    var value = thumb._valueorigin + (event.clientX - thumb._dragorigin) / thumb._scale;
    
    if (value < thumb._from)
    {
      value = thumb._from;
    }  
    else if (value > thumb._to)
    {
      value = thumb._to;
    }
    
    thumb.style.left = ((value - thumb._from) * thumb._scale) + "px";
    thumb._input.value = value;
    
    Core.preventDefault(event);
  },
  
  mouseupListener: function(event)
  {
    document._currentThumb = null;
    Core.removeEventListener(document, "mousemove", Slider.mousemoveListener);
    Core.removeEventListener(document, "mouseup", Slider.mouseupListener);
  }
};

Core.start(Slider);