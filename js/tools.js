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

    $('.main-block .partners').each(function() {
        var curBlock = $(this).parent();
        var curSize = 6;
        if ($(window).width() < 1200) {
            curSize = 2;
        }
        if (curBlock.find('.partners-group-item').length > curSize) {
            curBlock.find('.partners-more').addClass('visible');
        } else {
            curBlock.find('.partners-more-all').addClass('visible');
        }
    });

    $('.partners-more a').click(function(e) {
        var curBlock = $(this).parents().filter('.main-block');
        var countItems = curBlock.find('.partners-group-item').length;
        var countVisible = curBlock.find('.partners-group-item:visible').length;
        var curSize = 6;
        if ($(window).width() < 1200) {
            curSize = 2;
        }
        countVisible += curSize;
        if (countVisible >= countItems) {
            curBlock.find('.partners-more').removeClass('visible');
            curBlock.find('.partners-more-all').addClass('visible');
        }
        curBlock.find('.partners-group-item:lt(' + countVisible + ')').addClass('visible');
        e.preventDefault();
    });

    $('.nav ul li').each(function(e) {
        var curLi = $(this);
        if (curLi.find('ul').length != 0) {
            curLi.find('ul').prepend('<li class="nav-mobile-parent"><a href="' + curLi.find('> a').attr('href') + '">' + curLi.find('> a span').html() + '</a></li>');
        }
    });

    $('.nav ul li a').click(function(e) {
        if ($(window).width() < 1200) {
            if ($(this).parent().find('ul').length != 0) {
                $(this).parent().toggleClass('open');
                e.preventDefault();
            }
        }
    });

    $('.program-days-menu-item').click(function(e) {
        var curItem = $(this);
        if (!curItem.hasClass('active')) {
            $('.program-days-menu-item.active').removeClass('active');
            curItem.addClass('active');
            var curIndex = $('.program-days-menu-item').index(curItem);
            $('.program-day.active').removeClass('active');
            $('.program-day').eq(curIndex).addClass('active');

            $('.program-days-menu-current span').html(curItem.find('.fest-tracks-item-title').html());
            $('.program-days-menu').removeClass('open')
        }
        e.preventDefault();
    });

    $('.program-day-group-title a').click(function(e) {
        var curGroup = $(this).parents().filter('.program-day-group');
        curGroup.toggleClass('open');
        curGroup.find('.program-day-group-list').slideToggle();
        e.preventDefault();
    });

    $('.program-days-menu-current').click(function() {
        if ($('.program-days-menu').hasClass('open')) {
            $('.program-days-menu').removeClass('open');
        } else {
            $('.program-days-menu').addClass('open');
        }
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.program-days-menu').length == 0) {
            $('.program-days-menu').removeClass('open');
        }
    });

    $('body').on('click', '.speaker-card-descr-more a', function(e) {
        $(this).parent().prev().toggleClass('open');
        e.preventDefault();
    });

    $('.travels-menu ul li a').click(function(e) {
        var curItem = $(this).parent();
        if (!curItem.hasClass('active')) {
            $('.travels-menu ul li.active').removeClass('active');
            curItem.addClass('active');
            var curIndex = $('.travels-menu ul li').index(curItem);
            $('.travels-day.active').removeClass('active');
            $('.travels-day').eq(curIndex).addClass('active');

            $('.travels-menu-current span').html(curItem.find('a').html());
            $('.travels-menu').removeClass('open')
        }
        e.preventDefault();
    });

    $('.travels-menu-current').click(function() {
        if ($('.travels-menu').hasClass('open')) {
            $('.travels-menu').removeClass('open');
        } else {
            $('.travels-menu').addClass('open');
        }
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.travels-menu').length == 0) {
            $('.travels-menu').removeClass('open');
        }
    });

});

$(window).on('load resize', function() {
    $('.speaker-card-descr-text').each(function() {
        var curBlock = $(this);
        curBlock.removeClass('open with-more');
        if (curBlock.height() < curBlock.find('.speaker-card-descr-text-inner').height()) {
            curBlock.addClass('with-more');
        }
    });
});