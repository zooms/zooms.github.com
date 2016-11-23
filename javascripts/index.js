/**
 * Created by 陈松 on 2016/11/9.
 */
//搜索入口
function  searchAirticles( searchKeys){
    console.log('查询关键字为：'+ searchKeys );
    var articles = $data$.articles;
    var htmlStr = "";
    for (item in articles){
        var regx = searchKeys;
        var re  = new RegExp(regx)
        console.log('reg:'+ re);
        if(re.test(articles[item].title)||re.test(articles[item].description)){
            htmlStr += addData( articles[item]);
        }
    }
    $('#article').html(htmlStr);
}
function tabSwitch(){//分类切换
    var $radio = $('.form-inline').find('input[name="options"]');
    $radio.on('change', function (i, t) {
        //console.log('===:' + $(this).attr('data-categories'));
        updateData($(this).attr('data-categories'));

        var $parentLabel = $(this).parent('label');
        $parentLabel.addClass('active');
        $parentLabel.siblings('label').removeClass('active');
    })
}    //分类切换
function updateData(type) {

    var htmlStr = "";
    var acount = 0;
    var articles = $data$.articles;
    for (item in articles){
        if (type == 0) {
            acount++;
            htmlStr += addData(articles[item]);
        }else{
            articles[item].categories.split('|').map(function(data){ //console.log('data:'+ data);
                if(data==type){
                    acount++;
                    htmlStr += addData(articles[item]);
                }
            })
        }
        $('.package-amount').text('文章数量：'+acount);
        $('#article').html(htmlStr);
    }
} /*updateData()*/
function addData( item){
    return  '<a href="' + item.href + '" class="package list-group-item">'
        + '<div class="row">'
        + '<div class="col-md-3">'
        + '<h4 class="package-name">' + item.title + '</h4>'
        + '</div>'
        + '<div class="col-md-9 ">'
        + '<p class="package-description">' + item.description + '</p>'
        + '</div>'
        + '</div>'
        + '</a>';
} /*addData()*/
