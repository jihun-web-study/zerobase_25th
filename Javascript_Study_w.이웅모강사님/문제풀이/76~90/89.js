/* 모의고사
1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return
*/

const solution = (answers) => {
  const eachAnswers = [0, 0, 0];

  const solveMethod = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < answers.length; j++) {
      if (answers[j] === solveMethod[i][j % solveMethod[i].length]) eachAnswers[i] += 1;
    }
  }

  const max = Math.max(...eachAnswers);

  return eachAnswers.reduce(
    (result, answerCount, index) => (answerCount === max ? [...result, index + 1] : result),
    []
  );
};

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]

/* == 라이브 도중 추가 == */
