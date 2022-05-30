/**
 * JsStudy
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2022. 05. 30.
 */

console.log(solution(12));

function solution(n) {
    var answer = 0;
    for (var i = 0; i <= n; i++) {
        if (n % i === 0) answer += i;
    }
    return answer;
}