$(document).ready(function () {
    var date = new Date();
    date.setTime(new Date().getTime() - (1 * 24 * 60 * 60 * 1000));
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    var updateDate = year + month + day;

    var dateToDisplay = "(기준 : " + year + "년 " + month + "월 " + day + "일)"
    $("#insertDate").append(dateToDisplay);

    var request = require('request');    
    var myurl = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19NatInfStateJson?serviceKey=yrZ2sPGNKzxFIizOwLKGvhg5w76gFuzzCvdFxfrHDGNmjVeuQ0KEe%2BqY639AQVgeeOBYMs4ZgD1xap011UcUKw%3D%3D&pageNo=1&startCreateDt=" + updateDate + "&endCreateDt=" + updateDate;
    $.ajax({
        url : myurl,
        dataType : "xml",
        success : function (data) {
            $(data).find("item").each(function (){
                var str = "<tr>\n" + "<td>"
                var nationNm = "";
                var natDeathCnt = "";
                var natDeathRate = "";
                var natDefCnt = "";

                nationNm += $(this).find("nationNm").text();
                natDefCnt += $(this).find("natDefCnt").text();
                natDeathRate += $(this).find("natDeathRate").text();
                natDeathCnt += $(this).find("natDeathCnt").text();

                str += nationNm;
                str += "</td>\n" + "<td>";
                str += natDefCnt;
                str += "</td>\n" + "<td>";
                str += natDeathCnt;
                str += "</td>\n" + "<td>";
                str += natDeathRate;

                $("#insertHere").append(str);
            })
        },
        error : function () {
            alert("error");
        }
    })


})

/* NodeJs 샘플 코드 */




// var url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19NatInfStateJson';
// var queryParams = '?' + encodeURIComponent('ServiceKey') + '=서비스키'; /* Service Key*/
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
// queryParams += '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent('20200310'); /* */
// queryParams += '&' + encodeURIComponent('endCreateDt') + '=' + encodeURIComponent('20200414'); /* */

// request({
//     url: url + queryParams,
//     method: 'GET'
// }, function (error, response, body) {
//     //console.log('Status', response.statusCode);
//     //console.log('Headers', JSON.stringify(response.headers));
//     //console.log('Reponse received', body);
// });