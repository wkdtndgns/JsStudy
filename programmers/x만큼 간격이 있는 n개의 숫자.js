/**
 * JsStudy
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2022. 05. 23.
 */

function solution(x, n) {
    var answer = [];
    var int = 0;

    // n번 돌면서 x 만큼 더한거를 answer
    // for (var i = 0 ; i< n; i++){
    //     int+= x;
    //     answer.push(int);
    // }
    console.log(Array(n).fill(x).map((v, i) => {console.log((i + 1) * v)} ));

    return answer;
}