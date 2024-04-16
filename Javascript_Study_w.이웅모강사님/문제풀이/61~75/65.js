/* 공백으로 구분하기 1
str에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return
*/

const solution = (str) => {
  return str.split(' ');
};

console.log(solution('i love you')); // ["i", "love", "you"]
console.log(solution('programmers')); // ["programmers"]

/* == 라이브 도중 추가 == */
