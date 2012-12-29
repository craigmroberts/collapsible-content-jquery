jQuery.fn.collapsible = function(options) {
    var Collapsible = Collapsible || {};
    alert
    var defaults = {
        safe: false,
        event: 'click',
        indicators: false,
        indi_names: '-|+',
        indi_pos: 'right',
        auto_scroll: false,
        auto_scroll_speed: 600
    };
    var options = $.extend(defaults, options);
    var $grp_name = '.group';
    var $indi_pos = options.indi_pos;
    var $indi_label = options.indi_names.split('|');

    Collapsible.indicators = function($el) {
        if ($el !== undefined) {
            $el.toggleClass('open');
            $el.next().toggleClass('hide');
            if (options.indicators === true) {
                if ($el.children().html() == $indi_label[0]) {
                    $el.children().html($indi_label[1]);
                }
                else {
                    $el.children().html($indi_label[0]);
                };
            };
        };
    };


    Collapsible.inGroup = function($el) {
        $el = $el.parent().parent();
        if ($el.hasClass($grp_name.substring(1))) {
            var grp = $('.' + $el.attr('class').split(' ')[1] + ' .open');

            grp.next().toggleClass('hide');
            grp.children().text($indi_label[1]);
            grp.toggleClass('open');
        };
    };



    for (i = 0; i < $('.collapse li#head').length; i++) {
        var $label = $('.collapse li#head:eq(' + i + ')');

        if (options.safe === true) {
            if (!$label.hasClass('open')) {
                if (!$label.hasClass('hide')) {
                    $label.next().addClass('hide');
                };
            };
        };



        if (options.indicators === true) {
            if ($indi_pos == 'left') {
                $indi_pos = 'style="float:left"';
            }


            if ($label.hasClass('open')) {
                $label.append('<span ' + $indi_pos + '>' + $indi_label[0] + '</span>');
            } else {
                $label.append('<span ' + $indi_pos + '>' + $indi_label[1] + '</span>');
            };




        };

};



for (i = 0; i < $($grp_name).length; i++) {
    var $thisGroup = $grp_name + ':eq(' + i + ')';

    $($thisGroup).addClass('grp_' + i + '');
};


$('.collapse li#head').bind(options.event, function(e) {

    var $el = $(e.target);

    if ($el.parent().children().length > 1) {

        if ($el.hasClass('open')) {
            Collapsible.indicators($el);
        }
        else {
            Collapsible.inGroup($el);
            Collapsible.indicators($el);
        };
    }
    if (options.auto_scroll === true) {
        var scroll_top = $el.position().top;
        $("html, body").animate({
            scrollTop: scroll_top
        }, options.auto_scroll_speed);
    };
});
};