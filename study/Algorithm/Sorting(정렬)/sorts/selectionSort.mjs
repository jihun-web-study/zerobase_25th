import { print, swap, ascending, descending } from "./sort_util.mjs";

export function selectionSort(unsortedArr, compare) {
  let arr = [...unsortedArr];

  for (let i = 0; i < arr.length; i++) {
    let k = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (compare(arr[k], arr[j])) k = j;
    }

    swap(arr, i, k);
  }

  return arr;
}

/* const arr = [6, 5, 1, 3, 2, 4];
console.time("selection sort");
print("ascending selection sort:", arr, selectionSort(arr, ascending));
print("descening selection sort:", arr, selectionSort(arr, descending));
console.timeEnd("selection sort");
 */
