/**
 * JsStudy
 *
 * https://programmers.co.kr/learn/courses/30/lessons/81301
 * @since 2022. 05. 17.
 */

solution('one4seveneight');

function solution(s) {
    var answer = [];
    const stringToNum = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
    }
    var temp = '';
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i).match(/[a-z]/) !== null) {
            temp += s.charAt(i);
            if (stringToNum[temp] !== undefined) {
                answer.push(stringToNum[temp]);
                temp = '';
            }
        } else {
            answer.push(s.charAt(i));
            temp = '';
        }
    }
    return parseInt(answer.join(''));
}
