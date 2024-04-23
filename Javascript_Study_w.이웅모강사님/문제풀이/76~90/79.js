/* 옹알이 (1)
조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다.
문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return
*/

const solution = (babbling) => {
  const reg = /^(aya|ye|woo|ma)+$/;

  const res = babbling.reduce((count, babu) => (reg.test(babu) ? count + 1 : count), 0);

  return res;
};

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3

const solution2 = (babbling) => {
  const convert = babbling.map((babu) =>
    Number(babu.replace("aya", 0).replace("ye", 0).replace("woo", 0).replace("ma", 0))
  );

  return convert.filter((v) => v === 0).length;
};

console.log(solution2(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution2(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3

/* == 라이브 도중 추가 == */

const solution3 = (babbling) => {
  const convert = babbling.map((babu) =>
    babu.replace("aya", " ").replace("ye", " ").replace("woo", " ").replace("ma", " ")
  );

  // trim 생각을 못함
  return convert.filter((str) => str.trim() === "").length;
};

console.log(solution3(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution3(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3

const solution4 = (babbling) => {
  let count = 0;

  for (const babu of babbling) {
    if (babu.replace(/aya|ye|woo|ma/g, "") === "") count += 1;
  }

  return count;
};

console.log(solution4(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution4(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3
