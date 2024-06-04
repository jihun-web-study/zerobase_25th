/* # 1 
숫자로 이루어진 문자열 s
가장 많이 등장하는 숫자를 반환
여러 개면 그중 작은 수를 반환
*/
function solution1(s) {
  let countsObj = {};

  for (const char of s) {
    countsObj[char] = (countsObj[char] || 0) + 1;
  }

  const max = Math.max(...Object.values(countsObj));

  const result = [];

  for (const [key, count] of Object.entries(countsObj)) {
    if (count === max) result.push(key);
  }

  return Math.min(...result);
}

console.log(solution1("174771177") === 7);
console.log(solution1("552342502") === 2);

/* # 2
이진수로 표현된 문자열 s
숫자가 짝수이면 /2
숫자가 홀수이면 -1
0이 될때까지 반복 & 연산 횟수 구하기
*/
function solution2(s) {
  let dec = parseInt(s, 2);

  let count = 0;

  while (dec > 0) {
    if (dec % 2 === 0) dec = dec / 2;
    else dec = dec - 1;

    count += 1;
  }

  return count;
}

console.log(solution2("1101") === 6);

/* # 3
하나의 단어를 나타내는 문자열 S
단어를 거꾸로 뒤집어도 똑같은 것을 회문
주어진 단어가 회문이면 1 아니면 0 출력
*/
function solution3(S) {
  const reverse = [...S].reverse().join("");

  return +(S === reverse);
}

console.log(solution3("MAMA") === 0);

/* # 4
반복없이 가장 긴 알파벳의 길이를 구하여라
*/
function solution4(s) {
  // 테스트 케이스를 봐야 알듯 반례 못차는 중
  // 반복문이 끝나고 마지막 실행이 최대 길이일때 안되는듯...?
  /* const sliceAlphabet = [];

  let temp = "";

  for (const char of s) {
    if (temp.includes(char)) {
      sliceAlphabet.push(temp);
      temp = "";
    }
    temp += char;
  }
  sliceAlphabet.push(temp);

  const lengths = sliceAlphabet.map((v) => v.length);

  return Math.max(...lengths); */

  let maxLength = 0;
  let subStr = "";

  for (const char of s) {
    const charIndex = subStr.indexOf(char);
    subStr = subStr.slice(charIndex + 1) + char;
    maxLength = Math.max(maxLength, subStr.length);
  }

  return maxLength;
}

console.log(solution4("abssccbsbsv") === 3);
console.log(solution4("abcabcabc") === 3);
console.log(solution4("aaaaa") === 1);
console.log(solution4("sttrg") === 3);
console.log(solution4("pwwkew") === 3);

/* # 5
문자열 s가 모든 알파벳이 사용된 pangram 인지 여부 반환
s는 소문자 알파벳과 공백으로만 구성
*/
function solution5(s) {
  const set = new Set([...s.replaceAll(" ", "")]);

  return +set.size === 26;
}

console.log(solution5("abcdefghij klmnopqrstuvwxyz") === true);
