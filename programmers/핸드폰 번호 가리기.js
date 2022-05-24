/**
 * JsStudy
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2022. 05. 25.
 */
console.log(solution("01033334444"))

function solution(phone_number) {
    var answer = '*';
    answer = answer.repeat(phone_number.length - 5) + phone_number.substr(phone_number.length - 4, 4)
    return answer;
}