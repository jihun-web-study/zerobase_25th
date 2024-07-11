import { print, swap, ascending, descending } from "./sort_util.mjs";

export function mergeSort(unsortedArr, compares) {
  let arr = [...unsortedArr];

  if (arr.length === 1) return arr;

  let middleIndex = (arr.length / 2).toFixed(0);
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

/* const arr = [6, 5, 1, 3, 2, 4];
print("====start====");
console.time("merge sort");
print("ascending merge sort:", arr, mergeSort(arr, ascending));
print("descening merge sort:", arr, mergeSort(arr, descending));
console.timeEnd("merge sort"); */
