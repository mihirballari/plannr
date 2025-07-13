"use client"

import { useCallback, useState } from "react"
import ReactFlow, {
  type Node,
  type Edge,
  addEdge,
  type Connection,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  BackgroundVariant,
} from "reactflow"
import "reactflow/dist/style.css"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Custom Node Component with Tooltip
function CourseNode({ data }: { data: any }) {
  const [showTooltip, setShowTooltip] = useState(false)

  const getNodeStyle = (level: string) => {
    switch (level) {
      case "core":
        return { backgroundColor: "#FEE2E2", borderColor: "#FCA5A5" }
      case "mid":
        return { backgroundColor: "#DBEAFE", borderColor: "#93C5FD" }
      case "upper":
        return { backgroundColor: "#E9D5FF", borderColor: "#C4B5FD" }
      default:
        return { backgroundColor: "#F3F4F6", borderColor: "#D1D5DB" }
    }
  }

  return (
    <div className="relative">
      <div
        className="px-4 py-3 rounded-lg border-2 shadow-sm cursor-pointer transition-all hover:shadow-md"
        style={getNodeStyle(data.level)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="text-sm font-semibold text-gray-800">{data.code}</div>
        <div className="text-xs text-gray-600 mt-1">{data.credits} credits</div>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-50 w-64">
          <div className="text-sm font-semibold text-gray-900 mb-2">{data.title}</div>
          <div className="flex gap-2">
            <Link href={`/course/${data.code.replace(" ", "-").toLowerCase()}`}>
              <Button size="sm" variant="outline" className="text-xs bg-transparent">
                Learn More
              </Button>
            </Link>
            <Button size="sm" className="text-xs" onClick={() => {}}>
              Add to Schedule
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

const nodeTypes = {
  courseNode: CourseNode,
}

const initialNodes: Node[] = [
  // Core Sequence
  {
    id: "151",
    type: "courseNode",
    position: { x: 100, y: 100 },
    data: {
      code: "MATH 151",
      title: "Calculus I for Mathematical and Physical Sciences",
      credits: 4,
      level: "core",
    },
  },
  {
    id: "152",
    type: "courseNode",
    position: { x: 300, y: 100 },
    data: {
      code: "MATH 152",
      title: "Calculus II for Mathematical and Physical Sciences",
      credits: 4,
      level: "core",
    },
  },
  {
    id: "251",
    type: "courseNode",
    position: { x: 500, y: 100 },
    data: {
      code: "MATH 251",
      title: "Multivariable Calculus",
      credits: 4,
      level: "core",
    },
  },

  // Mid-level
  {
    id: "250",
    type: "courseNode",
    position: { x: 200, y: 250 },
    data: {
      code: "MATH 250",
      title: "Linear Algebra",
      credits: 3,
      level: "mid",
    },
  },
  {
    id: "252",
    type: "courseNode",
    position: { x: 400, y: 250 },
    data: {
      code: "MATH 252",
      title: "Elementary Differential Equations",
      credits: 3,
      level: "mid",
    },
  },
  {
    id: "300",
    type: "courseNode",
    position: { x: 600, y: 250 },
    data: {
      code: "MATH 300",
      title: "Introduction to Mathematical Reasoning",
      credits: 3,
      level: "mid",
    },
  },

  // Upper Division
  {
    id: "311",
    type: "courseNode",
    position: { x: 100, y: 400 },
    data: {
      code: "MATH 311",
      title: "Real Analysis I",
      credits: 3,
      level: "upper",
    },
  },
  {
    id: "350",
    type: "courseNode",
    position: { x: 250, y: 400 },
    data: {
      code: "MATH 350",
      title: "Abstract Algebra I",
      credits: 3,
      level: "upper",
    },
  },
  {
    id: "351",
    type: "courseNode",
    position: { x: 400, y: 400 },
    data: {
      code: "MATH 351",
      title: "Complex Function Theory",
      credits: 3,
      level: "upper",
    },
  },
  {
    id: "411",
    type: "courseNode",
    position: { x: 550, y: 400 },
    data: {
      code: "MATH 411",
      title: "Real Analysis II",
      credits: 3,
      level: "upper",
    },
  },
  {
    id: "412",
    type: "courseNode",
    position: { x: 100, y: 550 },
    data: {
      code: "MATH 412",
      title: "Abstract Algebra II",
      credits: 3,
      level: "upper",
    },
  },
  {
    id: "481",
    type: "courseNode",
    position: { x: 400, y: 550 },
    data: {
      code: "MATH 481",
      title: "Mathematical Modeling",
      credits: 3,
      level: "upper",
    },
  },
]

const initialEdges: Edge[] = [
  // Core sequence prerequisites
  { id: "e151-152", source: "151", target: "152", type: "smoothstep", animated: false },
  { id: "e152-251", source: "152", target: "251", type: "smoothstep", animated: false },

  // Mid-level prerequisites
  { id: "e151-250", source: "151", target: "250", type: "smoothstep", animated: false },
  { id: "e152-252", source: "152", target: "252", type: "smoothstep", animated: false },
  { id: "e152-300", source: "152", target: "300", type: "smoothstep", animated: false },

  // Upper division prerequisites
  { id: "e300-311", source: "300", target: "311", type: "smoothstep", animated: false },
  { id: "e250-350", source: "250", target: "350", type: "smoothstep", animated: false },
  { id: "e300-350", source: "300", target: "350", type: "smoothstep", animated: false },
  { id: "e300-351", source: "300", target: "351", type: "smoothstep", animated: false },
  { id: "e311-411", source: "311", target: "411", type: "smoothstep", animated: false },
  { id: "e350-412", source: "350", target: "412", type: "smoothstep", animated: false },
  { id: "e251-481", source: "251", target: "481", type: "smoothstep", animated: false },
  { id: "e252-481", source: "252", target: "481", type: "smoothstep", animated: false },
]

export default function PlanPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Math Major Pathway (SAS)</h1>
      </div>

      {/* Graph Container */}
      <div className="h-[calc(100vh-200px)] bg-gray-50 shadow-inner">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="bottom-left"
        >
          <Controls />
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#E5E7EB" />
        </ReactFlow>
      </div>

      {/* Legend */}
      <div className="p-6 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Course Categories</h3>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded border-2"
                style={{ backgroundColor: "#FEE2E2", borderColor: "#FCA5A5" }}
              ></div>
              <span className="text-sm text-gray-600">Core Math Sequence</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded border-2"
                style={{ backgroundColor: "#DBEAFE", borderColor: "#93C5FD" }}
              ></div>
              <span className="text-sm text-gray-600">Mid-Level Courses</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded border-2"
                style={{ backgroundColor: "#E9D5FF", borderColor: "#C4B5FD" }}
              ></div>
              <span className="text-sm text-gray-600">Upper Division</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
