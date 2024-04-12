/* 문자열 섞기
길이가 같은 두 문자열 `str1`과 `str2`가 주어집니다.
두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return
*/

const solution = (str1, str2) => {
  let result = "";

  for (const key in str1) {
    result += `${str1[key]}${str2[key]}`;
  }

  return result;
};

console.log(solution("aaaaa", "bbbbb")); // 'ababababab'

/* == 라이브 도중 추가 == */
