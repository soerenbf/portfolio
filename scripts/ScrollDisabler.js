var ScrollDisabler = (function() {
  return function(callback) {
    var scrollEventKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
    var disabledScrollCallback = callback;

    var disableScrolling = function() {
      addWheelListener(document, handleWheel);
      $(document).on("keydown", function(event) {
        handleKeydown.call(this, event);
      });
    }

    var enableScrolling = function() {
      removeWheelListener(document, handleWheel);
    }

    var handleKeydown = function(event) {
      for (var i = 0; i < scrollEventKeys.length; i++) {
        if (event.keyCode === scrollEventKeys[i]) {
          event.preventDefault();
          //disabledScrollCallback(event); //If we want to handle keyScrolling.
          return;
        }
      }
    }

    var handleWheel = function(event) {
      event.preventDefault();
      disabledScrollCallback(event);
    }

    //Exports.
    this.disableScrolling = disableScrolling;
    this.enableScrolling = enableScrolling;
  }
})();
