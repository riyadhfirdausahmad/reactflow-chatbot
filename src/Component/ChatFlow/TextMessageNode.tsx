import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { CopyAll, Delete, TitleRounded } from "@mui/icons-material";

import { CopyToClipboard } from "react-copy-to-clipboard";
import CopyToClipboardButton from "Component/CopyToClipboardButton";

const TextMessageNode = ({ data, isConnectable, id }: NodeProps) => {
  const dataLabel = data?.label
    .split("\n")
    .map((paragraph: any, index: number) => <p key={index}>{paragraph}</p>);
  return (
    <div className="w-[200px]">
      <div className="py-2 px-3 flex justify-start text-white bg-lime-600/80 text-[10px] items-center gap-1 font-bold rounded-t-md">
        <WhatsAppIcon className="w-4 h-4" />
        <div>{data?.type}</div>
      </div>
      <div>
        <Handle type="target" position={Position.Top} />
        <div className="bg-gray-50 px-2 py-2 border border-gray-200 text-xs text-start text-gray-600 flex justify-between items-center">
          {/* {data?.label} */}
          <TitleRounded className="h-4 w-4" />
          <div className="flex-1 space-y-1 w-1 px-2">
            <div className="font-medium leading-4 line-clamp-3">
              {dataLabel}
            </div>
          </div>
          <Delete
            className="h-3 w-3 text-red-500"
            onClick={() => alert("Delete")}
          />
        </div>
        <Handle type="source" position={Position.Bottom} />
      </div>
      <div className="text-left py-2 px-3 flex justify-between text-white bg-blue-100 text-[10px] items-center gap-1 font-bold rounded-b-md">
        <div id="messageID" className="italic line-clamp-1 text-blue-600">
          {id}
        </div>
        <CopyToClipboardButton text={id} />
      </div>
    </div>
  );
};

export default memo(TextMessageNode);
