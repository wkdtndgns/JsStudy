/**
 * JsStudy
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2022. 05. 19.
 */


// D -> distance
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#']
];

console.log(solution([2,5,8,0], "right"));

function getDistance(v1, v2) {
    var v1ToD = [];
    var v2ToD = [];

    arr.forEach(function (v, i) {
        if (arr[i].includes(v1) === true) {
            v1ToD = [i, arr[i].indexOf(v1)];
        }
        if (arr[i].includes(v2) === true) {
            v2ToD = [i, arr[i].indexOf(v2)];
        }
    });
console.log(v1ToD,v2ToD)
    return Math.abs((v1ToD[0] - v2ToD[0])) + Math.abs((v1ToD[1] - v2ToD[1]));
}

function solution(numbers, hand) {
    var answers = [];
    var lefts = [1, 4, 7];
    var rights = [3, 6, 9];
    var leftFinger = '#';
    var rightFinger = '*';

    numbers.forEach(function (val) {
        if (lefts.includes(val) === true) {
            answers.push('L');
            leftFinger = val;
        } else if (rights.includes(val) === true) {
            answers.push('R');
            rightFinger = val;
        } else {
            console.log('ss', leftFinger, rightFinger);
            var leftToD = getDistance(leftFinger, val);
            var rightToD = getDistance(rightFinger, val);
            if (leftToD < rightToD) {
                answers.push('L');
                leftFinger = val;
            } else if (leftToD > rightToD) {
                answers.push('R');
                rightFinger = val;
            } else if (hand === 'right') {
                answers.push('R');
                rightFinger = val;
            } else {
                answers.push('L');
                leftFinger = val;
            }
        }
        console.log(answers, val, leftToD, rightToD)
    });

    return answers.join('');
}

//LRLLLRLLRRL