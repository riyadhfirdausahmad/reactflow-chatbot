import { FunctionComponent } from "react";
import { Node } from "reactflow";
import InputNodeSetting from "Component/ChatFlow/NodeSetting/InputNodeSetting";
import { NodeTypeEnum } from "Component/ChatFlow/chatFlowInterface";
import TypeNodeSetting from "./TypeNodeSetting";
// import { nodeSettingTitleConstant } from "Component/ChatFlow/constant";
// import NodeSettingHeader from "Component/ChatFlow/NodeSetting/NodeSettingHeader";

interface Props {
  selectedNode: Node;
  setSelectedNode: (node: Node | null) => void;
  setNodes: (nodes: Node[] | ((nodes: Node[]) => Node[])) => void;
}

const NodeSetting: FunctionComponent<Props> = ({
  selectedNode,
  setSelectedNode,
  setNodes,
}) => {
  return (
    <div className="text-start">
      {/* <NodeSettingHeader
        onClick={() => {
          setSelectedNode(null);
        }}
        title={nodeSettingTitleConstant[selectedNode.type as NodeTypeEnum]}
      /> */}
      <div className="py-4">
        {selectedNode.type === NodeTypeEnum.MESSAGE && (
          <>
            <TypeNodeSetting selectedNode={selectedNode} setNodes={setNodes} />
            <InputNodeSetting selectedNode={selectedNode} setNodes={setNodes} />
          </>
        )}
      </div>
    </div>
  );
};
export default NodeSetting;
