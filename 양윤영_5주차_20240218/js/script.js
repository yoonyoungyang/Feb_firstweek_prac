//실습 1
document.write("<h3>실습1</h3>");
var a = 23;
var b = 12;
var c = a + b;
document.write(`최종 합계는 ${c}입니다.`, "<br />");

//실습2
document.write("<h3>실습2</h3>");
var d = 12;
var e = 5;
var f = d % e;
document.write(`두 수를 나눈 나머지 값은 ${f}입니다.`, "<br />");

//실습3
document.write("<h3>실습3</h3>");
var thisYear = 2024;
var nextYear = ++thisYear
document.write(`내년은 ${nextYear}년입니다.`, "<br />");

//실습4
document.write("<h3>실습4</h3>");
var id = 4;
(id % 2 == 0) ? document.write("당신은 여성입니다.", "<br />"):document.write("당신은 남성입니다.", "<br />");

//실습5
document.write("<h3>실습5</h3>");
var img="";
img += "<img src='./img/kakao_01.jpg'>"
img += "<img src='./img/kakao_02.jpg'>"
img += "<img src='./img/kakao_03.jpg'>"
img += "<img src='./img/kakao_04.jpg'>"
document.write(`${img}`, "<br />");




