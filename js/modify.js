//点击返回首页
$('.back').on('click',function(){
    window.location.href = './management.html'
});

//点击返回首页
$('#choose').on('click',function(){
    $('.city').show();
});

//保存地址点击
$('.save').on('click',function(){
    if ($('#name').val() == '') {
        alert('请输入姓名');
    } else if ($('#tel').val() == '') {
        alert('请输入电话号码');
    } else if ($('#province').val() == '') {
        alert('请选择省份');
    } else if ($('#city').val() == '') {
        alert('请选择市级');
    } else {
        window.location.href = './management.html'
    };
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