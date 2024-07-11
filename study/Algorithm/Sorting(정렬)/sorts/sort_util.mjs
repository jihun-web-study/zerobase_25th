export const print = console.log;

export function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

export function ascending(x, y) {
  return x > y;
}

export function descending(x, y) {
  return x < y;
}
