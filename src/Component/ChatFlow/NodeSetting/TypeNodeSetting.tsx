import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Node } from "reactflow";

interface Props {
  selectedNode: Node;
  setNodes: (nodes: Node[] | ((nodes: Node[]) => Node[])) => void;
}

const TypeNodeSetting: React.FunctionComponent<Props> = ({
  selectedNode,
  setNodes,
}) => {
  const [typeEditor, setTypeEditor] = React.useState(
    selectedNode.data?.type || ""
  );
  React.useEffect(() => {
    if (selectedNode)
      setNodes((nodes: Node[]) =>
        nodes.map((node: Node) => {
          if (node.id === selectedNode.id) {
            node.data = {
              ...node.data,
              type: typeEditor,
            };
          }
          return node;
        })
      );
  }, [selectedNode.id, typeEditor]);

  React.useEffect(() => {
    if (selectedNode) {
      setTypeEditor(selectedNode.data?.type || "");
    }
  }, [selectedNode.id]);

  const handleChange = (event: any, newValue: any) => {
    setTypeEditor(newValue);
  };

  const options = ["Start", "Keyword", "Reply"];

  return (
    <div>
      <div className="text-sm font-bold text-gray-500 text-start">Type</div>
      <div className="w-full py-3">
        <Autocomplete
          onChange={handleChange}
          disablePortal
          id="combo-box-demo"
          options={options}
          size="small"
          renderInput={(params) => (
            <TextField {...params} placeholder="Type" size="small" />
          )}
          className="w-full text-sm"
          value={typeEditor}
        />
      </div>
    </div>
  );
};

export default TypeNodeSetting;
