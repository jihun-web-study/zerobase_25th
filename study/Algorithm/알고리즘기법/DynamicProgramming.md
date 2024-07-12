# 동적 계획법 (DynamicProgramming)

> Memoization으로 중복 연산을 방지하여 작은 부분 문제로 큰 문제를 해결하는 기법

## 특징

- 부분 문제는 중복되며 상위 문제 해결 시 재사용됨
- Memoization: 이전의 결과값을 메모리에 저장
- 점화식을 기반으로 해결함

## 구현 방식

- Top-Down: 재귀를 통해 큰 문제를 작은 문제로 나누어 해결
- Bottom-Up: 반복문을 통해 작은 문제부터 차레대로 해결

## 예제
```javascript
// DP 피보나치 수열
function dpFibonacci(target) {
  let fibos = [0, 1];

  if (target < 2) return fibos[target];

  for (let i = 2; i <= target; i++) {
    fibos[i] = fibos[i - 1] + fibos[i - 2];
  }

  return fibos.at(-1);
}
```