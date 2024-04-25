/* 5명씩
최대 5명씩 탑승가능한 놀이기구
줄을 서있는 사람들의 이름이 담긴 문자열 리스트 names
앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트를 return
*/

const solution = (names) => {
  // do something
  const copyArr = names.slice();
  const split = [];

  while (copyArr.length > 0) {
    split.push(copyArr.splice(0, 5));
  }

  const result = split.map((v) => v[0]);

  return result;
};

// prettier-ignore
console.log(solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])); // ["nami", "vex"]

/* == 라이브 도중 추가 == */

const solution2 = (names) => names.filter((_, i) => i % 5 === 0);

// prettier-ignore
console.log(solution2(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])); // ["nami", "vex"]
