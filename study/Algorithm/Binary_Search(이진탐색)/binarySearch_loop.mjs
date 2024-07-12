export function binarySearchByLoop(arr, n) {
  let lowIndex = 0;
  let midIndex = 0;
  let highIndex = arr.length - 1;

  while (lowIndex <= highIndex) {
    // 다음 탐색 기준점을 선정
    midIndex = Math.floor((lowIndex + highIndex) / 2);

    //console.table({ lowIndex, midIndex, highIndex });

    if (arr[midIndex] > n) highIndex = midIndex - 1;
    else if (arr[midIndex] < n) lowIndex = midIndex + 1;
    else return midIndex;
  }

  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nums = [0, 3, 6, 10];

nums.forEach((n) => console.log(binarySearchByLoop(arr, n)));
