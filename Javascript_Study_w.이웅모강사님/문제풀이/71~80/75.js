/* 부분 문자열 이어 붙여 문자열 만들기
길이가 같은 문자열 배열 strings와 이차원 정수 배열 parts가 매개변수
parts[i]는 [s, e] 형태로, strings[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열
각 strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return
*/

const solution = (strings, parts) => {
  return parts.reduce((concat, [s, e], idx) => concat + strings[idx].slice(s, e + 1), '');
};

// prettier-ignore
console.log(solution(
  ['progressive', 'hamburger', 'hammer', 'ahocorasick'],
	[[0, 4], [1, 2], [3, 5], [7, 7]]
)); // "programmers"

/* == 라이브 도중 추가 == */
