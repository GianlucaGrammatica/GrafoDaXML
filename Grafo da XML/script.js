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
  }
  

const Canvas1 = document.getElementById("Canvas1");
const ctx = Canvas1.getContext("2d");

const xmlString = `<?xml version="1.0" encoding="UTF-8"?><graphml><graph id="Graph" uidGraph="10" uidEdge="10014"><node positionX="516" positionY="334.6000061035156" id="0" mainText="1" upText="" size="30" ></node><node positionX="581" positionY="293.6000061035156" id="1" mainText="2" upText="" size="30" ></node><node positionX="630" positionY="227.60000610351562" id="2" mainText="3" upText="" size="30" ></node><node positionX="613" positionY="162.60000610351562" id="3" mainText="4" upText="" size="30" ></node><node positionX="556" positionY="133.60000610351562" id="4" mainText="5" upText="" size="30" ></node><node positionX="510" positionY="165.60000610351562" id="5" mainText="6" upText="" size="30" ></node><node positionX="448" positionY="144.60000610351562" id="6" mainText="7" upText="" size="30" ></node><node positionX="400" positionY="178.60000610351562" id="7" mainText="8" upText="" size="30" ></node><node positionX="406" positionY="237.60000610351562" id="8" mainText="9" upText="" size="30" ></node><node positionX="453" positionY="297.6000061035156" id="9" mainText="10" upText="" size="30" ></node><edge source="0" target="1" directed="false" weight="1" useWeight="false" id="10000" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge><edge source="1" target="2" directed="false" weight="1" useWeight="false" id="10001" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge><edge source="2" target="3" directed="false" weight="1" useWeight="false" id="10002" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge><edge source="3" target="4" directed="false" weight="1" useWeight="false" id="10003" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge><edge source="4" target="5" directed="false" weight="1" useWeight="false" id="10004" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge><edge source="6" target="5" directed="false" weight="1" useWeight="false" id="10005" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge><edge source="6" target="7" directed="false" weight="1" useWeight="false" id="10006" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge><edge source="7" target="8" directed="false" weight="1" useWeight="false" id="10007" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge><edge source="8" target="9" directed="false" weight="1" useWeight="false" id="10008" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge><edge source="9" target="0" directed="false" weight="1" useWeight="false" id="10009" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge><edge source="5" target="0" directed="false" weight="1" useWeight="false" id="10013" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge></graph></graphml>`;



const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");
const nodeElements = xmlDoc.querySelectorAll("node");
let grafo = new Graph(nodeElements.length, false);
nodeElements.forEach((nodeElement, idx) => {
    const id = parseInt(nodeElement.getAttribute("id"));
})
const edgeElements = xmlDoc.querySelectorAll("edge");
edgeElements.forEach((edgeElements, idx) => {
    const source = parseInt(edgeElements.getAttribute("source"));
    const target = parseInt(edgeElements.getAttribute("target"));

    console.log("Connecting: ", source, target);

    grafo.AddEdge(source, target, 1);
})

console.log("NumeroNodi:", nodeElements.length, edgeElements);

grafo.PrintMatrix();

