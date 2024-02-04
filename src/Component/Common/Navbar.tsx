import { FunctionComponent } from "react";
import { Save } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Modal from "../Modal";

interface Props {
  onSave: () => void;
}

const Navbar: FunctionComponent<Props> = ({ onSave }) => {
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
          <Modal />
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
