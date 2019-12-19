
//点击中奖详情查看
$('.win-details').on('click',function(){
    $('.winning').show();
});
//点击关闭中奖纪录
$('.close').on('click',function(){
    $('.winning').hide();
});

$(function() {
    var timer = null;
    var count = 0;
    var index = 0;
    var delay = 500;
    var isClick = true;
    // 点击抽奖
    $('.expend').on('click',function () {
        if (!isClick) {
            common.alert({
                mask: true,
                content: '抽奖尚未结束，请稍候',
            });
            return false;
        }
        isClick = false;
        timer = setInterval(lottery, delay);
    });

    // 九宫格方法
    function lottery() {
        index = count % 8;
        $('li').eq(index).addClass('active').siblings().removeClass('active');
        count++;
        delay -= 140;
        if (delay <= 80) {
            delay = 80;
        }
        if (count >= 32) {
            delay += 100;
        }
        clearInterval(timer);
        console.log(count);
        timer = setInterval(lottery, delay);
        if (count >= 32 && count % 8 == 2) {
            clearInterval(timer);
            setTimeout(function () {
                $('.result-win').fadeIn(function () {
                    isClick = true;
                    count = 0;
                    index = 0;
                    delay = 500;
                    $('.award-item').removeClass('active');
                });
            },1000);
        }
    };
});