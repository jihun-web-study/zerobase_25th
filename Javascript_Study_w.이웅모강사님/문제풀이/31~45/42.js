/* 홀수 vs 짝수
정수 리스트 nums
가장 첫 번째 원소를 1번 원소
홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return
*/

const solution = (nums) => {
  // do something
  // 코드리뷰: 변수를 객체 분해 구조로 변경, 변수명을 변경
  // 삼항연산자로 한 줄 쓰기의 경우 return 조심하기 // 카톡 참고
  const { oddIndexSum, evenIndexSum } = nums.reduce(
    ({ oddIndexSum, evenIndexSum }, value, index) => {
      if (index % 2 === 0) evenIndexSum += value;
      else oddIndexSum += value;
      return { oddIndexSum, evenIndexSum };
    },
    { oddIndexSum: 0, evenIndexSum: 0 }
  );

  return Math.max(oddIndexSum, evenIndexSum);
};

console.log(solution([4, 2, 6, 1, 7, 6])); // 17
console.log(solution([-1, 2, 5, 6, 3])); // 8

/* == 라이브 도중 추가 == */
const solution2 = (nums) => {
  // do something
  const eachSums = nums.reduce(
    ([s1, s2], value, index) =>
      index % 2 ? [s1 + value, s2] : [s1, s2 + value],
    [0, 0]
  );

  return Math.max(...eachSums);
};

console.log(solution2([4, 2, 6, 1, 7, 6])); // 17
console.log(solution2([-1, 2, 5, 6, 3])); // 8
