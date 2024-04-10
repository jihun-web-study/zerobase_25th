/* 홀수 vs 짝수
정수 리스트 nums
가장 첫 번째 원소를 1번 원소
홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return
*/

const solution = (nums) => {
  // do something
  const eachSums = nums.reduce(
    (obj, value, index) => {
      if (index % 2 === 0) obj.even += value;
      else obj.odd += value;
      return obj;
    },
    { odd: 0, even: 0 }
  );

  return Math.max(eachSums.odd, eachSums.even);
};

console.log(solution([4, 2, 6, 1, 7, 6])); // 17
console.log(solution([-1, 2, 5, 6, 3])); // 8

/* == 라이브 도중 추가 == */
