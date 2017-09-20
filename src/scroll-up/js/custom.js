$(document).ready(function() {
    setTimeout(function() {
        $('.mp_loading').hide();
    }, 3000);
    setTimeout(function() {
       $('.wp-inner').fullpage({
                loop: true, //循环加载
                change: function(e) {
                    // 移除动画属性
                    $('.page').eq(e.cur).find('.js-animate').each(function() {
                        $(this).removeClass($(this).data('animate')).hide();
                    });
                },
                afterChange: function(e) {
                    // 添加动画属性
                    $('.page').eq(e.cur).find('.js-animate')
                        .each(function() {
                            $(this).addClass($(this).data('animate')).show();
                        });
                }
            });
    }, 3000);
});
