/* 다음에 올 숫자
등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return
2 < common의 길이 < 1,000
*/

// 요소 최소 3개를 주니깐 요소간 간격을 비교하여
// 등차수열인지 등비수열인지 판별
// 등차수열: arithmetical progression
// 등비수열: geometric progression
const solution = (common) => {
  // true면 등차, false면 등비
  const isArithmeticalProgression = common[1] - common[0] === common[2] - common[1];

  if (isArithmeticalProgression) return common.at(-1) + (common[1] - common[0]);
  else return common.at(-1) * (common[1] / common[0]);
};

console.log(solution([1, 2, 3, 4]) === 5); // 5
console.log(solution([2, 4, 8]) === 16); // 16

/* == 라이브 도중 추가 == */

const solution1 = (common) => {
  // true면 등차, false면 등비
  const isArithmeticalProgression = {
    true: common.at(-1) + (common[1] - common[0]),
    false: common.at(-1) * (common[1] / common[0]),
  };

  return isArithmeticalProgression[common[1] - common[0] === common[2] - common[1]];
};

console.log(solution1([1, 2, 3, 4]) === 5); // 5
console.log(solution1([2, 4, 8]) === 16); // 16

const solution3 = (common) => {
  const [s, e] = [common[0], common.at(-1)];
  return e === Math.pow(s, common.length) ? s * e : s + e;
};

console.log(solution3([1, 3, 5, 7])); // 9
console.log(solution3([2, 4, 8]) === 16); // 16
