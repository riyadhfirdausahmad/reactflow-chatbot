import { FunctionComponent, useEffect, useState } from "react";
import { Save } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Modal from "../Modal";
import { Node, Edge } from "reactflow";
import useChatFlow from "Component/ChatFlow/hook/useChatFlow";

interface Props {
  onSave: () => void;
  nodes?: Node<any, string | undefined>[] | undefined;
  edges?: Edge<any>[] | undefined;
}

const Navbar: FunctionComponent<Props> = ({ onSave, nodes, edges }) => {
  // const { edges, nodes } = useChatFlow();
  // const [datas, setDatas] = useState([]);

  useEffect(() => {
    //   const dataFromLocalStorage = localStorage.getItem("example-flow");
    //   const response = dataFromLocalStorage
    //     ? JSON.parse(dataFromLocalStorage)
    //     : null;
    //   const nodes = response?.nodes;
    //   setDatas(nodes);
    console.log("Edges", edges);
    console.log("Nodes", nodes);
  }, [edges, nodes]);
  return (
    <div className="fixed top-0 left-0 w-full border-b border-gray-300 p-2 bg-white z-20 px-4">
      <div className="flex justify-between gap-4">
        <div></div>
        <div>
          <div className="py-1 flex justify-start text-md items-center gap-1 italic">
            <WhatsAppIcon className="w-5 h-5" />
            <div>Chatbot</div>
          </div>
        </div>
        <div className="space-x-4">
          {edges && edges.length > 0 && <Modal nodes={nodes} edges={edges} />}
          <Save
            onClick={onSave}
            className="text-gray-500 text-2xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
