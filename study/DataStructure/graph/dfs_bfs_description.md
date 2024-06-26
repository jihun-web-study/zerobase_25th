# DFS & BFS

## DFS

> Tree나 Graph에서 하나의 노드를 최대한 깊게 들어가서 해를 찾는 탐색 기법

- 장점
  1. 인접 후보 노드만 기억 => 적은 기억공간 소요
  2. 노드가 깊은 단계에 있을 경우 => 빠르게 정답 산출

- 단점
  1. 불필요한 탐색
  2. 최단 경로가 아닐 수 있음

## BFS

> 인접한 노드를 우선 방문하여 넓게 움직이며 해를 찾는 탐색 기법

- 장점
  - 1최단 경로 탐색에서 구한 해가 정답임을 보장

- 단점
  - 경로가 매우 길어질 경우, 탐색범위가 증가하여 dfs보다 많은 기억 공간이 필요
