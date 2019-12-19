var state = 0;
//切换导航条
$('.nav-ation').on('click',function(){
    var index = $(this).index();
    state = $(this).attr('data-state');
    $(this).addClass('active').siblings().removeClass('active');
    $('.product-list').html('');
    
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
});

var scrollWra = new BScroll('#scrollWrap',{
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
        html += '<div class="form">';
        html += '<div class="trade">';
        html += '<div class="order">订单编号：FJ123123123123</div>';
        html += '<div class="status">';
        html += '<div class="deal hid">交易完成</div>';
        html += '<div class="cancle hid">已退单</div>';
        html += '</div>';
        html += '</div>';
        html += '<div class="shop">';
        html += '<img class="shop-img" src="../img/1_3.png">';
        html += '<div class="shop-text">';
        html += '<div class="shop-name">华为P30全网通双4G手机</div>';
        html += '<div class="shop-number">市场价值3899元</div>';
        html += '<div class="need">17896积分</div>';
        html += '</div>';
        html += '<div class="number">x1</div>';
        html += '</div>';
        
        html += '<ul class="btn">';
        html += '<li class="charge-back hid">已退单</li>';
        html += '<li class="confirm">确认收货</li>';
        html += '<li class="chargeback">我要退单</li>';
        html += '</ul>';
        html += '</div>';
    }

    $('.product-list').append(html);
    scrollWra.finishPullUp();
    scrollWra.refresh();
});

//点击确认退货
$('.confirmed').on('click',function(){
    if ($('#name').val() == '') {
        alert('请输入姓名');
    } else if ($('#tel').val() == '') {
        alert('请输入电话号码');
    } else if ($('#text').val() == '') {
        alert('请输入退单理由');
    } else {
        window.location.href = './exchange.html'
    };
})