/* 배열 자르기
정수 배열 nums와 정수 num1, num2가 매개변수로 주어질 때, nums의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 
*/

const solution = (nums, num1, num2) => {
  return nums.slice(num1, num2 + 1);
};

console.log(solution([1, 2, 3, 4, 5], 1, 3)); // [2, 3, 4]
console.log(solution([1, 3, 5], 1, 2)); // [3, 5]

/* == 라이브 도중 추가 == */
