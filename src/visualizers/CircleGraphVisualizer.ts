import {IGraphVisualizer} from "../types/IGraphVisualizer";
import {IGraph, IVertex, IEdge, Vertex, Edge, Graph} from "graphlabs.core.graphs";
import {CircleVertexVisualizer} from "./CircleVertexVisualizer";
import {GeometricGraph} from "../geometrics/GeometricGraph";
import {GeometricVertex} from "../geometrics/GeometricVertex";

export class CircleGraphVisualizer implements IGraphVisualizer {
    public geometric: GeometricGraph<Graph<Vertex, Edge>, Vertex, Edge>;

    public width: number;
    public height: number;

    public constructor(graph: IGraph<IVertex, IEdge>) {
        this.geometric = new GeometricGraph<Graph<Vertex, Edge>, Vertex, Edge>(<Graph<Vertex, Edge>> graph);
        this.width = graph.vertices.length * 100;
        this.height = graph.vertices.length * 100;
    }

    /**
     * Function of calculating coordinates of the geometric graph
     */
    public calculate(): void {
        // Calculating phi angle between two vertices
        const phi: number = 2 * Math.PI / this.geometric.graph.vertices.length;
        // Calculating radius of the vertex circle (10 - default radius, 2 * 10 - diametr, x2 - between two vertices
        const radius: number = (this.geometric.graph.vertices.length * 4 * 10) / (2 * Math.PI);
        const x_center = this.width / 2;
        const y_center = this.height / 2;
        let n = 0;
        for (const vertex of this.geometric.graph.vertices) {
            const y: number = radius * Math.cos(n * phi) + y_center;
            const x: number = radius * Math.sin(n * phi) + x_center;
            this.geometric.vertices.push(CircleVertexVisualizer.calculate(vertex, x, y));
            n++;
        }
    }
}