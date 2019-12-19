//点击返回首页
$('.back').on('click',function(){
    window.location.href = './home.html'
});
// 积分是否足够兑换
var flag = true;
//  点击立即兑换
$('.immediately').on('click',function () { 
    if (flag) {
        window.location.href = './successful.html'
    } else {
        $('.box').show();
    }
});
//点击去赚积分
$('.box-foot').on('click',function(){
    window.location.href = './earnCredits.html'
});