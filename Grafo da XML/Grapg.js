class Graph {
    constructor(vertices, isOriented = false) {
      this.isOriented = isOriented;
      this.VerticesNumber = vertices;
      this.BaseMatrix = Array.from({ length: vertices }, () =>
        Array(vertices).fill(0)
      );
    }
  
  
    // Aggiunta
    AddEdge(Vertex1, Vertex2, Weight = 1) {
      if (this.isValidVertex(Vertex1) && this.isValidVertex(Vertex2)) {
        this.BaseMatrix[Vertex1][Vertex2] = Weight;
        if (this.isOriented === false) this.BaseMatrix[Vertex2][Vertex1] = Weight;
      } else {
        console.error("Vertice non valido.");
      }
    }
  
  
    // Rimozione
    removeEdge(Vertex1, Vertex2) {
      if (this.isValidVertex(Vertex1) && this.isValidVertex(Vertex2)) {
        this.BaseMatrix[Vertex1][Vertex2] = 0;
        if (this.isOriented === false) this.BaseMatrix[Vertex2][Vertex1] = 0;
      } else {
        console.error("Vertice non valido.");
      }
    }
  
  
    // Stampa matrice
    PrintMatrix() {
      console.log("Matrice di adiacenza:");
      this.BaseMatrix.forEach((row) => console.log(row.join("  ")));
    }
  
    // ValidazioneVertice
    isValidVertex(Vertex) {
      return Vertex >= 0 && Vertex < this.VerticesNumber;
    }
  }
  