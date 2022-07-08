console.log(solution(12));

function solution(n) {
    var answer = String(n).split('');
    return answer.map(x => parseInt(x)).reverse();
}
