/* 한 번만 등장한 문자
str에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return
한 번만 등장하는 문자가 없을 경우 빈 문자열을 return
*/

const solution = (str) => {
  const myMap = new Map();

  [...str].forEach((element) =>
    myMap.get(element) ? myMap.set(element, myMap.get(element) + 1) : myMap.set(element, 1)
  );

  const result = [...myMap].filter(([key, value]) => value === 1).map(([v]) => v);

  if (result.length === 0) return [];

  return result.sort((a, b) => a.localeCompare(b)).join("");
};

console.log(solution("abcabcadc")); // "d"
console.log(solution("abdc")); // "abcd"
console.log(solution("hello")); // "eho"

const solution1 = (str) => {
  const result = [...str].filter((char) => str.match(new RegExp(char, "g")).length === 1);

  return result.sort().join("");
};

console.log(solution1("abcabcadc")); // "d"
console.log(solution1("abdc")); // "abcd"
console.log(solution1("hello")); // "eho"

const solution2 = (str) => {
  const result = [...str].filter((char) => str.indexOf(char) === str.lastIndexOf(char));

  return result.sort().join("");
};

console.log(solution2("abcabcadc")); // "d"
console.log(solution2("abdc")); // "abcd"
console.log(solution2("hello")); // "eho"

/* == 라이브 도중 추가 == */
