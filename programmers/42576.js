/**
 * JsStudy
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2022. 05. 21.
 */
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));

function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for (var i in completion) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }

    return participant.pop();
}