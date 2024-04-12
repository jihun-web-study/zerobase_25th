/* 문자열 곱하기
문자열 str과 정수 k가 주어질 때, str을 k번 반복한 문자열을 return
*/

const solution = (str, k) => {
  return str.repeat(k);
};

console.log(solution("string", 3)); // 'stringstringstring'
console.log(solution("love", 10)); // 'lovelovelovelovelovelovelovelovelovelove'

/* == 라이브 도중 추가 == */
