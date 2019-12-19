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
    var reg = /^1[0-9]{10}$/;
    var name = $('#name').val();
    var province = $('#province').val();
    var city = $('#city').val();
    var area = $('#area').val();
    var text = $('#text').val();
    if (name == '') {
        common.alert({
            mask: true,
            content: '请输入姓名',
        })
    } else if (!reg.test($('#tel').val())) {
        common.alert({
            mask: true,
            content: '请输入电话号码',
        })
    } else if (province == '') {
        common.alert({
            mask: true,
            content: '请选择省份',
        })
    } else if (city == '') {
        common.alert({
            mask: true,
            content: '请选择市级',
        })
    } else if (area == '' || area == 'null') {
        common.alert({
            mask: true,
            content: '请选择区',
        })
    } else if (text == '') {
        common.alert({
            mask: true,
            content: '请输入详细地址',
        })
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
})