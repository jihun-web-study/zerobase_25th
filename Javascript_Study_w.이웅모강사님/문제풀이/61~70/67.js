/* 인덱스 바꾸기
문자열 str과 정수 num1, num2가 매개변수
str에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return
*/

const solution = (str, num1, num2) => {
  const copy = str.split('');

  [copy[num1], copy[num2]] = [copy[num2], copy[num1]];

  return copy.join('');
};

console.log(solution('hello', 1, 2)); // 'hlelo'
console.log(solution('I love you', 3, 6)); // 'I l veoyou'

/* == 라이브 도중 추가 == */
