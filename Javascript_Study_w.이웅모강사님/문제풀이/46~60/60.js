/* 문자열 뒤집기
문자열 str과 정수 s, e가 매개변수로 주어질 때, 
str에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return
*/

const solution = (str, s, e) => {
  const front = str.slice(0, s);
  const back = str.slice(e + 1);
  const reverseMiddle = [...str.slice(s, e + 1)].reverse().join('');

  return front + reverseMiddle + back;
};

console.log(solution('Progra21Sremm3', 6, 12) === 'ProgrammerS123'); // 'ProgrammerS123'
console.log(solution('Stanley1yelnatS', 4, 10) === 'Stanley1yelnatS'); // 'Stanley1yelnatS'

/* == 라이브 도중 추가 == */
// toReversed()는 2023에 나온 최신문법임
// 호환성 주의하기
