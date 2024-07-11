import { print, swap, ascending, descending } from "./sort_util.mjs";

// 여기서 구현하는 방식은 glibc의 qsort 방식
// 3개의 변수 start, target, pivot를 잡고 pivot을 기준으로 비교하여 start와 target을 swap
export function quickSort(arr, compare, s = 0, e = arr.length - 1) {
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

/* let arr = [6, 5, 1, 3, 2, 4];

print("====start====");
console.time("quick sort");
print("ascending quick sort:", arr, quickSort(arr, ascending));
console.timeEnd("quick sort");

arr = [6, 5, 1, 3, 2, 4];

console.time("quick sort");
print("descening quick sort:", arr, quickSort(arr, descending));
console.timeEnd("quick sort"); */
