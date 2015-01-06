var AnimationManager = (function() {
  return function() {

    //For _animateBackground.
    var animateInterval;
    var animateElement;
    var xpos = 0;

    var togglePrevWorkItemDescription = function(elem, shouldShow) {
      elem.find('.pw_item_teaser').animate({bottom: (shouldShow ? "0px" : ($('.pw_item_teaser').height() * -1) + "px")}, 250);
    }

    var toggleAnimatingBackground = function(elem, shouldAnimate) {
      if (shouldAnimate) {
        animateElement = elem;
        animateInterval = setInterval(_animateBackground, 10);
      } else {
        clearInterval(animateInterval);
        xpos = 0;
        animateElement.css('background-position', xpos + 'px 0px');
        animateElement = null;

      }
    }

    var toggleSkillDescription = function(elem, shouldShow) {
      if (shouldShow) {
        $('#skill_description').html(elem.data('desc'));
      } else {
        $('#skill_description').html('&#8606; Hover them...');
      }
    }

    var _animateBackground = function() {
      animateElement.css('background-position', xpos + 'px 0px');
      xpos++;
    }

    this.togglePrevWorkItemDescription = togglePrevWorkItemDescription;
    this.toggleAnimatingBackground = toggleAnimatingBackground;
    this.toggleSkillDescription = toggleSkillDescription;
  }
})();
