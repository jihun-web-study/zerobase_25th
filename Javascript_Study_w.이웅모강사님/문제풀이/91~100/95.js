/* 한 번만 등장한 문자
str에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return
한 번만 등장하는 문자가 없을 경우 빈 문자열을 return
*/

const solution = (str) => {
  const myMap = new Map();

  // O(n)
  [...str].forEach((element) =>
    myMap.get(element) ? myMap.set(element, myMap.get(element) + 1) : myMap.set(element, 1)
  );

  // O(n) + O(n)
  const result = [...myMap].filter(([key, value]) => value === 1).map(([v]) => v);

  if (result.length === 0) return [];

  // // O(nlogn)
  return result.sort((a, b) => a.localeCompare(b)).join("");
};

console.log(solution("abcabcadc")); // "d"
console.log(solution("abdc")); // "abcd"
console.log(solution("hello")); // "eho"

const solution1 = (str) => {
  // O(n^2)
  const result = [...str].filter((char) => str.match(new RegExp(char, "g")).length === 1);

  // O(nlogn)
  return result.sort().join("");
};

console.log(solution1("abcabcadc")); // "d"
console.log(solution1("abdc")); // "abcd"
console.log(solution1("hello")); // "eho"

const solution2 = (str) => {
  // O(n^2)
  const result = [...str].filter((char) => str.indexOf(char) === str.lastIndexOf(char));

  return result.sort().join("");
};

console.log(solution2("abcabcadc")); // "d"
console.log(solution2("abdc")); // "abcd"
console.log(solution2("hello")); // "eho"

/* == 라이브 도중 추가 == */
console.log("========");

const solution3 = (str) => {
  // O(n)
  const hash = [...str].reduce((acc, c) => {
    acc[c] = (acc[c] || 0) + 1;
    return acc;
  }, {});

  // O(n) + O(n)
  const result = Object.entries(hash)
    .filter(([key, value]) => value === 1)
    .map(([key, value]) => key);

  if (result.length === 0) return [];

  // // O(nlogn)
  return result.sort((a, b) => a.localeCompare(b)).join("");
};

console.log(solution3("abcabcadc")); // "d"
console.log(solution3("abdc")); // "abcd"
console.log(solution3("hello")); // "eho"
