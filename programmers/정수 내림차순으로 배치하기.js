/**
 * JsStudy
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2022. 06. 03.
 */

console.log(typeof solution(118372))

function solution(n) {
    return n.toString().split('').map(x => parseInt(x)).sort().reverse().join('');
}