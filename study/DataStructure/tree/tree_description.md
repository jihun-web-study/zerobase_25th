# Tree 자료 구조
## 정의
> 두 노드 사이의 하나의 간선만 연결되어 있는 최소 연결과 계층 형태의 비선형 자료 구조

방향 비순환 그래프인 DAG의 한 종류

## 용어 설명
### 구성원
- 구조
> Root_Node - Parent_Node - Child_Node

- Node
> 하나 이상의 값을 갖는 객체 단위

- Leaf_Node
> Child_Node가 없는 Node

- Sibling
>  같은 Parent_Node를 가리키는 Node들

### Tree 종류
> 이진 트리, 이진 탐색 트리, AVL 트리, Heap

### 특징 용어
- 크기
> `자신을 포함한` 모든 자손 노드의 개수

- 깊이
> 루트에서 특정 노드까지의 간선 개수

- 레벨
> 트리의 특정 깊이를 가지는 노드의 집합

- 차수
> 트리의 최대 차수

- 높이
> 루트 노드에서 가상 깊숙이 있는 노드의 길이

## 트리 순회
> 노드를 정확히 한번씩 방문하는 과정

### 순회방식
- 전위 순회: N -> L -> R
- 중위 순회: L -> N-> R
- 후위 순회: L -> R-> N
- 층별 순회: 낮은 레벨부터 순차 순회 