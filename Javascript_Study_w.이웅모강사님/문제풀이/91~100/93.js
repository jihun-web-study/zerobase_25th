/* 문자열 묶기
문자열 배열strings의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return
*/

const solution = (strings) => {
  const counter = new Map();

  for (const str of strings) {
    counter.set(str.length, (counter.get(str.length) || 0) + 1);
  }

  return Math.max(...counter.values());
};

console.log(solution(["a", "bc", "d", "efg", "hi"])); // 2

/* == 라이브 도중 추가 == */
