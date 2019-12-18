//点击返回首页
$('.back').on('click',function(){
    window.location.href = 'http://192.168.1.21/2019-12/anbeiIntegralStop/views/management.html'
});

//点击返回首页
$('#choose').on('click',function(){
    $('.city').show();
});

//点击关闭省市区弹出框
$('.close').on('click',function(){
    $('.city').hide();
})

//选择省市区
var select = new citySelect({
    province: $("#province"),
    city: $("#city"),
    area: $("#area"),
    cityCon: $(".cityBox"),
    areaCon: $(".areaBox"),
    def: ["广东", "深圳", "宝安区"]
})