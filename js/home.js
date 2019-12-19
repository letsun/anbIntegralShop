//轮播图
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination : '.swiper-pagination',
    autoplay: 3000,//可选选项，自动滑动
    autoplayDisableOnInteraction: false,
});

//点击跳转兑换商品页面
$('#imdi1').on('click',function(){
    window.location.href = './details.html'
});

var scrollWra = new BScroll('#scrollWra',{
    scrollbar: {
        fade: true
    },
    click: true,
    pullUpLoad: {
        threshold: 0
    }
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
        html += '<div class="shop">';
        html += '<img class="shop-img" src="../img/1_3.png">';
        html += '<div class="shop-text">';
        html += '<div class="shop-name">华为P30全网通双4G手机</div>';
        html += '<div class="shop-number">已兑数量：5</div>';
        html += '<div class="need">17896积分<del>价值9999元</del></div>';
        html += '</div>';
        html += '<img class="immediately" id="imdi1" src="../img/1_4.png">';
        html += '</div>';
    }

    $('.product-list').append(html);
    scrollWra.finishPullUp();
    scrollWra.refresh();
});