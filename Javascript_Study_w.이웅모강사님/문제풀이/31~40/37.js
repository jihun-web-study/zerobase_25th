/* 배열 만들기 3
v정수 배열 arr와 2개의 구간이 담긴 배열 intervals
intervals는 항상 [[a1, b1], [a2, b2]]의 꼴, 닫힌 구간은 양 끝값과 그 사이의 값을 모두 포함하는 구간
배열 arr의 첫 번째 구간에 해당하는 배열과 두 번째 구간에 해당하는 배열을 앞뒤로 붙여 새로운 배열을 만들어 return
*/

const solution = (arr, intervals) => {
  const arr1 = arr.slice(intervals[0][0], intervals[0][1] + 1);
  const arr2 = arr.slice(intervals[1][0], intervals[1][1] + 1);

  return arr1.concat(arr2);
};

// prettier-ignore
console.log(solution([1, 2, 3, 4, 5], [[1, 3], [0, 4]]));
// [2, 3, 4, 1, 2, 3, 4, 5]

/* == 라이브 도중 추가 == */
