var AnimationManager = (function() {
  return function() {

    var togglePrevWorkItemDescription = function(elem, shouldShow) {

      elem.parents().each(function(i) {
        if(elem.parents()[i].id === 'prev_work_items_upper') {
          elem.find('h1').animate({bottom: (shouldShow ? "280px" : '0px')}, 250);
        }
      });

      elem.find('.pw_item_description').animate({bottom: (shouldShow ? "0px" : '-280px')}, 250);
    }

    this.togglePrevWorkItemDescription = togglePrevWorkItemDescription;
  }
})();
