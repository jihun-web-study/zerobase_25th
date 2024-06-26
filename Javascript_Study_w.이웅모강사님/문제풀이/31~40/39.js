/* 배열 만들기 5
문자열 배열 intStrs와 정수 k, s, l
intStrs의 원소는 숫자
배열 intStrs의 각 원소마다 s번 인덱스에서 시작하는 길이 l짜리 부분 문자열을 잘라내 정수로 변환
변환한 정수값이 k보다 큰 값들을 담은 배열을 return
*/

const solution = (intStrs, k, s, l) => {
  // do something
  const arr = intStrs.map((v) => Number(v.slice(s, s + l)));

  return arr.filter((v) => v > k);
};

console.log(
  solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)
);
// [56789, 99999]

/* == 라이브 도중 추가 == */
