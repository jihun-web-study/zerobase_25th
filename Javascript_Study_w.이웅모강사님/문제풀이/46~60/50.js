/* n보다 커질 때까지 더하기
정수 배열 nums와 정수 n이 매개변수
nums의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 
*/

const solution = (nums, n) => {
  let result = 0;

  for (const num of nums) {
    if (result > n) break;
    result += num;
  }

  return result;
};

console.log(solution([34, 5, 71, 29, 100, 34], 123)); // 139
console.log(solution([58, 44, 27, 10, 100], 139)); // 239

/* == 라이브 도중 추가 == */

const solution2 = (nums, n) => nums.reduce((sum, num) => (sum > n ? sum : sum + num), 0);

console.log(solution2([34, 5, 71, 29, 100, 34], 123)); // 139
console.log(solution2([58, 44, 27, 10, 100], 139)); // 239
