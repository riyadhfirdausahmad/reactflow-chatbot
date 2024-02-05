import { CopyAll } from "@mui/icons-material";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import useAlertMessage from "./ChatFlow/hook/useAlertMessage";
import debounce from "lodash/debounce";

interface CopyToClipboardButtonProps {
  text: string;
}

const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = ({
  text,
}) => {
  const { alertMessage } = useAlertMessage();
  const debounceOnAlertMessage = debounce(alertMessage, 100);
  const handleCopy = () => {
    debounceOnAlertMessage("Successfully Copied", "success");
  };

  return (
    <CopyToClipboard text={text} onCopy={handleCopy}>
      <div className="px-1 cursor-default">
        <CopyAll className="h-3 w-3 text-blue-600" />
      </div>
    </CopyToClipboard>
  );
};

export default CopyToClipboardButton;
