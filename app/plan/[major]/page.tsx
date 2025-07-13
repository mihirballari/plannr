"use client";

import { useCallback } from "react";
import ReactFlow, {
    useNodesState,
    useEdgesState,
    addEdge,
    Controls,
    Background,
    BackgroundVariant,
    type Connection,
  } from "reactflow";
import "reactflow/dist/style.css";

// Your course nodes
import { mathNodes, mathEdges } from "../../data/math";

export default function MajorPlanPage({ params }: { params: { major: string } }) {
  const major = params.major.toLowerCase();

  // Load math plan for "math" only
  const initialNodes = major === "math" ? mathNodes : [];
  const initialEdges = major === "math" ? mathEdges : [];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: Connection) => {
    setEdges((eds) => addEdge(params, eds));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">{major.toUpperCase()} Degree Plan</h1>
      </div>

      <div className="h-[calc(100vh-200px)] bg-gray-50 shadow-inner">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          attributionPosition="bottom-left"
        >
          <Controls />
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#E5E7EB" />
        </ReactFlow>
      </div>
    </div>
  );
}
