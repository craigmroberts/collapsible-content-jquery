$.fn.collapsible = function (options) {
  var Collapsible = Collapsible || {};

  var options = $.extend({
    non_js_support: false,
    event_trigger: 'click',
    indicators: false,
    indicators_labels: '-|+',
    auto_scroll: false,
    auto_scroll_speed: 600,
    rounded: false
  }, options);

  var group = '.group';
  var indicators_labels = options.indicators_labels.split('|');

  Collapsible.indicators = function (el) {
    if (el !== undefined) {
      el.toggleClass('open');
      el.next().toggleClass('hide');
      if (options.indicators === true) {
        var lbl;
        if (el.children().html() == indicators_labels[0]) {
          lbl = indicators_labels[1]
        } else {
          lbl = indicators_labels[0]
        };
        el.children().html(lbl);
      };
    };
  };


  Collapsible.inGroup = function (el) {
    el = el.parent().parent();
    if (el.hasClass(group.substring(1))) {
      var grp = $('.' + el.attr('class').split(' ')[1] + ' .open');

      grp.next().toggleClass('hide');
      grp.children().text(indicators_labels[1]);
      grp.toggleClass('open');
    };
  };



  for (i = 0; i < $('.collapse li#head').length; i++) {
    var $label = $('.collapse li#head:eq(' + i + ')');

    if (options.non_js_support === true) {
      if (!$label.hasClass('open')) {
        if (!$label.hasClass('hide')) {
          $label.next().addClass('hide');
        };
      };
    };



    if (options.indicators === true) {
      var lbl;
      if ($label.hasClass('open')) {
        lbl = indicators_labels[0]
      } else {
        lbl = indicators_labels[1]
      };
      $label.append('<span>' + lbl + '</span>');
    };

  };


  if (options.rounded == true) {
    for (i = 0; i < $(group).length; i++) {

      $(group).eq(i).addClass('grp_' + i + '');


      $(".grp_" + i + " ul").first().addClass('first');
      $(".grp_" + i + " ul").last().addClass('last');
    };
  }

  $('.collapse li#head').bind(options.event_trigger, function (e) {

    var el = $(e.target);

    if (el.parent().children().length > 1) {

      if (el.hasClass('open')) {
        Collapsible.indicators(el);
      } else {
        Collapsible.inGroup(el);
        Collapsible.indicators(el);
      };
    }
    if (options.auto_scroll === true) {
      var scroll_top = el.position().top;
      $("html, body").animate({
        scrollTop: scroll_top
      }, options.auto_scroll_speed);
    };
  });
};


$('label').collapsible({
  non_js_support: true,
  event_trigger: 'click',
  group_name: '.group',
  indicators: true,
  auto_scroll: true,
  auto_scroll_speed: 700,
  rounded: true
});