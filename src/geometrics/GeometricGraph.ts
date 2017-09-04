import {Vertex, Edge, Graph} from "graphlabs.core.graphs";
import {GeometricVertex} from "./GeometricVertex";
import {GeometricEdge} from "./GeometricEdge";

/**
 * @classdesc Geometric graph to describe a graph visualisation
 */
export class GeometricGraph<T extends Graph<K, R>, K extends Vertex, R extends Edge> {
  public graph: T;

  /**
   * @public Vertices on the screen
   */
  public vertices: GeometricVertex<K>[];

  /**
   * @public Edges on the screen
   */
  public edges: GeometricEdge<R>[];

  /**
   * @constructor
   * @param graph
   */
  public constructor(graph: T) {
    this.graph = graph;
    for (let vertex of graph.vertices)
      this.vertices.push(new GeometricVertex(vertex));
    for (let edge of graph.edges)
      this.edges.push(new GeometricEdge(edge));
  }
}