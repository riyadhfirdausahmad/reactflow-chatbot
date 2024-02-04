import { Edge, Node } from "reactflow";
import { ReactNode } from "react";
import { NodeTypeEnum } from "Component/ChatFlow/chatFlowInterface";
import MessageIcon from "@mui/icons-material/Message";
import TextMessageNode from "Component/ChatFlow/TextMessageNode";
import { PlayCircle, Start } from "@mui/icons-material";

export const flowKey = "example-flow";
export const initialNodes: Node[] = [];

export const initialEdges: Edge[] = [];

export const nodePanelList: {
  id: number;
  icon: ReactNode;
  nodeType: NodeTypeEnum;
  text: string;
}[] = [
  {
    id: 1,
    icon: <PlayCircle className="text-4xl" />,
    nodeType: NodeTypeEnum.MESSAGE,
    text: "Drag & Drop",
  },
];

export const nodeTypes = {
  [NodeTypeEnum.MESSAGE]: TextMessageNode,
};

export const dragAndDropKey = "application/react-flow";

export const nodeSettingTitleConstant: Record<NodeTypeEnum, string> = {
  [NodeTypeEnum.MESSAGE]: "Message",
};
