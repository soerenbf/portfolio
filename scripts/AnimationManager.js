var AnimationManager = (function() {
  return function() {

    var togglePrevWorkItemDescription = function(elem, shouldShow) {
      elem.find('.pw_item_description').animate({bottom: (shouldShow ? "0px" : ($('.pw_item_description').height() * -1) + "px")}, 250);
      console.log($('.pw_item_description').height());
    }

    this.togglePrevWorkItemDescription = togglePrevWorkItemDescription;
  }
})();
