function solution(arr) {
    var i = arr.indexOf(Math.min(...arr)); 
    arr.splice(i,1);
    return (arr.length === 0) ? [-1]  : arr;
}
