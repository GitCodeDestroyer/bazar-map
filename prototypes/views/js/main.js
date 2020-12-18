$(document).ready(function () {
    $('.search').css({'transition': 'all .3s'});
    $('.search-btn').click(function () {
        $('#search').focus();
    });
    $('.search input').on("focus", function () {
        $('.overlay').css({'display':'block'});
        $('.search').css({
            'transition': 'all .3s',
            'box-shadow': '0 0 20px rgba(100, 100, 100, .15)',
            'width': '100%',
            'margin': '0'
        });
        $('.search-btn').css({'transition':'all .3s', 'right': 'calc(97% - 35px)'});
    });
    $('.overlay').click(function () {
        $('.overlay').css({'display':'none'});
        $('.search').css({
            'transition': 'all .3s',
            'box-shadow': 'none',
            'width': '0',
            'margin-left':  'calc(100% - 35px)'
        });
        $('.search-btn').css({'transition':'all .3s', 'right': '3%'});
     });
});