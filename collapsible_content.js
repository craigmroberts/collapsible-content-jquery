var CMR_Collapse = CMR_Collapse || {};


CMR_Collapse.run = function(noJS) {
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
    $('.collapse label').bind('click', CMR_Collapse.collapse);
};

CMR_Collapse.toggle = function($el) {
    $el.toggleClass('open');
    $el.next().toggleClass('hide');
};

CMR_Collapse.inGroup = function($el) {
    $el = $el.parent().parent();
    if ($el.hasClass('group')) {
        var grp = $el.attr('class').split(' ')[1];

        $('.' + grp + ' .open').next().toggleClass('hide');
        $('.' + grp + ' .open').toggleClass('open');
    }
};

CMR_Collapse.collapse = function(e) {
    var $el = $(e.target);

    if ($el.parent().children().length > 1) {

        if ($el.hasClass('open')) {
            CMR_Collapse.toggle($el);
        }
        else {
            CMR_Collapse.inGroup($el);
            CMR_Collapse.toggle($el);
        }
    }
};