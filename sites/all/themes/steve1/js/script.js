(function ($) {
    Drupal.behaviors.withVideoLink = {
        attach:function (context, settings) {
            var row = $('.view-cases-categories li.views-row');
            if (row.length) {
                $(row.each(function () {
                    var elements = $(this),
                            isWithVideoLink = elements.find('.views-field-field-files').text().length;
                    if (isWithVideoLink > 10) {
//                        console.log($(this).html());
                        $(this).css({
                            background:'url("/sites/all/themes/steve1/images/iconNodeWithVideo.png") no-repeat scroll 0 0 transparent'
                        });

                    }
                }));
            }
        }
    };

/*
    Drupal.behaviors.frontRowHeight = {
        attach:function (context, settings) {
            if ($('.view-display-id-page_1').length) {
                $('.view-display-id-page_1 .views-row').each(function () {
                    var element = $(this),
                            //url = element.find('.views-field-title a').attr('href'),
                            //imgHeight = element.find('.views-field-body img').height(),
                            //body = element.find('.views-field-body');
                    //body.append('<a href="' + url + '">детальніше...</a>');
                    //if (imgHeight) {
                        //body.height(imgHeight + 20);
                    //}
//                    console.log(link);
                });
            }
        }
    };
*/

/*
    Drupal.behaviors.newsRowHeight = {
        attach:function (context, settings) {
            if ($('.view-display-id-page').length) {
                $('.view-display-id-page .views-row').each(function () {
                    var element = $(this),
                            url = element.find('.views-field-title a').attr('href'),
                            imgHeight = element.find('.views-field-field-article-image img').height(),
                            body = element.find('.views-field-body');
//                    body.append('<a href="' + url + '">' + Drupal.t('read more') + '...</a>');
                    //body.append('<a href="' + url + '">детальніше...</a>');
                    if (imgHeight) {
                        body.height(imgHeight + 20);
                    }
//                    console.log(link);
                });
            }
        }
    };
*/

    Drupal.behaviors.mainMenuHover = {
        attach:function (context, settings) {
			$('#main-menu li').hover(
				function () {
					$(this).find('a').addClass("hover");
				},
				function () {
					$(this).find('a').removeClass("hover");
				}
			);
        }
    };

    Drupal.behaviors.searchPlaceholder = {
        attach:function (context, settings) {
			$('#edit-search-block-form--2').attr('placeholder', 'пошук');
        }
    };

    Drupal.behaviors.hideTitlesInTaxonomyTerm = {
        attach:function (context, settings) {
			if ($('.view-header .view-subcategories .view-content').length) {
				$('.view-cases-categories .view-content, .view-cases-categories .pager').hide();
				$('.view-header .view-subcategories .view-content, .view-header .view-category-description .view-content').show();
			}
        }
    };

    Drupal.behaviors.hideTitlesInFaqForm = {
        attach:function (context, settings) {
			if ($('.page-faq-page #edit-title').length) {
				jQuery('.page-faq-page #edit-title').attr('value', 'коротка назва питання');
				$('.page-faq-page .form-item-title').hide();
			}
        }
    };

})(jQuery);
