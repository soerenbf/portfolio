var AnimationManager = (function() {
  return function() {

    var togglePrevWorkItemDescription = function(elem, shouldShow) {
      elem.find('.pw_item_description').animate({bottom: (shouldShow ? "0px" : '-280px')}, 250);
    }

    this.togglePrevWorkItemDescription = togglePrevWorkItemDescription;
  }
})();
