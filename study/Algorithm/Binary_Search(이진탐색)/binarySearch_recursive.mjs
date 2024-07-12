export function binarySearchByRecursive(arr, n, lowIndex = 0, highIndex = arr.length - 1) {
  if (highIndex < lowIndex) return -1;

  // 다음 탐색 기준점을 선정
  let midIndex = Math.floor((lowIndex + highIndex) / 2);

  //console.table({ lowIndex, midIndex, highIndex });

  if (arr[midIndex] > n) return binarySearchByRecursive(arr, n, 0, midIndex - 1);
  else if (arr[midIndex] < n) return binarySearchByRecursive(arr, n, midIndex + 1, highIndex);
  else return midIndex;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nums = [0, 3, 6, 10];

nums.forEach((n) => console.log(binarySearchByRecursive(arr, n)));
