/* 중복된 문자 제거
str에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return
*/

const solution = (str) => {
  // 중복을 제거하는 Set 자료 구조를 사용
  return Array.from(new Set([...str])).join('');
};

console.log(solution('people')); // 'peol'
console.log(solution('We are the world')); // 'We arthwold'

/* == 라이브 도중 추가 == */
