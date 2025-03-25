console.log("Abcia2 :D");

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

  dijkstra(start) {
    const V = this.BaseMatrix.length; // Numero di vertici
    const dist = new Array(V).fill(Infinity); // Array delle distanze (inizializzate a Infinity)
    const parent = new Array(V).fill(-1); // Array dei genitori (precedenti nei percorsi più brevi)
    const pq = new PriorityQueue({ comparator: (a, b) => a[1] - b[1] }); // Coda di priorità
    const visited = new Array(V).fill(false); // Array per tenere traccia dei vertici visitati

    dist[start] = 0; // La distanza dall'origine è 0
    pq.queue([start, 0]); // Aggiungi il nodo di partenza nella coda di priorità con distanza 0

    while (pq.length) {
      const [u, uDist] = pq.dequeue(); // Estrai il vertice con la distanza minima

      if (visited[u]) continue; // Se il vertice è già stato visitato, salta

      visited[u] = true; // Marca il vertice come visitato

      // Esamina i vertici adiacenti di u
      for (let v = 0; v < V; v++) {
        // Se c'è un arco tra u e v e v non è stato ancora visitato
        if (this.BaseMatrix[u][v] !== 0 && !visited[v]) {
          const newDist = uDist + this.BaseMatrix[u][v]; // Calcola la nuova distanza per v

          // Se la nuova distanza è migliore, aggiorna dist[] e parent[]
          if (newDist < dist[v]) {
            dist[v] = newDist;
            parent[v] = u;
            pq.queue([v, dist[v]]); // Aggiungi v alla coda con la nuova distanza
          }
        }
      }
    }

    // Ritorna le distanze minime e i genitori per ricostruire i percorsi
    return { dist, parent };
  }
}


const Canvas1 = document.getElementById("Canvas1");
const ctx = Canvas1.getContext("2d");

const DoDijkstra = document.getElementById("DoDijkstra");

const xmlString = `<?xml version="1.0" encoding="UTF-8"?><graphml><graph id="Graph" uidGraph="10" uidEdge="10047"><node positionX="516" positionY="334.6000061035156" id="0" mainText="1" upText="" size="30" ></node><node positionX="581" positionY="293.6000061035156" id="1" mainText="2" upText="" size="30" ></node><node positionX="630" positionY="227.60000610351562" id="2" mainText="3" upText="" size="30" ></node><node positionX="613" positionY="162.60000610351562" id="3" mainText="4" upText="" size="30" ></node><node positionX="556" positionY="133.60000610351562" id="4" mainText="5" upText="" size="30" ></node><node positionX="510" positionY="165.60000610351562" id="5" mainText="6" upText="" size="30" ></node><node positionX="448" positionY="144.60000610351562" id="6" mainText="7" upText="" size="30" ></node><node positionX="400" positionY="178.60000610351562" id="7" mainText="8" upText="" size="30" ></node><node positionX="406" positionY="237.60000610351562" id="8" mainText="9" upText="" size="30" ></node><node positionX="453" positionY="297.6000061035156" id="9" mainText="10" upText="" size="30" ></node><edge source="5" target="4" directed="false" weight="5" useWeight="true" id="10036" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge><edge source="4" target="3" directed="false" weight="11" useWeight="true" id="10037" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge><edge source="3" target="2" directed="false" weight="3" useWeight="true" id="10038" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge><edge source="2" target="1" directed="false" weight="5" useWeight="true" id="10039" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge><edge source="1" target="0" directed="false" weight="7" useWeight="true" id="10040" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge><edge source="9" target="8" directed="false" weight="9" useWeight="true" id="10042" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge><edge source="8" target="7" directed="false" weight="1" useWeight="true" id="10043" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge><edge source="7" target="6" directed="false" weight="5" useWeight="true" id="10044" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge><edge source="6" target="5" directed="false" weight="10" useWeight="true" id="10045" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge><edge source="0" target="5" directed="false" weight="4" useWeight="true" id="10046" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge></graph></graphml>`;


const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");
const nodeElements = xmlDoc.querySelectorAll("node");
let grafo = new Graph(nodeElements.length, false);
let PositionsArrayX = [];
let PositionsArrayY = [];
nodeElements.forEach((nodeElement, idx) => {
  const id = parseInt(nodeElement.getAttribute("id"));
  PositionsArrayX.push(parseInt(nodeElement.getAttribute("positionX")));
  PositionsArrayY.push(parseInt(nodeElement.getAttribute("positionY")));
})
const edgeElements = xmlDoc.querySelectorAll("edge");
edgeElements.forEach((edgeElements, idx) => {
  const source = parseInt(edgeElements.getAttribute("source"));
  const target = parseInt(edgeElements.getAttribute("target"));
  const weight = parseInt(edgeElements.getAttribute("weight"));

  console.log("Connecting: ", source, target);

  grafo.AddEdge(source, target, weight);
})

const OffsetX = GetPositionOffset(PositionsArrayX);
const OffsetY = GetPositionOffset(PositionsArrayY);
console.log(OffsetX, OffsetY);

console.log("NumeroNodi:", nodeElements.length, edgeElements);

grafo.PrintMatrix();

// Draw Graphy
//Grpah1.PrintMatrix();
let drawGraph = new DrawGraph(grafo.BaseMatrix);
drawGraph.LoadNodes(Canvas1.width, Canvas1.height, PositionsArrayX, PositionsArrayY, OffsetX, OffsetY);
drawGraph.Draw(ctx);

// Drag & Drop
Canvas1.addEventListener("mousedown", (event) => drawGraph.OnMouseDown(event));
Canvas1.addEventListener("mousemove", (event) =>
  drawGraph.OnMouseMove(event, ctx)
);
Canvas1.addEventListener("mouseup", () => drawGraph.OnMouseUp());
Canvas1.addEventListener("mouseleave", () => drawGraph.OnMouseLeave());

function GetPositionOffset(array) {
  let min = Infinity;
  array.forEach((x) => {
    if (x < min) {
      min = x
    }
  });

  return min;
}

const { dist, parent } = grafo.dijkstra(0);

console.log("distances: " + dist);

console.log("previous: " + parent);

function reconstructPath(startNode, endNode, distances, previous) {

  const V = distances.length; // Numero di vertici
  const path = [];
  let currentNode = endNode;

  while (currentNode !== -1) {
    // inserisci il nodo all'inizio del percorso
    path[currentNode] = previous[currentNode];
    currentNode = previous[currentNode];
    console.log("CurrentNode", currentNode)
  }

  return path.reverse();
}

let bestPath = reconstructPath(0, 9, dist, parent).reverse();
console.log(grafo.BaseMatrix.length-1)

console.log("bestPath: " + bestPath);