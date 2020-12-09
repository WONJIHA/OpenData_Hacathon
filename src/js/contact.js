$(document).ready(function() {

    var myurl = "http://apis.data.go.kr/1262000/CountryBasicService/getCountryBasicList?serviceKey=yrZ2sPGNKzxFIizOwLKGvhg5w76gFuzzCvdFxfrHDGNmjVeuQ0KEe%2BqY639AQVgeeOBYMs4ZgD1xap011UcUKw%3D%3D&numOfRows=197&pageNo=1";

    // $.ajax({
    //     url : myurl,
    //     // headers: { "Access-Control-Allow-Origin" : "*"},
    //     dataType : "xml",
    //     success : function (data){
    //         $(data).find("item").each(function (){
    //             var str = "<div class=\"col-sm-6 col-lg-4 all-category\" onclick=\"goDetail('"
    //             // var str = "<div class=\"col-sm-6 col-lg-4 all-category\" onclick=\"goDetail('Niue')\">\n" +
    //             //     "                                <div class=\"feature-box-1 bg-white\">\n" +
    //             //     "                                    <div class=\"media align-items-center\"><span style=\"background-image: url("
    //             var countryName = "";
    //             var countryEnName = "";
    //             var continent = "";
    //             var imgUrl = "";
    //
    //             var contact = "";
    //
    //             countryName += $(this).find("countryName").text();
    //             countryEnName += $(this).find("countryEnName").text();
    //             continent += $(this).find("continent").text();
    //             imgUrl += $(this).find("imgUrl").text();
    //             // contact += $(this).find("contact").text();
    //
    //             if(imgUrl.endsWith('png')) {
    //                 str += imgUrl;
    //             }
    //
    //             str += countryEnName;
    //             str += "')\">\n" +
    //                 "                                <div class=\"feature-box-1 bg-white\">\n" +
    //                 "                                    <div class=\"media align-items-center\"><span id=\"flag\" style=\"background-image: url(";
    //             str += imgUrl;
    //             str += ")\" class=\"avatar avatar-xl mr-3\"></span>\n" +
    //                 "                                        <div class=\"media-body overflow-hidden\">\n" +
    //                 "                                            <h5 class=\"card-text mb-0\">";
    //             str += countryName;
    //             str += "(";
    //             str += countryEnName;
    //             str += ")"
    //             str += "</h5>\n" +
    //                 "                                            <p class=\"card-text text-uppercase text-muted\">";
    //             str += continent;
    //             // str += "</p>\n" +
    //             //     "                                        </div>\n" +
    //             //     "                                    </div>\n" +
    //             //     "                                </div><a href=";
    //             // str += "javascript:goDetail()";
    //             // str += "class=\"tile-link\"></a>\n" +
    //             //     "                            </div>";
    //             str += "</p>\n" +
    //                 "                                        </div>\n" +
    //                 "\n" +
    //                 "                                    </div>\n" +
    //                 "                                    \n" +
    //                 "                                </div><a href=\"#\" class=\"tile-link\"></a>\n" +
    //                 "                            </div>";
    //             $("#insertHere").append(str);
    //         })
    //     },
    //     error : function() {
    //         alert("error");
    //     }
    // })
});

function goDetail(name) {
    // 자바스크립트로 링크 이동하기 : location.href
    // location.href = "contactDetail.html?name=" +name;
    location.href = name + ".html";


    // form에서는 페이지 이동 전에 데이터가 들어있는지 확인이 번거롭다.
    // 데이터를 확인하고 그 데이터를 가지고 링크를 이동하기 위해서는
    // 자바스크립트에서 데이터 확인을 거치고 직접 보내주는 것이 좋다
}

var $btns = $('.note-link').click(function() {
    if (this.id == 'all-category') {
        var $el = $('.' + this.id).fadeIn();
        $('#note-full-container > div').not($el).hide();
    } if (this.id == 'important') {
        var $el = $('.' + this.id).fadeIn();
        $('#note-full-container > div').not($el).hide();
    } else {
        var $el = $('.' + this.id).fadeIn();
        $('#note-full-container > div').not($el).hide();
    }
    $btns.removeClass('active');
    $(this).addClass('active');
})