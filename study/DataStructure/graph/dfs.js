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

  #dfsRecursiveVisit(vertex) {
    if (this.visited[vertex]) return;

    this.visited[vertex] = true;
    console.log(`visit "${vertex}"`);

    let neighbors = this.edge[vertex];
    for (const neighbor of neighbors) {
      this.#dfsRecursiveVisit(neighbor);
    }
  }

  dfs(startVertex) {
    this.#dfsRecursiveVisit(startVertex);
  }

  #dfsLoopVisit(vertex) {
    let stack = new Stack();
    stack.push(vertex);

    while (!stack.isEmpty()) {
      let vertex = stack.pop();
      if (this.visited[vertex]) continue;

      this.visited[vertex] = true;

      console.log(`visit "${vertex}"`);

      let neighbors = this.edge[vertex];
      for (let i = neighbors.length - 1; i >= 0; i--) {
        stack.push(neighbors[i]);
      }
    }
  }

  dfsByStack(startVertex) {
    this.#dfsLoopVisit(startVertex);
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

console.log(`\n==== DFS A ====`);
//graph.dfs("A");

console.log(`\n==== DFS A By Stack ====`);
graph.dfsByStack("A");
