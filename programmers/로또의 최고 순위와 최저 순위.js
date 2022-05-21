/**
 * JsStudy
 * solved
 *
 * https://programmers.co.kr/learn/courses/30/lessons/77484
 * @since 2022. 05. 19.
 */
function solution(lottos,win_nums) {
    var answer = [];
    const rank = {
        6: 1, 5: 2, 4: 3, 3: 4, 2: 5
    };
    var arr1 = lottos.filter(a => win_nums.includes(a));
    win_nums.push(0);

    var arr2 = lottos.filter(a => win_nums.includes(a));
    answer = [rank[arr2.length] || 6, rank[arr1.length] || 6]

    return answer;
}

/**
 * 문제 자체는 쉬운편이었지만 가독성이나 rank를 잘만들었음 !! 보고 배우자
 * @param lottos
 * @param win_nums
 * @returns {number[]}
 */
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}