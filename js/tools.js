$(document).ready(function() {

    $('.main-block .speakers').each(function() {
        var curBlock = $(this).parent();
        var curSize = 8;
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

    $('.main-block .partners').each(function() {
        var curBlock = $(this).parent();
        var curSize = 12;
        if (curBlock.find('.partners-item').length > curSize) {
            curBlock.find('.partners-more').addClass('visible');
        } else {
            curBlock.find('.partners-more-all').addClass('visible');
        }
    });

    $('.partners-more a').click(function(e) {
        var curBlock = $(this).parents().filter('.main-block');
        var countItems = curBlock.find('.partners-item').length;
        var countVisible = curBlock.find('.partners-item:visible').length;
        var curSize = 12;
        countVisible += curSize;
        if (countVisible >= countItems) {
            curBlock.find('.partners-more').removeClass('visible');
            curBlock.find('.partners-more-all').addClass('visible');
        }
        curBlock.find('.partners-item:lt(' + countVisible + ')').addClass('visible');
        e.preventDefault();
    });

});