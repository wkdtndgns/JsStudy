/**
 * JsStudy
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2022. 05. 19.
 */


console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));

function solution(numbers, hand) {
    var answers = [];
    var lefts = [1, 4, 7];
    var rights = [3, 6, 9];
    var temp = 0;

    numbers.forEach(function (val) {
        if (lefts.includes(val) === true) {
            answers.push('L');
        } else if (rights.includes(val) === true) {
            answers.push('R');
        } else {
// 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
//4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
        }
        temp = val;
    });

    return answers.join('');
}