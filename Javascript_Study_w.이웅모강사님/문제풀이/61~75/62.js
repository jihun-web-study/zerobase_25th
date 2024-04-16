/* 7의 개수
정수 배열 nums가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return
*/

const solution = (nums) => {
  // 정규표현식 해석
  // [^7]: 7을 제외한 모든 숫자
  return nums.join('').replace(/[^7]/g, '').length;
};

console.log(solution([7, 77, 17])); // 4
console.log(solution([10, 29])); // 0

/* == 라이브 도중 추가 == */
