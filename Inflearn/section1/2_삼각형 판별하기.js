// 2. 삼각형 판별하기

// 나의 풀이
function solution(a, b, c){
    let arr = [a, b, c]; // 배열에 값을 담기
    arr.sort((a, b) => a - b); // 오름차순으로 정렬
    return arr[2] < arr[0]+arr[1] ? "YES" : "NO"
}

console.log(solution(6, 7, 11));