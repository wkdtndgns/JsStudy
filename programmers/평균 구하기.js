/**
 * JsStudy
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2022. 05. 24.
 */

console.log(solution([1, 2, 3, 4]))

function solution(arr) {
    var answer = 0;

    arr.map(x => answer += x);
    return answer / arr.length;
}