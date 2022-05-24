/**
 * JsStudy
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2022. 05. 24.
 */

console.log(solution([[1, 2], [2, 3]], [[3, 4], [5, 6]]));

function getArrayPlus(arr1, arr2) {
    return arr1.map((v, i) => {
        return v.map((v1, j) => {
            return v1 + arr2[i][j];
        });
    });
}

function solution(arr1, arr2) {
    var answer = getArrayPlus(arr1, arr2);

    return answer;
}