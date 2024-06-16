class Graph {
  constructor() {
    this.edge = {};
  }

  addVertex(vertex) {
    this.edge[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    // 이것만 있으면 방향 그래프
    this.edge[vertex1].push(vertex2);
    // 이것도 있으면 무방향 그래프
    this.edge[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    // 이것만 있으면 방향 그래프
    if (this.edge[vertex1]) {
      let idx = this.edge[vertex1].indexOf(vertex2);

      if (idx != -1) this.edge[vertex1].splice(idx, 1);

      if (this.edge[vertex1].length === 0) delete this.edge[vertex1];
    }

    // 이것도 있으면 무방향 그래프
    if (this.edge[vertex2]) {
      let idx = this.edge[vertex2].indexOf(vertex1);

      if (idx != -1) this.edge[vertex2].splice(idx, 1);

      if (this.edge[vertex2].length === 0) delete this.edge[vertex2];
    }
  }

  removeVertex(vertex) {
    if (this.edge[vertex] === undefined) return null;

    let connectedVertex = [...this.edge[vertex]];

    for (const cv of connectedVertex) {
      this.removeEdge(vertex, cv);
    }
  }

  sizeVertex() {
    return Object.keys(this.edge).length;
  }

  sizeEdge(vertex) {
    //return this.edge[vertex] ? Object.keys(this.edge[vertex]).length : 0;
    return this.edge[vertex] ? this.edge[vertex].length : 0;
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
console.log(graph.edge);

console.log(`\n==== Remove Edge ====`);
graph.removeEdge("B", "F");
console.log(graph.edge);
graph.removeEdge("B", "E");
console.log(graph.edge);

console.log(`\n==== Remove Vertex ====`);
graph.removeVertex("B");
console.log(graph.edge);
graph.removeVertex("D");
console.log(graph.edge);

console.log(`\n==== Size Vertex & Edge ====`);
console.log(graph.sizeVertex());

console.log(`\n==== Print ====`);
graph.print();
Object.entries(graph.edge).forEach(([vertex, edges]) => console.log(`${vertex}: ${edges}`));
