import "reactflow/dist/style.css";
import ReactFlow, { Background, Controls } from "reactflow";
import useChatFlow from "./hook/useChatFlow";
import Navbar from "Component/Common/Navbar";
import NodePanel from "../ChatFlow/NodePanel";
import NodeSetting from "Component/ChatFlow/NodeSetting";
import { nodeTypes } from "Component/ChatFlow/constant";

const BasicFlow = () => {
  const {
    reactFlowWrapper,
    setReactFlowInstance,
    nodes,
    setNodes,
    onNodesChange,
    edges,
    onEdgesChange,
    onConnect,
    onDragOver,
    onDrop,
    onSelectionChange,
    selectedNode,
    setSelectedNode,
    handleEdgeValidation,
    saveFlow,
  } = useChatFlow();
  return (
    <div className="h-full">
      <Navbar
        onSave={() => {
          saveFlow();
        }}
      />
      <div className="flex w-full h-full relative z-10">
        <div className="w-1/6 pt-14 border-r border-gray-300 px-4">
          <NodePanel />
        </div>
        <div className="w-2/3">
          <div ref={reactFlowWrapper} className="w-full h-full">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onSelectionChange={onSelectionChange}
              isValidConnection={handleEdgeValidation}
              fitView
            >
              <Background />
              <Controls />
            </ReactFlow>
          </div>
        </div>
        <div className="w-1/4 pt-14 border-l border-gray-300 px-4">
          <div className="mb-3 font-bold text-gray-600 text-left">Property</div>
          {/* <div className="text-sm font-bold text-gray-500 text-start mb-2 grid grid-cols-3">
            <span className="col-span-1">Type</span>
            <span className="text-sm text-gray-500 text-start col-span-2 font-normal">
              : {selectedNode ? selectedNode.data?.type : "Empty"}
            </span>
          </div> */}
          <div className="text-sm font-bold text-gray-500 text-start mb-2 grid grid-cols-3">
            <span className="col-span-1">Message ID</span>
            <span className="text-sm text-gray-500 text-start col-span-2 font-normal">
              : {selectedNode ? selectedNode.id : "Empty"}
            </span>
          </div>
          {selectedNode && (
            <NodeSetting
              selectedNode={selectedNode}
              setSelectedNode={setSelectedNode}
              setNodes={setNodes}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicFlow;
