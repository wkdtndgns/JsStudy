/**
 * JsStudy
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2022. 05. 22.
 */
// n = 화살의 개수를 담은 자연수 n
// info = 어피치가 맞힌 과녁 점수의 개수를 10점부터 0점까지 순서대로 담은 정수 배열

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));

//console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
//. k점을 여러 발 맞혀도 k점 보다 많은 점수를 가져가는 게 아니고 k점만 가져가는 것을 유의하세요. 또한 a = b = 0 인 경우,
// 즉, 라이언과 어피치 모두 k점에 단 하나의 화살도 맞히지 못한 경우는 어느 누구도 k점을 가져가지 않습니다.

//라이언이 가장 큰 점수 차이로 우승할 수 있는 방법이 여러 가지 일 경우, 가장 낮은 점수를 더 많이 맞힌 경우를 return 해주세요.

// 라이언의 배열을 다이나믹으로 구하자
function solution(n, info) {
    var answer = [];
    var lionInfo = [0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0];
    getScore(info, lionInfo);

    return answer;
}

function getScore(arr1, arr2) {
    for (var i in arr1) {
        var score = parseInt(i);
        if (score === 10) {
            score = 10;
        } else if (score === 10) {
            score = 0;
        }


        if (arr1[i] < arr2[i]) {

        } else if (arr1[i] > arr2[i]) {

        } else if (arr1[i] === 0 && arr2[i] === 0) {

        } else {

        }
    }
}