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
//点击跳转兑换记录页面
$('.exchange').on('click',function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.lottery-img1').hide();
    $('.exchange-img').hide();
    $('.home-img1').hide();
    $('.mine-img1').hide();
    $('.exchange-img1').show();
    $('.lottery-img').show();
    $('.home-img').show();
    $('.mine-img').show();
    window.location.href = 'http://192.168.1.21/2019-12/anbeiIntegralStop/views/exchange.html'
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
//点击跳转兑换商品页面
$('#imdi1').on('click',function(){
    window.location.href = 'http://192.168.1.21/2019-12/anbeiIntegralStop/views/details.html'
})