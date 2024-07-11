import { print, swap, ascending, descending } from "./sort_util.mjs";

// 인접한 값을 비교하여 순서 변경
function bubbleSort_1(unsortedArr, compare) {
  let arr = [...unsortedArr];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (compare(arr[j], arr[j + 1])) swap(arr, j, j + 1);
    }
  }

  return arr;
}

// 정렬된 뒷부분은 스킾하는 방법
function bubbleSort_2(unsortedArr, compare) {
  let arr = [...unsortedArr];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (compare(arr[j], arr[j + 1])) swap(arr, j, j + 1);
    }
  }

  return arr;
}

// 들어온 배열에 이미 정렬된 부분이 있다면 그 부분을 스킾하는 방법
function bubbleSort_3(unsortedArr, compare) {
  let arr = [...unsortedArr];
  let swapped = false;

  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (compare(arr[j], arr[j + 1])) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return arr;
}

export { bubbleSort_1, bubbleSort_2, bubbleSort_3 };
/* 
const arr = [6, 5, 1, 3, 2, 4];
console.time(1);
print("bubble sort 1:", arr, bubbleSort_1(arr, ascending));
console.timeEnd(1);

console.time(2);
print("bubble sort 2:", arr, bubbleSort_2(arr, ascending));
console.timeEnd(2);

console.time("bubble sort");
print("ascending bubble sort:", arr, bubbleSort(arr, ascending));
print("descening bubble sort:", arr, bubbleSort(arr, descending));
console.timeEnd("bubble sort"); */
