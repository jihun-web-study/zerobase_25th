/* 글자 지우기
자열 str과 정수 배열 indices가 주어질 때, 
str에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return
*/

const solution = (str, indices) => {
  let answer = [...str];

  indices.forEach((element) => {
    answer[element] = "";
  });

  return answer.join("");
};

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3])); // 'programmers'

/* == 라이브 도중 추가 == */
