/**
 * Created by JetBrains PhpStorm.
 * User: Ruslan Piskarev
 * Date: 29.12.11
 * Time: 22:16
 * To change this template use File | Settings | File Templates.
 */

jQuery(document).ready(function() {

    var _blockHeight = function(blockL, blockC, blockR) {
        var blockL = jQuery(blockL);
        var blockC = jQuery(blockC);
        var blockR = jQuery(blockR);
        var heightBlocks = 0;
        blockL.height('auto');
        blockC.height('auto');
        blockR.height('auto');
        heightBlocks = Math.max(blockL.height(), blockC.height(), blockR.height());
        blockL.height(heightBlocks);
        blockC.height(heightBlocks);
        blockR.height(heightBlocks);
    }

    var searchDefaultText = 'поиск по сайту';
    var searchField = jQuery('#edit-search-block-form--2');

    _blockHeight('#block-views-articles-block .content', '#block-views-treatment-block .content', '#block-views-news-block .content');

    if (jQuery('.region-highlighted').length) {
        jQuery('.region-sidebar-second').css(
                {'marginTop': '332px'}
        );
    }

    if (searchField.val() == '') {
        searchField.val(searchDefaultText);
    }

    jQuery(searchField).focus(function() {
        if (searchField.val() == searchDefaultText) {
            searchField.val('');
        }

    });


    
});




