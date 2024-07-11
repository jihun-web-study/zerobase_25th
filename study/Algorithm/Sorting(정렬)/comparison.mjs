import { print, swap, ascending, descending } from "./sorts/sort_util.mjs";

// 각 정렬들 가져오기 //
function bubbleSort(arr, compare) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (compare(arr[j], arr[j + 1])) swap(arr, j, j + 1);
    }
  }
}

function selectionSort(arr, compare) {
  for (let i = 0; i < arr.length; i++) {
    let k = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (compare(arr[k], arr[j])) k = j;
    }

    swap(arr, i, k);
  }
}

function insertionSort(arr, compare) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    for (j; j >= 0; j--) {
      arr[j + 1] = arr[j];
      if (compare(temp, arr[j])) break;
    }
    arr[j + 1] = temp;
  }
}

function mergeSort(arr, compare) {
  if (arr.length === 1) return arr;

  let middleIndex = (arr.length / 2).toFixed(0); // 배열을 절반으로 자름
  let leftArr = mergeSort(arr.slice(0, middleIndex), compare, "left");
  let rightArr = mergeSort(arr.slice(middleIndex), compare, "right");

  let [i, j, k] = [0, 0, 0];

  while (i < leftArr.length && j < rightArr.length) {
    arr[k++] = compare(leftArr[i], rightArr[j]) ? rightArr[j++] : leftArr[i++];
  }
  while (i < leftArr.length) arr[k++] = leftArr[i++];
  while (j < rightArr.length) arr[k++] = rightArr[j++];

  return arr;
}

function quickSort(arr, compare, s = 0, e = arr.length - 1) {
  let start = s;
  let pivot = arr[e];

  for (let i = s; i <= e; i++) {
    if (compare(pivot, arr[i])) {
      swap(arr, start, i);
      start++;
    }
  }
  swap(arr, start, e);

  if (start - 1 > s) quickSort(arr, compare, s, start - 1);
  if (start + 1 < e) quickSort(arr, compare, start + 1, e);
}

// 비교 //

function benchmark(arr, callback, order) {
  let start = Date.now();
  //const result = callback(arr, order);
  callback(arr, order);

  return Date.now() - start;
}

let init_arr = [];
let max = 30000;
for (let i = 0; i < max; i++) {
  init_arr.push(Math.round(Math.random() * max));
}

let array;

const sorts = [bubbleSort, selectionSort, insertionSort, mergeSort, quickSort];
const compares = [ascending, descending];

for (const sort of sorts) {
  for (const compare of compares) {
    array = [...init_arr];
    print(`${sort.name}-${compare.name}: ${benchmark(array, sort, compare)}ms`);
  }
}
