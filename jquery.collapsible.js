jQuery.fn.collapsible = function(options) {
    var Collapsible = Collapsible || {};
    alert
    var defaults = {
        safe: false,
        event: 'click',
        group_name: ".group",
        indicators: false,
        indi_names: '-|+',
        indi_pos: 'right',
        auto_scroll: false,
        auto_scroll_speed: 600
    };
    var options = $.extend(defaults, options);

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
        } else {
            if (options.indicators === true) {
                if ($indi_pos == 'left') {
                    $indi_pos = 'style="float:left"';
                }
                return '<span ' + $indi_pos + '>' + $indi_label[1] + '</span>';
            };
        };
    };

    Collapsible.inGroup = function($el) {
        $el = $el.parent().parent();
        if ($el.hasClass(options.group_name.substring(1))) {
            var grp = $('.' + $el.attr('class').split(' ')[1] + ' .open');

            grp.next().toggleClass('hide');
            grp.children().text($indi_label[1]);
            grp.toggleClass('open');
        };
    };

    for (i = 0; i < $(options.group_name).length; i++) {
        var $thisGroup = options.group_name + ':eq(' + i + ')';

        $($thisGroup).addClass('grp_' + i + '');

        for (ii = 0; ii < $(options.group_name + ':eq(' + i + ') label').length; ii++) {
            var lbl = $($thisGroup + ' label:eq(' + ii + ')');
       
            if (options.safe === true) {
                if (!lbl.hasClass('open')) {
                    if (!lbl.hasClass('hide')) {
                        lbl.next().addClass('hide');
                    };
                };
            };
            lbl.append(Collapsible.indicators());
        };
    };


    this.bind(options.event, function(e) {
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

jQuery('label').collapsible({
    safe: true,
    event: 'click',
    group_name: '.group',
    indicators: true,
    indi_names: 'open|close',
    indi_pos: 'right',
    auto_scroll: true,
    auto_scroll_speed: 700
});