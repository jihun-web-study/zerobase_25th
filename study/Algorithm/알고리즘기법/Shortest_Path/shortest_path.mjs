// edge 저장을 위한 생성자
// vertex : list 형태로 연결된 관계 표현
export default class ShortestPath {
  constructor() {
    this.edges = {};
  }

  // 정점 추기, 간선 비용 표시를 위해 key:value object로 저장
  addVertex(vertex) {
    this.edges[vertex] = {};
  }

  // 간선 추가
  addEdge(srcVertex, dstVertex, weight) {
    this.edges[srcVertex][dstVertex] = weight;
  }

  // 최단 거리 노드 검색
  #extractMin(queue, dist) {
    let minDistance = Number.POSITIVE_INFINITY;
    let minVertex = null;

    for (const vertex in queue) {
      if (dist[vertex] <= minDistance) {
        minDistance = dist[vertex];
        minVertex = vertex;
      }
    }

    return minVertex;
  }

  // 다익스트라 최단 경로 탐색
  dijkstra(start) {
    let queue = {};
    let dist = {};

    for (const vertex in this.edges) {
      dist[vertex] = Number.POSITIVE_INFINITY;
      queue[vertex] = this.edges[vertex];
    }
    dist[start] = 0;

    while (Object.keys(queue).length !== 0) {
      let u = this.#extractMin(queue, dist);
      delete queue[u];

      for (const neighbor in this.edges[u]) {
        let alt = dist[u] + this.edges[u][neighbor];
        if (alt < dist[neighbor]) dist[neighbor] = alt;
      }
    }

    for (const vertex in this.edges) {
      if (dist[vertex] === Number.POSITIVE_INFINITY) delete dist[vertex];
    }

    return dist;
  }

  // 플로이드-워셜 최단 경로 탐색
  floydWarshall() {
    let dist = {};

    for (const srcVertex in this.edges) {
      dist[srcVertex] = {};
      for (const dstVertex in this.edges) {
        if (srcVertex === dstVertex) dist[srcVertex][dstVertex] = 0;
        else dist[srcVertex][dstVertex] = Number.POSITIVE_INFINITY;
      }
    }

    for (const srcVertex in this.edges) {
      for (const dstVertex in this.edges[srcVertex]) {
        dist[srcVertex][dstVertex] = this.edges[srcVertex][dstVertex];
      }
    }

    for (const midVertex in this.edges) {
      for (const srcVertex in this.edges) {
        for (const dstVertex in this.edges) {
          dist[srcVertex][dstVertex] = Math.min(
            dist[srcVertex][dstVertex],
            dist[srcVertex][midVertex] + dist[midVertex][dstVertex]
          );
        }
      }
    }

    for (const srcVertex in this.edges) {
      for (const dstVertex in this.edges) {
        if (dist[srcVertex][dstVertex] === Number.POSITIVE_INFINITY) {
          delete dist[srcVertex][dstVertex];
        }
      }
    }

    return dist;
  }
}
