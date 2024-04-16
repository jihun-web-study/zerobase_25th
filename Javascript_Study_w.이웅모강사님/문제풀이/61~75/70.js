/* 문자열 잘라서 정렬하기
"x"를 기준으로 해당 문자열을 잘라내 배열을 만든 후 사전순으로 정렬한 배열을 return
*/

const solution = (str) => {
  return str
    .split('x')
    .filter((v) => v !== '')
    .toSorted();
};

console.log(solution('axbxcxdx')); // ["a","b","c","d"]
console.log(solution('dxccxbbbxaaaa')); // ["aaaa","bbb","cc","d"]

/* == 라이브 도중 추가 == */
