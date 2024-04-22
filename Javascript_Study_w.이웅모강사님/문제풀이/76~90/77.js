/* 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
str의 부분 문자열중 part로 끝나는 가장 긴 부분 문자열을 찾아서 return
*/

const solution = (str, part) => {
  const index = str.lastIndexOf(part);
  return str.slice(0, index + part.length);
};

console.log(solution('AbCdEFG', 'dE')); // 'AbCdE'
console.log(solution('AAAAaaaa', 'a')); // 'AAAAaaaa'

/* == 라이브 도중 추가 == */
