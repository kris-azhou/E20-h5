$(document).ready(function() {
    // $('.mp_loading').hide();
    setTimeout(function() {
        $('.mp_loading').hide();
    }, 3000);
    setTimeout(function() {
       $('.wp-inner').fullpage({
                loop: true, //循环加载
                //绑定菜单
                anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
                menu: '#menu',
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


    $('.p3-3').on("tap", function() {
        $(".a-1").show();
        $('.colse').tap(function() {
            $(this).parent().hide();
        });
    });

    $('.p3-4').on("tap", function() {
        $(".a-2").show();
        $('.colse').tap(function() {
            $(this).parent().hide();
        });
    });

});
