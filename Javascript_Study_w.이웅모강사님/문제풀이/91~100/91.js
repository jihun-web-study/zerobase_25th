/* 영어가 싫어요 // 91번으로 바뀜
문자열 nums가 매개변수로 주어질 때, nums를 정수로 바꿔 return
*/

const solution = (nums) => {
  const alphabetMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let answer = nums;

  for (const alphabet in alphabetMap) {
    answer = answer.replaceAll(alphabet, alphabetMap[alphabet]);
  }

  return +answer;
};

console.log(solution("onetwothreefourfivesixseveneightnine")); // 123456789
console.log(solution("onefourzerosixseven")); // 14067

/* == 라이브 도중 추가 == */
const solution2 = (nums) => {
  const dictionary = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let answer = nums;

  for (const [key, value] of Object.entries(dictionary)) {
    answer = answer.replaceAll(key, value);
  }

  return +answer;
};

console.log(solution2("onetwothreefourfivesixseveneightnine")); // 123456789
console.log(solution2("onefourzerosixseven")); // 14067
