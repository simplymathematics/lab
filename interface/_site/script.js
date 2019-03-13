$( document ).ready(function() {

    // Device
    var address = "192.168.50.221";
    var device = new Device(address);
    console.log(device);

    // Buttons
    $('#forward').mousedown(function() {
      device.callFunction("forward");
    });
    $('#forward').mouseup(function() {
      device.callFunction("stop");
    });

    $('#right').mousedown(function() {
      device.callFunction("right");
    });
    $('#right').mouseup(function() {
      device.callFunction("stop");
    });

    $('#left').mousedown(function() {
      device.callFunction("left");
    });
    $('#left').mouseup(function() {
      device.callFunction("stop");
    });

    $('#backward').mousedown(function() {
      device.callFunction("backward");
    });
    $('#backward').mouseup(function() {
      device.callFunction("stop");
    });
    document.addEventListener("keypress", function(event)){
      if (event.keyCode == 13){
        device.callFunction("forward")
        device.callFunction("stop")
      }
    }
});
