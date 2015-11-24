// Handles the menu

!function() {
  // Initialize menu data
  var data = cc.ls.d.menu || cc.ls.d.write('menu', {}).menu;

  // Menu opening
  $('#cutie-bar-m').click(function() {
    // Nice and simple
    data.write('active', !data.active);
  }).on('mousedown touchstart', function(ev) {
    if(cc.burstReady && !cc.burstStart && !cc.ls.d.preBurst) {
      ev.preventDefault();

      // Burst if burst is ready
      cc.burstStart = true;
    }
  });

  // Update class with variable
  cc.loop.tick(function() {
    if(data.active) {
      if(cc.burstReady && !cc.burstStart && !cc.ls.d.preBurst) {
        // Burst if burst is ready
        cc.burstStart = true;
      } else if(cc.ls.d.burst || cc.ls.d.preBurst || cc.burstStart) {
        // If burst mode is active, deactivate menu
        data.write('active', false);
        $('html').removeClass('menu-active');
      } else if(!$('html').hasClass('menu-active')) {
        // Burst mode isn't active, but menu isn't open for some reason.
        $('html').addClass('menu-active');
      }
    } else {
      if($('html').hasClass('menu-active')) {
        // Menu shouldn't be active.
        $('html').removeClass('menu-active');
      }
    }
  });

  // Forward clicks on middle of top bar to cutie card
  $('#menu-close-button').click(function() {
    if(data.active) {
      // This doesn't prevent default, so be sure to check for the menu being active!
      $('#cutie-bar-m').click();
    }
  }).on('mousedown touchstart', function(ev) {
    ev.preventDefault();

    // Fake a click on cutie-bar-m
    $('#cutie-bar-m').addClass('fake-click');

    // Have to detect if player releases mouse anywhere.
    // Still doesn't work if they release it ouside of window
    $('html').one('mouseup touchend', function(ev) {
      ev.preventDefault();
      $('#cutie-bar-m').removeClass('fake-click');

      // But this doesn't click if player released mouse over cutie-bar-m, so fix that.
      if($('#cutie-bar-m').is(ev.target)) {
        $('#cutie-bar-m').click();
      }
    });
  });

}();
