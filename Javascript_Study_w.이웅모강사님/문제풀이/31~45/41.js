/* 나누어 떨어지는 숫자 배열
nums의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환
*/

const solution = (nums, divisor) => {
  // do something
  const arr = nums.filter((v) => v % divisor === 0);
  arr.sort((a, b) => a - b);

  return arr.length !== 0 ? arr : [-1];
};

console.log(solution([5, 9, 7, 10], 5)); // [5, 10]
console.log(solution([2, 36, 1, 3], 1)); // [1, 2, 3, 36]
console.log(solution([3, 2, 6], 10)); // [-1]

/* == 라이브 도중 추가 == */
