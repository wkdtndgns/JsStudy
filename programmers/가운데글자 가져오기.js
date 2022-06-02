/**
 * JsStudy
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2022. 06. 03.
 */
console.log(solution('abcde'));

function solution(s) {
    var n = Math.floor(s.length / 2);
    return (s.length % 2 !== 0) ? s.slice(n, n + 1) : s.slice(n - 1, n + 1);
}