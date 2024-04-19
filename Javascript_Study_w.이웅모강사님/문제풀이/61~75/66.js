/* 공백으로 구분하기 2
str에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return
*/

const solution = (str) => {
  return str.split(' ').filter((v) => v !== '');
};

console.log(solution(' i    love  you')); // ["i", "love", "you"]
console.log(solution('    programmers  ')); // ["programmers"]

/* == 라이브 도중 추가 == */
const solution2 = (str) => {
  // 빈 문자열은 Falsy하기 때문에 아래 방법도 가능
  return str.split(' ').filter(Boolean);
};

console.log(solution2(' i    love  you')); // ["i", "love", "you"]
console.log(solution2('    programmers  ')); // ["programmers"]

const solution3 = (str) => {
  // split()에는 문자열 뿐만이 아니라 정규표현식도 가능하다.
  // trim() : 앞뒤 공백 제거하는 메서드
  return str.trim().split(/\s+/g);
};

console.log(solution3(' i    love  you')); // ["i", "love", "you"]
console.log(solution3('    programmers  ')); // ["programmers"]
