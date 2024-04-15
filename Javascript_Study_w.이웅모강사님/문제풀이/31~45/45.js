/* 할 일 목록
오늘 해야 할 일이 담긴 문자열 배열 todos와 각각의 일을 지금 마쳤는지를 나타내는 boolean 배열 finished
todos에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return
*/

const solution = (todos, finished) => {
  // do something
  return todos.filter((v, i) => !finished[i]);
};

console.log(
  solution(['problemsolving', 'practiceguitar', 'swim', 'studygraph'], [true, false, true, false])
); // ["practiceguitar", "studygraph"]
/* == 라이브 도중 추가 == */
// 문제에서 준 입력이 좋지 않아서 변경
const getTodosByFinished = (todos, finished) =>
  todos.filter((todo) => todo.finished === finished).map((todo) => todo.name);

const todos = [
  { name: 'problemsolving', finished: true },
  { name: 'practiceguitar', finished: false },
  { name: 'swim', finished: true },
  { name: 'studygraph', finished: false },
];

console.log(getTodosByFinished(todos, false));
