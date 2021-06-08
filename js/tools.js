$(document).ready(function() {

    $('.main-block .speakers').each(function() {
        var curBlock = $(this).parent();
        var curSize = 8;
        if ($(window).width() < 1200) {
            curSize = 6;
        }
        if (curBlock.find('.speaker').length > curSize) {
            curBlock.find('.speakers-more').addClass('visible');
        } else {
            curBlock.find('.speakers-more-all').addClass('visible');
        }
    });

    $('.speakers-more a').click(function(e) {
        var curBlock = $(this).parents().filter('.main-block');
        var countItems = curBlock.find('.speaker').length;
        var countVisible = curBlock.find('.speaker:visible').length;
        var curSize = 8;
        if ($(window).width() < 1200) {
            curSize = 6;
        }
        countVisible += curSize;
        if (countVisible >= countItems) {
            curBlock.find('.speakers-more').removeClass('visible');
            curBlock.find('.speakers-more-all').addClass('visible');
        }
        curBlock.find('.speaker:lt(' + countVisible + ')').addClass('visible');
        e.preventDefault();
    });

    $('.speaker').each(function() {
        var curItem = $(this);
        curItem.find('.speaker-inner').append('<div class="speaker-detail"><div class="speaker-name">' + curItem.find('.speaker-name').html() + '</div><div class="speaker-text">' + curItem.find('.speaker-text').html() + '</div></div>');
    });

    $('.footer-menu .footer-title').click(function(e) {
        $(this).parent().toggleClass('open');
        e.preventDefault();
    });

    $('.mobile-menu-link').click(function(e) {
        if ($('html').hasClass('mobile-menu-open')) {
            $('html').removeClass('mobile-menu-open');
            $('.wrapper').css('margin-top', 0);
            $(window).scrollTop($('html').data('scrollTop'));
        } else {
            var curScroll = $(window).scrollTop();
            $('html').addClass('mobile-menu-open');
            $('html').data('scrollTop', curScroll);
            $('.wrapper').css('margin-top', -curScroll);
        }
        e.preventDefault();
    });

});