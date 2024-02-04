import React, { FunctionComponent } from "react";
import { Button } from "@mui/material";
import { NodeTypeEnum } from "../chatFlowInterface";

interface Props {
  icon: React.ReactNode;
  text: string;
  nodeType: NodeTypeEnum;
  onDragStart: (event: any, nodeType: NodeTypeEnum) => void;
}

const NodePanelBox: FunctionComponent<Props> = ({
  icon,
  text,
  onDragStart,
  nodeType,
}) => {
  return (
    <div
      onDragStart={(event) => onDragStart(event, nodeType)}
      draggable
      className="border border-gray-400 cursor-move rounded-lg text-gray-600 py-4 border-dashed"
    >
      <div>{icon}</div>
      <div className="text-sm pt-2 italic">{text}</div>
    </div>
  );
};
export default NodePanelBox;
