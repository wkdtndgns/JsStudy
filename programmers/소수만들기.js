/**
 * JsStudy
 *
 * https://programmers.co.kr/learn/courses/30/lessons/12977
 * @since 2022. 05. 18.
 */

solution([1, 2, 7, 6, 4]);

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num >= 2;
}

function solution(nums) {
    var answer = 0;
    var length = nums.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            for (let k = j + 1; k < length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) answer++;
            }
        }
    }
    return answer;
}