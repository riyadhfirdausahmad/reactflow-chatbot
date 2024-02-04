import { FunctionComponent, useState, useEffect } from "react";
import { Node } from "reactflow";
import { TextField, TextareaAutosize } from "@mui/material";

interface Props {
  selectedNode: Node;
  setNodes: (nodes: Node[] | ((nodes: Node[]) => Node[])) => void;
}

const InputNodeSetting: FunctionComponent<Props> = ({
  selectedNode,
  setNodes,
}) => {
  const [textEditor, setTextEditor] = useState(selectedNode.data?.label || "");
  useEffect(() => {
    if (selectedNode)
      setNodes((nodes: Node[]) =>
        nodes.map((node: Node) => {
          if (node.id === selectedNode.id) {
            node.data = {
              ...node.data,
              label: textEditor,
            };
          }
          return node;
        })
      );
  }, [selectedNode.id, textEditor]);

  useEffect(() => {
    if (selectedNode) {
      setTextEditor(selectedNode.data?.label || "");
    }
  }, [selectedNode.id]);

  return (
    <div>
      <div className="text-sm font-bold text-gray-500 text-start">Message</div>
      <div className="w-full py-3">
        <TextareaAutosize
          onChange={(e) => {
            const updateValue = e.target.value;
            setTextEditor(updateValue);
          }}
          className="w-full border-gray-400 border-dashed border p-2 text-sm rounded-xl"
          value={textEditor}
          minRows={2}
        />
      </div>
    </div>
  );
};
export default InputNodeSetting;
