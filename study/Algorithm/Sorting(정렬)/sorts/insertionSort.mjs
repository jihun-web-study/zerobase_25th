import { print, swap, ascending, descending } from "./sort_util.mjs";

export function insertionSort(unsortedArr, compare) {
  let arr = [...unsortedArr];

  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    for (j; j >= 0; j--) {
      arr[j + 1] = arr[j];
      if (compare(temp, arr[j])) break;
    }
    arr[j + 1] = temp;
  }

  return arr;
}

/* const arr = [6, 5, 1, 3, 2, 4];
console.time("insertion sort");
print("ascending insertion sort:", arr, insertionSort(arr, ascending));
print("descening insertion sort:", arr, insertionSort(arr, descending));
console.timeEnd("insertion sort"); */
