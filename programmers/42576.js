/**
 * JsStudy
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2022. 05. 21.
 */
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));

function solution(participant, completion) {
    var answer = [];
    let completions = new Map(completion.map(x => [x, 0]));

    participant.map(x => {
        console.log(x,completions);

        if (completions.has(x) === true) {
            completions.delete(x);
        } else {
            answer.push(x);
        }
    });

    return answer.join('');
}