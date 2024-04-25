/* 중복된 문자 제거
str에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return
*/

const solution = (str) => {
  // 중복을 제거하는 Set 자료 구조를 사용
  // return Array.from(new Set([...str])).join('');

  // 위 방법도 되지만 Set 자료구조도 iterable하기 때문에 스프레드 문법 사용 가능
  // Set 안에는 iterable이 들어오니깐 굳이 string을 array로 변환할 필요 없다.
  return [...new Set(str)].join('');
};

console.log(solution('people')); // 'peol'
console.log(solution('We are the world')); // 'We arthwold'

/* == 라이브 도중 추가 == */
// 중복 값을 indexOf()로 필터링
const solution2 = (str) => {
  return [...str].filter((c, i) => str.indexOf(c) === i).join('');
};

console.log(solution2('people')); // 'peol'
console.log(solution2('We are the world')); // 'We arthwold'
