/**
 * JsStudy
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2022. 05. 31.
 */
solution(5, 3);

function solution(a, b) {
    var answer = 0;
    var min = Math.min(a, b);
    var max = Math.max(a, b);
    for (min; min <= max; min++) {
        answer += min;
    }
    return answer;
}