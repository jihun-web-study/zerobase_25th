/* 옹알이 (1)
조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다.
문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return
*/

const solution = (babbling) => {
  const reg = /^(aya|ye|woo|ma)+$/;

  const res = babbling.reduce((count, babu) => (reg.test(babu) ? count + 1 : count), 0);

  return res;
};

console.log(solution(['aya', 'yee', 'u', 'maa', 'wyeoo'])); // 1
console.log(solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa'])); // 3

/* == 라이브 도중 추가 == */
