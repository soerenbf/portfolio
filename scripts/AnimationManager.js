var AnimationManager = (function() {
  return function() {

    var togglePrevWorkItemDescription = function(elem, shouldShow) {
      elem.find('.pw_item_teaser').animate({bottom: (shouldShow ? "0px" : ($('.pw_item_teaser').height() * -1) + "px")}, 250);
    }

    this.togglePrevWorkItemDescription = togglePrevWorkItemDescription;
  }
})();
