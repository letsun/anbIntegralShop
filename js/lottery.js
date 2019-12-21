
var scrollWra = new BScroll('#scrollWra',{
    scrollbar: {
        fade: true
    },
    click: true,
    pullUpLoad: {
        threshold: 0
    }
});

//点击中奖详情查看
$('.win-details').on('click',function(){
    $('.winning').show();
    scrollWra.refresh();
});

//点击关闭中奖详情
$('.close').on('click',function(){
    $('.winning').hide();
});

//点击中奖记录查看
$('.win-record').on('click',function(){
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
    var delay = 400;
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
        if (count >= 24) {
            delay += 120;
        }
        clearInterval(timer);
        console.log(count);
        timer = setInterval(lottery, delay);
        if (count >= 24 && count % 8 == 2) {
            clearInterval(timer);
            setTimeout(function () {
                $('.gain').fadeIn(function () {
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



var hasNext = true;     // 是否有下一页;
var page = 1;    // 从第一页开始加载;

// 监听页面上滑加载;
scrollWra.on('pullingUp', function () {
    if (!hasNext) {
        $('#loading').text('已经没有更多数据了');
        return;
    }

    page++;

    if (page == 6) {
        hasNext = false;
    }

    var html = '';

    for (var i = 0; i < 10; i++) {
        html += '<div class="record">';
        html += '<div class="record-time">刚刚</div>';
        html += '<div class="record-name">我是微信昵称</div>';
        html += '<div class="record-text">抽中了10积分</div>';
        html += '</div>';
    }

    $('.product-list').append(html);
    scrollWra.finishPullUp();
    scrollWra.refresh();
});

//轮播图
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    direction : 'vertical',
    autoplay: 3000,//可选选项，自动滑动
    autoplayDisableOnInteraction: false,
    noSwiping : true,
    noSwipingClass : 'stop-swiping',
});

//点击领取
$('.get').on('click',function(){
    $('.gain').hide();
    $('.write').show();
})

//点击填写信息提交按钮
$('.submit').on('click',function(){
    var reg = /^1[0-9]{10}$/;
    var name = $('#name').val();
    var tel = $('#tel').val()
    var area = $('#area').val(); 
    if ($.trim(name) == '') {
        common.alert({
            mask: true,
            content: '请输入姓名',
        })
    } else if (!reg.test($.trim(tel))) {
        common.alert({
            mask: true,
            content: '请输入电话号码',
        })
    } else if (area && $.trim(area) == '') {
        common.alert({
            mask: true,
            content: '请输入地址',
        })
    } else {
        $('.write').hide()
    };
})