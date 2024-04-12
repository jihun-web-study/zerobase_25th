/* 문자열 겹쳐쓰기
문자열 str, overwriteStr과 정수 s
문자열 str의 인덱스 s부터 overwriteStr의 길이만큼을 
문자열 overwriteStr으로 바꾼 문자열을 return
*/

const solution = (str, overwriteStr, s) => {
  const overLength = overwriteStr.length;

  const front = str.slice(0, s);
  const back = str.slice(s + overLength);

  return front + overwriteStr + back;
};

console.log(solution("He11oWor1d", "lloWorl", 2)); // 'HelloWorld'
console.log(solution("Program29b8UYP", "merS123", 7)); // 'ProgrammerS123'

/* == 라이브 도중 추가 == */
