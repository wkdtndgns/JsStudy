/**
 * JsStudy
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2022. 05. 16.
 */

var arr = [1, 2, 3];
var obj = {
    a: 1,
    b: 2,
    c: 3,
};

//for–in 루프 구문은 객체의 속성들을 순회하기 위한 구문입니다.

for (var i in arr) {
    console.log(i);
}

for (var i in obj) {
    console.log(i);
}

//for–of 루프 구문은 배열의 요소들, 즉 data를 순회하기 위한 구문입니다.
//자바 이터레이터 처럼 사용
for (var i of arr) {
    console.log(i);
}