/* 진료 순서 정하기
환자의 응급도를 기준으로 진료 순서

*/

const solution = (emergency) => {
  const map = new Map(emergency, 0);

  return map;
};

console.log(solution([3, 76, 24])); // [3, 1, 2]
console.log(solution([1, 2, 3, 4, 5, 6, 7])); // [7, 6, 5, 4, 3, 2, 1]
console.log(solution([30, 10, 23, 6, 100])); // [2, 4, 3, 5, 1]

/* == 라이브 도중 추가 == */
