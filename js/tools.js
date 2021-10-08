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

    $('.program-day-group:not(.open)').find('.program-day-group-list').hide();

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

    $('.up-link').click(function(e) {
        $('html, body').animate({'scrollTop': 0});
        e.preventDefault();
    });

    function popupCenter(url, title) {
        var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var left = ((width / 2) - (480 / 2)) + dualScreenLeft;
        var top = ((height / 3) - (360 / 3)) + dualScreenTop;
        var newWindow = window.open(url, title, 'scrollbars=yes, width=' + 480 + ', height=' + 360 + ', top=' + top + ', left=' + left);
        if (window.focus) {
            newWindow.focus();
        }
    }

    $('body').on('click', '.window-photo-social-item-fb', function(e) {
        var curTitle = encodeURIComponent($('title').html());
        var curUrl = encodeURIComponent(window.location.href);

        popupCenter('https://www.facebook.com/sharer/sharer.php?u=' + curUrl, curTitle);

        e.preventDefault();
    });

    $('body').on('click', '.window-photo-social-item-vk', function(e) {
        var curTitle = encodeURIComponent($('title').html());
        var curUrl = encodeURIComponent(window.location.href);

        popupCenter('https://vk.com/share.php?url=' + curUrl + '&description=' + curTitle, curTitle);

        e.preventDefault();
    });

    $('body').on('click', '.window-photo-social-item-link', function(e) {
        e.preventDefault();
    });

    var clipboardPhoto = new ClipboardJS('.window-photo-social-item-link')
    clipboardPhoto.on('success', function(e) {
        alert('OK');
    });

    $('body').on('click', '.photo-gallery-item-inner a', function(e) {
        var curLink = $(this);
        var curItem = curLink.parents().filter('.photo-gallery-item');
        var curGallery = curItem.parents().filter('.photo-gallery');
        var curIndex = curGallery.find('.photo-gallery-item').index(curItem);

        var curPadding = $('.wrapper').width();
        var curScroll = $(window).scrollTop();
        $('html').addClass('window-photo-open');
        curPadding = $('.wrapper').width() - curPadding;
        $('body').css({'margin-right': curPadding + 'px'});

        var windowHTML =    '<div class="window-photo">';

        windowHTML +=           '<div class="window-photo-preview">' +
                                    '<div class="window-photo-preview-inner">' +
                                        '<div class="window-photo-preview-list">';

        var galleryLength = curGallery.find('.photo-gallery-item-inner').length;
        for (var i = 0; i < galleryLength; i++) {
            var curTitle = '';
            var curGalleryItem = curGallery.find('.photo-gallery-item-inner').eq(i);
            windowHTML +=                   '<div class="window-photo-preview-list-item"><a href="#"><img src="' + curGalleryItem.find('img').attr('src') + '" alt="" /></a></div>';
        }
        windowHTML +=                   '</div>' +
                                    '</div>' +
                                '</div>';

        windowHTML +=           '<a href="#" class="window-photo-close"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-photo-close"></use></svg></a>';
        windowHTML +=           '<a href="#" class="window-photo-download" target="_blank" download><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-photo-download"></use></svg></a>';
        windowHTML +=           '<div class="window-photo-social">';
        windowHTML +=               '<div class="window-photo-social-icon"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-photo-share"></use></svg></div>';
        windowHTML +=               '<div class="window-photo-social-window">';
        windowHTML +=                   '<a href="#" class="window-photo-social-item window-photo-social-item-link"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-photo-share-link"></use></svg></a>';
        windowHTML +=                   '<a href="#" class="window-photo-social-item window-photo-social-item-fb"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-photo-share-fb"></use></svg></a>';
        windowHTML +=                   '<a href="#" class="window-photo-social-item window-photo-social-item-vk"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-photo-share-vk"></use></svg></a>';
        windowHTML +=               '</div>';
        windowHTML +=           '</div>';

        windowHTML +=           '<div class="window-photo-slider">' +
                                    '<div class="window-photo-slider-list">';

        for (var i = 0; i < galleryLength; i++) {
            var curGalleryItem = curGallery.find('.photo-gallery-item').eq(i);
            windowHTML +=               '<div class="window-photo-slider-list-item">' +
                                            '<div class="window-photo-slider-list-item-inner"><img src="' + pathTemplate + 'images/loading.gif" data-src="' + curGalleryItem.find('.photo-gallery-item-inner a').attr('href') + '" alt="" /></div>' +
                                        '</div>';
        }
        windowHTML +=               '</div>' +
                                '</div>';

        windowHTML +=       '</div>';

        $('.window-photo').remove();
        $('body').append(windowHTML);

        $('.wrapper').css({'top': -curScroll});
        $('.wrapper').data('curScroll', curScroll);

        $('.window-photo').each(function() {
            var marginPhoto = 166;
            if ($(window).width() < 1200) {
                marginPhoto = 253;
            }
            var newHeight = marginPhoto;
            $('.window-photo-slider-list-item-inner').css({'height': 'calc(100vh - ' + newHeight + 'px)', 'line-height': 'calc(100vh - ' + newHeight + 'px)'});
        });

        if ($(window).width() > 1199) {
            $('.window-photo-preview-inner').mCustomScrollbar({
                axis: 'y',
                scrollButtons: {
                    enable: true
                }
            });
        } else {
            $('.window-photo-preview-inner').mCustomScrollbar({
                axis: 'x',
                scrollButtons: {
                    enable: true
                }
            });
        }

        $('.window-photo-slider-list').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#gallery-prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#gallery-next"></use></svg></button>',
            dots: false,
            speed: 250,
            initialSlide: curIndex,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        arrows: false
                    }
                }
            ]
        }).on('setPosition', function(event, slick) {
            var currentSlide = $('.window-photo-slider-list').slick('slickCurrentSlide');
            $('.window-photo-preview-list-item.active').removeClass('active');
            $('.window-photo-preview-list-item').eq(currentSlide).addClass('active');
            $('.window-photo-preview-inner').mCustomScrollbar('scrollTo', $('.window-photo-preview-list-item').eq(currentSlide));
            $('.window-photo-download').attr('href', $('.window-photo-slider-list-item').eq(currentSlide).find('img').attr('data-src'));
            $('.window-photo-social-item-link').attr('data-clipboard-text', $('.window-photo-slider-list-item').eq(currentSlide).find('img').attr('data-src'));
            var curIMG = $('.window-photo-slider-list-item').eq(currentSlide).find('img');
            if (curIMG.attr('src') !== curIMG.attr('data-src')) {
                var newIMG = $('<img src="" alt="" style="position:fixed; left:-9999px; top:-9999px" />');
                $('body').append(newIMG);
                newIMG.one('load', function(e) {
                    curIMG.attr('src', curIMG.attr('data-src'));
                    newIMG.remove();
                });
                newIMG.attr('src', curIMG.attr('data-src'));
                window.setTimeout(function() {
                    curIMG.attr('src', curIMG.attr('data-src'));
                    if (newIMG) {
                        newIMG.remove();
                    }
                }, 3000);
            }
        });

        e.preventDefault();
    });

    $('body').on('click', '.window-photo-preview-list-item a', function(e) {
        var curIndex = $('.window-photo-preview-list-item').index($(this).parent());
        $('.window-photo-slider-list').slick('slickGoTo', curIndex);
        e.preventDefault();
    });

    $('body').on('click', '.window-photo-close', function(e) {
        $('.window-photo').remove();
        $('html').removeClass('window-photo-open');
        $('body').css({'margin-right': 0});
        $('.wrapper').css({'top': 0});
        $(window).scrollTop($('.wrapper').data('curScroll'));
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            if ($('.window-photo').length > 0) {
                $('.window-photo-close').trigger('click');
            }
        }
    });

    $('body').on('click', '.window-video-social-item-fb', function(e) {
        var curTitle = encodeURIComponent($('title').html());
        var curUrl = encodeURIComponent(window.location.href);

        popupCenter('https://www.facebook.com/sharer/sharer.php?u=' + curUrl, curTitle);

        e.preventDefault();
    });

    $('body').on('click', '.window-video-social-item-vk', function(e) {
        var curTitle = encodeURIComponent($('title').html());
        var curUrl = encodeURIComponent(window.location.href);

        popupCenter('https://vk.com/share.php?url=' + curUrl + '&description=' + curTitle, curTitle);

        e.preventDefault();
    });

    $('body').on('click', '.window-video-social-item-link', function(e) {
        e.preventDefault();
    });

    var clipboardVideo = new ClipboardJS('.window-video-social-item-link')
    clipboardVideo.on('success', function(e) {
        alert('OK');
    });

    $('body').on('click', '.video-gallery-item a', function(e) {
        var curLink = $(this);
        var curItem = curLink.parents().filter('.video-gallery-item');
        var curGallery = curItem.parents().filter('.video-gallery');
        if (curGallery.length == 0 || curItem.parents().filter('.main-block').length == 1) {
            curGallery = curItem.parents().filter('.main-block');
        }
        var curIndex = curGallery.find('.video-gallery-item').index(curItem);

        var curPadding = $('.wrapper').width();
        var curScroll = $(window).scrollTop();
        $('html').addClass('window-video-open');
        curPadding = $('.wrapper').width() - curPadding;
        $('body').css({'margin-right': curPadding + 'px'});

        var windowHTML =    '<div class="window-video">';

        windowHTML +=           '<a href="#" class="window-video-close"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-photo-close"></use></svg></a>';
        windowHTML +=           '<div class="window-video-social">';
        windowHTML +=               '<div class="window-video-social-icon"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-photo-share"></use></svg></div>';
        windowHTML +=               '<div class="window-video-social-window">';
        windowHTML +=                   '<a href="#" class="window-video-social-item window-video-social-item-link"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-photo-share-link"></use></svg></a>';
        windowHTML +=                   '<a href="#" class="window-video-social-item window-video-social-item-fb"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-photo-share-fb"></use></svg></a>';
        windowHTML +=                   '<a href="#" class="window-video-social-item window-video-social-item-vk"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-photo-share-vk"></use></svg></a>';
        windowHTML +=               '</div>';
        windowHTML +=           '</div>';

        windowHTML +=           '<div class="window-video-slider">' +
                                    '<div class="window-video-slider-list">';

        var galleryLength = curGallery.find('.video-gallery-item').length;
        for (var i = 0; i < galleryLength; i++) {
            var curGalleryItem = curGallery.find('.video-gallery-item').eq(i);
            windowHTML +=               '<div class="window-video-slider-list-item">' +
                                            '<div class="window-video-slider-list-item-inner" data-videourl="' + curGalleryItem.find('a').attr('href') + '"></div>' +
                                        '</div>';
        }
        windowHTML +=               '</div>' +
                                '</div>';

        windowHTML +=       '</div>';

        $('.window-video').remove();
        $('body').append(windowHTML);

        $('.wrapper').css({'top': -curScroll});
        $('.wrapper').data('curScroll', curScroll);

        $('.window-video-slider-list').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#gallery-prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#gallery-next"></use></svg></button>',
            dots: false,
            speed: 250,
            initialSlide: curIndex,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        arrows: false
                    }
                }
            ]
        }).on('setPosition', function(event, slick) {
            var currentSlide = $('.window-video-slider-list').slick('slickCurrentSlide');
            $('.window-video-slider-list-item-inner').html('');
            $('.window-video-social-item-link').attr('data-clipboard-text', $('.window-video-slider-list-item').eq(currentSlide).find('.window-video-slider-list-item-inner').attr('data-videourl'));
            $('.window-video-slider-list-item').eq(currentSlide).find('.window-video-slider-list-item-inner').each(function() {
                $(this).html('<iframe width="560" height="315" src="' + $(this).attr('data-videourl') + '?rel=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            });
        });

        e.preventDefault();
    });

    $('body').on('click', '.window-video-close', function(e) {
        $('.window-video').remove();
        $('html').removeClass('window-video-open');
        $('body').css({'margin-right': 0});
        $('.wrapper').css({'top': 0});
        $(window).scrollTop($('.wrapper').data('curScroll'));
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            if ($('.window-video').length > 0) {
                $('.window-video-close').trigger('click');
            }
        }
    });

    var morePhotos;
    $('.main-block .photo-gallery').each(function() {
        var curBlock = $(this).parent();
        var curSize = 16;
        if (curBlock.find('.photo-gallery-item').length > curSize) {
            curBlock.find('.photo-gallery-more').addClass('visible');
            morePhotos = $('<div>' + curBlock.find('.photo-gallery').html() + '</div>');
            curBlock.find('.photo-gallery-item:gt(' + (curSize - 1) + ')').remove();
        }
    });

    var $grid = $('.photo-gallery').masonry({
        itemSelector: '.photo-gallery-item'
    });
    $('.photo-gallery img').one('load', function() {
         $grid.masonry('layout');
    });

    $('.photo-gallery-more a').click(function(e) {
        var curBlock = $(this).parents().filter('.main-block');
        var countItems = morePhotos.find('.photo-gallery-item').length;
        var countVisible = curBlock.find('.photo-gallery-item').length;
        var curSize = 16;
        if (countVisible + curSize >= countItems) {
            curBlock.find('.photo-gallery-more').removeClass('visible');
        }

        var curIndex = -1;
        $('<div>' + morePhotos.html() + '</div>').find('.photo-gallery-item').each(function() {
            var elem = $(this);
            curIndex++;
            if (curIndex > countVisible - 1 && curIndex < countVisible + curSize) {
                $grid.masonry().append(elem).masonry('appended', elem).masonry();
                curBlock.find('.photo-gallery img').one('load', function() {
                     $grid.masonry('layout');
                });
            }
        });
        e.preventDefault();
    });

    $('body').on('click', '.window-title-social-item-fb', function(e) {
        var curTitle = encodeURIComponent($('title').html());
        var curUrl = encodeURIComponent(window.location.href);

        popupCenter('https://www.facebook.com/sharer/sharer.php?u=' + curUrl, curTitle);

        e.preventDefault();
    });

    $('body').on('click', '.window-title-social-item-vk', function(e) {
        var curTitle = encodeURIComponent($('title').html());
        var curUrl = encodeURIComponent(window.location.href);

        popupCenter('https://vk.com/share.php?url=' + curUrl + '&description=' + curTitle, curTitle);

        e.preventDefault();
    });

    $('body').on('click', '.window-title-social-item-link', function(e) {
        e.preventDefault();
    });

    var clipboardWindow = new ClipboardJS('.window-title-social-item-link')
    clipboardWindow.on('success', function(e) {
        alert('OK');
    });

    $('body').on('click', '.window-link', function(e) {
        windowOpen($(this).attr('href'));
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            windowClose();
        }
    });

    $(document).click(function(e) {
        if ($(e.target).hasClass('window')) {
            windowClose();
        }
    });

    $('body').on('click', '.window-close', function(e) {
        windowClose();
        e.preventDefault();
    });

    $.validator.addMethod('phoneMask',
        function(phone_number, element) {
            return this.optional(element) || phone_number.match(/^\+\d+$/);
        },
        'Ошибка заполнения'
    );

    $('form').each(function() {
        initForm($(this));
    });

    $('.video-filter-btn a').click(function(e) {
        $('html').toggleClass('video-filter-open');
        e.preventDefault();
    });

    $('body').on('click', '.speakers-container .pager a', function(e) {
        $('.speakers-container .pager a.active').removeClass('active');
        $(this).addClass('active');
        filterSpeakers();
        e.preventDefault();
    });

    $('body').on('click', '.speakers-letters a', function(e) {
        var curLink = $(this);
        if (curLink.hasClass('active')) {
            curLink.removeClass('active');
        } else {
            $('.speakers-letters a.active').removeClass('active');
            curLink.addClass('active');
        }
        filterSpeakers();
        e.preventDefault();
    });

    $('body').on('change', '.speakers-filter-item input', function(e) {
        filterSpeakers();
        e.preventDefault();
    });

    $('body').on('click', '.speakers-filter-group-header', function(e) {
        $(this).parent().toggleClass('open');
        $(this).parent().addClass('open-mobile');
    });

    $('body').on('click', '.speakers-filter-group-all a', function(e) {
        $(this).parent().parent().toggleClass('all');
        e.preventDefault();
    });

    $('.speakers-filter-group-all').each(function() {
        var curBlock = $(this).parent();
        if (curBlock.find('> .speakers-filter-item').length > 6) {
            $(this).addClass('visible');
            $(this).find('em').html(curBlock.find('> .speakers-filter-item').length - 6);
        }
    });

    $('.speakers-filter-reset a').click(function(e) {
        $('.speakers-filter-item input').prop('checked', false);
        filterSpeakers();
        if ($('html').hasClass('speakers-filter-open')) {
            $('html').removeClass('speakers-filter-open');
            $('.wrapper').css('margin-top', 0);
            $(window).scrollTop($('html').data('scrollTop'));
        }
        e.preventDefault();
    });

});

function filterSpeakers() {
    $('.speakers-container').addClass('loading');
    var curForm = $('.speakers-filter form');
    var curData = curForm.serialize();
    curData += '&page=' + $('.pager a.active').attr('data-value');
    if ($('.speakers-letters a.active').length == 1) {
        curData += '&letter=' + $('.speakers-letters a.active').html();
    }
    $.ajax({
        type: 'POST',
        url: curForm.attr('action'),
        dataType: 'html',
        data: curData,
        cache: false
    }).done(function(html) {
        $('.speakers-container .speakers').html($(html).find('.speakers').html())
        $('.speakers-container .pager').html($(html).find('.pager').html())
        $('.speakers-container').removeClass('loading');
        if ($(window).width() > 1199) {
            $('html, body').animate({'scrollTop': $('.video-header').offset().top - 50});
        } else {
            $('html, body').animate({'scrollTop': 0});
        }

        $('.speaker').each(function() {
            var curItem = $(this);
            curItem.find('.speaker-inner').append('<div class="speaker-detail"><div class="speaker-name">' + curItem.find('.speaker-name').html() + '</div><div class="speaker-text">' + curItem.find('.speaker-text').html() + '</div></div>');
        });
    });
}

function initForm(curForm) {
    curForm.find('input.phoneMask').mask('+ZZZZZZZZZZZZZZZZZZZZ', {
        translation: {
            'Z': {
                pattern: /[0-9]/, optional: true
            }
        }
    });

    curForm.find('.form-select select').each(function() {
        var curSelect = $(this);
        var options = {
            minimumResultsForSearch: 20
        }
        if (curSelect.prop('multiple')) {
            options['closeOnSelect'] = false;
        }

        if (curSelect.parents().filter('.window').length == 1) {
            options['dropdownParent'] = $('.window-content');
        }

        curSelect.select2(options);
        curSelect.on('select2:selecting', function (e) {
            if (curSelect.prop('multiple')) {
                var $searchfield = $(this).parent().find('.select2-search__field');
                $searchfield.val('').trigger('focus');
            }
        });
        if (curSelect.find('option:selected').legnth > 0 || curSelect.find('option').legnth == 1 || curSelect.find('option:first').html() != '') {
            curSelect.trigger({type: 'select2:select'})
        }
    });

    curForm.validate({
        ignore: '',
        submitHandler: function(form) {
            var curForm = $(form);
            if (curForm.hasClass('ajax-form')) {
                curForm.addClass('loading');
                var formData = new FormData(form);

                $.ajax({
                    type: 'POST',
                    url: curForm.attr('action'),
                    processData: false,
                    contentType: false,
                    dataType: 'json',
                    data: formData,
                    cache: false
                }).done(function(data) {
                    curForm.find('.message').remove();
                    if (data.status) {
                        curForm.find('.form-input input, .form-input textarea').each(function() {
                            $(this).val('');
                        });
                        curForm.prepend('<div class="message message-success"><div class="message-title">Отправлено</div><div class="message-text">' + data.message + '</div></div>')
                    } else {
                        curForm.prepend('<div class="message message-error"><div class="message-title">Ошибка</div><div class="message-text">' + data.message + '</div></div>')
                    }
                    $('html, body').animate({'scrollTop': curForm.offset().top - $('header').height()});
                    curForm.removeClass('loading');
                });
            } else if (curForm.hasClass('window-form')) {
                var formData = new FormData(form);

                windowOpen(curForm.attr('action'), formData);
            } else {
                form.submit();
            }
        }
    });
}

$(window).on('load resize', function() {
    $('.speaker-card-descr-text').each(function() {
        var curBlock = $(this);
        curBlock.removeClass('open with-more');
        if (curBlock.height() < curBlock.find('.speaker-card-descr-text-inner').height()) {
            curBlock.addClass('with-more');
        }
    });
});

$(window).on('load resize scroll', function() {
    var windowScroll = $(window).scrollTop();
    $('body').append('<div id="body-test-height" style="position:fixed; left:0; top:0; right:0; bottom:0; z-index:-1"></div>');
    var windowHeight = $('#body-test-height').height();
    $('#body-test-height').remove();

    if ($('.up-link').length == 1) {
        if (windowScroll > windowHeight) {
            $('.up-link').addClass('visible');
        } else {
            $('.up-link').removeClass('visible');
        }

        if (windowScroll + windowHeight > $('footer').offset().top) {
            var bottomDiff = 30;
            $('.up-link').css({'margin-bottom': (windowScroll + windowHeight) - $('footer').offset().top + bottomDiff});
        } else {
            $('.up-link').css({'margin-bottom': 0});
        }
    }

    if (windowScroll > 0) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }

});

function windowOpen(linkWindow, dataWindow) {
    if ($('.window').length == 0) {
        var curPadding = $('.wrapper').width();
        var curScroll = $(window).scrollTop();
        $('html').addClass('window-open');
        curPadding = $('.wrapper').width() - curPadding;
        $('body').css({'margin-right': curPadding + 'px'});

        $('body').append('<div class="window"><div class="window-loading"></div></div>')

        $('.wrapper').css({'top': -curScroll});
        $('.wrapper').data('curScroll', curScroll);
    } else {
        $('.window').append('<div class="window-loading"></div>')
        $('.window-container').addClass('window-container-preload');
    }

    $.ajax({
        type: 'POST',
        url: linkWindow,
        processData: false,
        contentType: false,
        dataType: 'html',
        data: dataWindow,
        cache: false
    }).done(function(html) {
        if ($('.window-container').length == 0) {
            $('.window').html('<div class="window-container window-container-preload">' + html + '<a href="#" class="window-close"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-close"></use></svg></a></div>');
        } else {
            $('.window-container').html(html + '<a href="#" class="window-close"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-close"></use></svg></a>');
            $('.window .window-loading').remove();
        }

        window.setTimeout(function() {
            $('.window-container-preload').removeClass('window-container-preload');
        }, 100);

        $('.window form').each(function() {
            initForm($(this));
        });

        $(window).trigger('resize');

    });
}

function windowClose() {
    if ($('.window').length > 0) {
        if (!$('.window').hasClass('changed')) {
            $('.window').remove();
            $('html').removeClass('window-open');
            $('body').css({'margin-right': 0});
            $('.wrapper').css({'top': 0});
            $(window).scrollTop($('.wrapper').data('curScroll'));
        } else {
            if (confirm('Закрыть форму?')) {
                $('.window').removeClass('changed');
                windowClose();
            }
        }
    }
}