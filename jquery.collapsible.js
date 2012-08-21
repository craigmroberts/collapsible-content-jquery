var Collapsible = Collapsible || {};

Collapsible.run = function(noJS) {
    var i = 0;
    for (i; i < $('.group').length; i++) {
        $('.group:eq(' + i + ')').addClass('grp_' + i + '');
    }

    var hiddenEl = $('.collapse label');
    for (i = 0; i < hiddenEl.length; i++) {
        var lbl = $('.collapse label:eq(' + i + ')');
        if (noJS) {
            if (!lbl.hasClass('open')) {
                if (!lbl.hasClass('hide')) {
                    lbl.next().addClass('hide');
                }
            }
        }
    }
    $('.collapse label').bind('click', Collapsible.collapse);
};

Collapsible.toggle = function($el) {
    $el.toggleClass('open');
    $el.next().toggleClass('hide');
};

Collapsible.inGroup = function($el) {
    $el = $el.parent().parent();
    if ($el.hasClass('group')) {
        var grp = $el.attr('class').split(' ')[1];

        $('.' + grp + ' .open').next().toggleClass('hide');
        $('.' + grp + ' .open').toggleClass('open');
    }
};

Collapsible.collapse = function(e) {
    var $el = $(e.target);

    if ($el.parent().children().length > 1) {

        if ($el.hasClass('open')) {
            Collapsible.toggle($el);
        }
        else {
            Collapsible.inGroup($el);
            Collapsible.toggle($el);
        }
    }
};