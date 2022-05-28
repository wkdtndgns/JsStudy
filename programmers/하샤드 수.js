/**
 * JsStudy
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2022. 05. 26.
 */

console.log(solution(10));

function solution(x) {
    var allSum = x.toString().split('').reduce((x, y) => parseInt(x) + parseInt(y));
    return !(x % allSum) ;
}