import Queue from "./../queues/queue/queue.js";
import Stack from "../stack/stack.js";

class Graph {
  constructor() {
    this.edge = {};
    this.visited = {};
  }

  addVertex(vertex) {
    this.edge[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    // 이것만 있으면 단방향 그래프
    this.edge[vertex1].push(vertex2);
  }

  print() {
    for (const vertex in this.edge) {
      let neighbors = this.edge[vertex];
      if (neighbors.length === 0) continue;
      process.stdout.write(`${vertex} -> `);
      for (const element of neighbors) {
        process.stdout.write(`${element} `);
      }
      console.log("");
    }
  }

  #bfsLoopVisit(vertex) {
    let queue = new Queue();
    queue.enqueue(vertex);

    while (!queue.isEmpty()) {
      let vertex = queue.dequeue();
      if (this.visited[vertex]) continue;

      this.visited[vertex] = true;

      console.log(`visit "${vertex}"`);

      let neighbors = this.edge[vertex];
      for (const neighbor of neighbors) {
        queue.enqueue(neighbor);
      }
    }
  }

  bfsByQueue(startVertex) {
    this.#bfsLoopVisit(startVertex);
  }

  // 다른 정점 간 최단 경로 비용 산출
  _bfsShortestPath(vertex) {
    let queue = new Queue();
    queue.enqueue(vertex);

    let distance = {};
    let preVisit = {};
    for (const vertex in this.edge) {
      distance[vertex] = 0;
      preVisit[vertex] = null;
    }

    while (!queue.isEmpty()) {
      let vertex = queue.dequeue();

      this.visited[vertex] = true;
      console.log(`visit "${vertex}"`);

      let neighbors = this.edge[vertex];
      for (const neighbor of neighbors) {
        if (!this.visited[neighbor]) {
          distance[neighbor] = distance[vertex] + 1;
          preVisit[neighbor] = vertex;
          queue.enqueue(neighbor);
        }
      }
    }

    return { distance, preVisit };
  }

  #bfsFromToPath(preVisit, from, to) {
    let stack = new Stack();
    for (let v = to; v !== from; v = preVisit[v]) {
      stack.push(v);
    }
    stack.push(from);

    while (!stack.isEmpty()) {
      let v = stack.pop();
      process.stdout.write(`${v} -> `);
    }
    console.log("end");
  }

  // 다른 정점 간 최단 경로 탐색
  shortestPath(startVertex) {
    let result = this._bfsShortestPath(startVertex);
    console.log(result.distance, result.preVisit);

    for (const vertex in this.edge) {
      if (vertex === startVertex) continue;
      this.#bfsFromToPath(result.preVisit, startVertex, vertex);
    }
  }
}

let graph = new Graph();
// 방향 그래프: let vertices = ["A", "B", "C", "D", "E"];
let vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
vertices.forEach((v) => graph.addVertex(v));

console.log(`\n==== Add Edge ====`);
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
graph.print();

console.log(`\n==== BFS A By Queue ====`);
//graph.bfsByQueue("A");

console.log(`\n==== BFS A By Shortest Path ====`);
//console.log(graph._bfsShortestPath("A"));

console.log(`\n==== BFS A With Shortest Path ====`);
console.log(graph.shortestPath("A"));
