var ScrollDisabler = (function(window, document) {
    return function(callback) {
        var scrollEventKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
        var disabledScrollCallback = callback;

        var disableScrolling = function() {
            window.on("mousewheel.UserScrollDisabler DOMMouseScroll.UserScrollDisabler", handleWheel);
            document.on("mousewheel.UserScrollDisabler touchmove.UserScrollDisabler", handleWheel);
            document.on("keydown.UserScrollDisabler", function(event) {
                handleKeydown.call(this, event);
            });
        }

        var enableScrolling = function() {
            window.off(".UserScrollDisabler");
            document.off(".UserScrollDisabler");
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
})($(window), $(document));