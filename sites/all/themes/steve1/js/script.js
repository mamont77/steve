(function ($) {
    $(document).ready(function () {
        console.log('test 0', $('.view-cases-categories'));
        if ($('.view-cases-categories li.views-row').length) {
            $('.view-cases-categories li.views-row').each(function () {
                var elements = $(this),
                        isWithVideoLink = elements.find('.views-field-field-files').text().length;
                if (isWithVideoLink > 10) {
                    console.log($(this).html());

                    $(this).css({
                        background:'url("/sites/all/themes/steve1/images/iconNodeWithVideo.png") no-repeat scroll 0 0 transparent'
                    });

                }
            });
        }
    });
})(jQuery);
