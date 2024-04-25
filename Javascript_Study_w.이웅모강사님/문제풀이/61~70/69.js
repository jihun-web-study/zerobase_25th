/* 문자열 정렬하기 (2)
str을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return
*/

const solution = (str) => {
  const lowerCaseArr = [...str.toLowerCase()];

  return lowerCaseArr.toSorted((a, b) => a.localeCompare(b)).join('');
};

console.log(solution('Bcad')); // "abcd"
console.log(solution('heLLo')); // "ehllo"
console.log(solution('Python')); // "hnopty"

/* == 라이브 도중 추가 == */

function solution2(n) {
  if (n === 1) return true;

  for (let i = 2; i <= n; i++) {
    console.log(n, i);
    if (n % i === 0 && i === n) return true;
  }
}

solution2(7);
