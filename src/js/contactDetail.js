$(document).ready(function() {
    var name = getParameter("name");

    var myurl = "http://apis.data.go.kr/1262000/ContactService/getContactList?serviceKey=yrZ2sPGNKzxFIizOwLKGvhg5w76gFuzzCvdFxfrHDGNmjVeuQ0KEe%2BqY639AQVgeeOBYMs4ZgD1xap011UcUKw%3D%3D&numOfRows=197&pageNo=1&countryEnName=" + name;
    // var myurl = "http://apis.data.go.kr/1262000/ContactService/getContactList?serviceKey=yrZ2sPGNKzxFIizOwLKGvhg5w76gFuzzCvdFxfrHDGNmjVeuQ0KEe%2BqY639AQVgeeOBYMs4ZgD1xap011UcUKw%3D%3D&numOfRows=197&pageNo=1";

    // $.ajax({
    //     url : myurl,
    //     dataType : "xml",
    //     success : function (data){
    //         $(data).find("item").each(function (){
    //             // var str = "";
    //             var countryName = "";
    //             // var continent = "";
    //             // var imgUrl = "";
    //
    //             var contact = "";
    //
    //             countryName += $(this).find("countryName").text();
    //             countryName += "(";
    //             countryName += $(this).find("countryEnName").text();
    //             countryName += ")"
    //             // continent += $(this).find("continent").text();
    //             // imgUrl += $(this).find("imgUrl").text();
    //             contact += $(this).find("contact").text();
    //
    //             $("#countryName").append(countryName);
    //             $("#accordion").prepend(contact);
    //         })
    //     },
    //     error : function() {
    //         alert("error");
    //     }
    // })

    // 지도 부분
    // var target = document.getElementsByTagName("h3");
    // target.className = "bg-dark";

    // function initialize() {
    //
    //     var mapOptions = {
    //         zoom: 18, // 지도를 띄웠을 때의 줌 크기
    //         mapTypeId: google.maps.MapTypeId.ROADMAP
    //     };
    //
    //     var map = new google.maps.Map(document.getElementById("map-canvas"), // div의 id과 값이 같아야 함. "map-canvas"
    //         mapOptions);
    //
    //     var size_x = 40; // 마커로 사용할 이미지의 가로 크기
    //     var size_y = 40; // 마커로 사용할 이미지의 세로 크기
    //
    //     // 마커로 사용할 이미지 주소
    //     var image = new google.maps.MarkerImage( '대전광역시 중구 한밭도서관길 222',
    //         new google.maps.Size(size_x, size_y),
    //         '',
    //         '',
    //         new google.maps.Size(size_x, size_y));
    //
    //     // Geocoding *****************************************************
    //     var address = '대전광역시 중구 한밭도서관길 222'; // DB에서 주소 가져와서 검색하거나 왼쪽과 같이 주소를 바로 코딩.
    //     var marker = null;
    //     var geocoder = new google.maps.Geocoder();
    //     geocoder.geocode( { 'address': address}, function(results, status) {
    //         if (status == google.maps.GeocoderStatus.OK) {
    //             map.setCenter(results[0].geometry.location);
    //             marker = new google.maps.Marker({
    //                 map: map,
    //                 icon: image, // 마커로 사용할 이미지(변수)
    //                 title: '한밭도서관', // 마커에 마우스 포인트를 갖다댔을 때 뜨는 타이틀
    //                 position: results[0].geometry.location
    //             });
    //
    //             var content = "한밭도서관<br/><br/>Tel: 042-580-4114"; // 말풍선 안에 들어갈 내용
    //
    //             // 마커를 클릭했을 때의 이벤트. 말풍선 뿅~
    //             var infowindow = new google.maps.InfoWindow({ content: content});
    //             google.maps.event.addListener(marker, "click", function() {infowindow.open(map,marker);});
    //         } else {
    //             alert("Geocode was not successful for the following reason: " + status);
    //         }
    //     });
    //     // Geocoding // *****************************************************
    //
    // }
    // google.maps.event.addDomListener(window, 'load', initialize);
});

function getParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}