class DrawGraph {
    constructor(BaseMatrix) {
        this.BaseMatrix = BaseMatrix;
        this.Vertices = BaseMatrix.length;
        this.Nodes = [];
        this.Colors = [
            "#ff7857",
            "#ffbc57",
            "#fffc57",
            "#aeff57",
            "#57ffae",
            "#5789ff",
            "#a257ff",
            "#ff57b6",
        ];
        this.SelectedNode = null;
        this.VisitedNodes = new Array(this.Vertices).fill(false);
        this.Distance = new Array(this.Vertices).fill(Infinity);
        this.Previous = new Array(this.Vertices).fill(null);
    }

    // Inizializzazione
    LoadNodes(Width, Height, ArrayX, ArrayY, offX, offY) {
        const Radius = Math.min(Width, Height) / 3;
        const CenterX = Width / 2;
        const CenterY = Height / 2;

        for (let i = 0; i < this.Vertices; i++) {
            const angle = (2 * Math.PI * i) / this.Vertices - Math.PI / 2;
            const x = ArrayX[i] - offX + 25;
            const y = ArrayY[i] - offY + 25;
            this.Nodes.push({ x, y, radius: 20 });
        }
    }

    // Disegna
    Draw(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Archi
        let cnt = 0;
        for (let i = 0; i < this.Vertices; i++) {
            for (let j = i + 1; j < this.Vertices; j++) {
                if (this.BaseMatrix[i][j] !== 0) {
                    ctx.strokeStyle = "black";

                    ctx.beginPath();
                    ctx.moveTo(this.Nodes[i].x, this.Nodes[i].y);
                    ctx.lineTo(this.Nodes[j].x, this.Nodes[j].y);
                    ctx.stroke();

                    ctx.fillStyle = "black";
                    ctx.font = "16px Arial";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillText(
                        this.BaseMatrix[i][j],
                        (this.Nodes[i].x + this.Nodes[j].x) / 2,
                        (this.Nodes[i].y + this.Nodes[j].y) / 2
                    );
                }
            }
        }

        // Nodi
        cnt = 0;
        this.Nodes.forEach((node, index) => {
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, 2 * Math.PI);
            if (cnt >= 8) {
                cnt = 0;
            }
            ctx.fillStyle = "pink";
            ctx.fill();
            ctx.strokeStyle = "black";
            ctx.stroke();

            ctx.fillStyle = "black";
            ctx.font = "16px Arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(index, node.x, node.y);
            cnt++;
        });
    }

    // Trova Nodo
    FindNode(x, y) {
        return this.Nodes.find(
            (node) => Math.sqrt((x - node.x) ** 2 + (y - node.y) ** 2) < node.radius
        );
    }


    // Drag & Drop
    OnMouseDown(event) {
        const { offsetX, offsetY } = event;
        this.SelectedNode = this.FindNode(offsetX, offsetY);
    }

    OnMouseMove(event, ctx) {
        if (this.SelectedNode) {
            const { offsetX, offsetY } = event;
            this.SelectedNode.x = offsetX;
            this.SelectedNode.y = offsetY;
            this.Draw(ctx);
        }
    }

    OnMouseUp() {
        this.SelectedNode = null;
    }

    OnMouseLeave() {
        this.SelectedNode = null;
    }
}