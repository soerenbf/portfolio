var AnimationManager = (function() {
  return function() {

    var togglePrevWorkItemDescription = function(elem, shouldShow) {
      console.log('toggleDesc');
      if (shouldShow) {
        elem.find('.pw_item_description').animate({bottom: "0px"}, 250);
      } else {
        elem.find('.pw_item_description').animate({bottom: "280px"}, 250);
      }
    }

    this.togglePrevWorkItemDescription = togglePrevWorkItemDescription;
  }
})();
