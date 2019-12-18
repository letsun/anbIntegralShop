//点击跳转首页页面
$('.home').on('click',function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.lottery-img1').hide();
    $('.exchange-img1').hide();
    $('.home-img').hide();
    $('.mine-img1').hide();
    $('.exchange-img').show();
    $('.lottery-img').show();
    $('.home-img1').show();
    $('.mine-img').show();
    window.location.href = 'http://192.168.1.21/2019-12/anbeiIntegralStop/views/home.html'
});
//点击跳转抽奖页面
$('.lottery').on('click',function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.home-img1').hide();
    $('.exchange-img1').hide();
    $('.mine-img1').hide();
    $('.lottery-img').hide();
    $('.lottery-img1').show();
    $('.home-img').show();
    $('.mine-img').show();
    $('.exchange-img').show();
    window.location.href = 'http://192.168.1.21/2019-12/anbeiIntegralStop/views/lottery.html'
});
//点击跳转我的页面
$('.mine').on('click',function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.exchange-img1').hide();
    $('.home-img1').hide();
    $('.lottery-img1').hide();
    $('.mine-img').hide();
    $('.exchange-img').show();
    $('.mine-img1').show();
    $('.lottery-img').show();
    $('.home-img').show();
    window.location.href = 'http://192.168.1.21/2019-12/anbeiIntegralStop/views/mine.html'
});

//切换导航条
$('.nav-ation').on('click',function(){
    var index = $(this).index();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.form').hide();
    if (index == 0) {
        $('.form').show();
    } else {
        $('.form').eq(index-1).show();
    }
})
//点击我要退单弹出退货框
$('.chargeback').on('click',function(){
    $('.box').show();
})
//点击否返回
$('.no').on('click',function(){
    $('.box').hide();
})
//点击是弹出退单信息
$('.yes').on('click',function(){
    $('.bg').show();
})
//点击是弹出退单信息
$('.close').on('click',function(){
    $('.bg').hide();
    $('.box').hide();
})