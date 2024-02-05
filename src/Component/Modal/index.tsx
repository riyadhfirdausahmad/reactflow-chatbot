import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { PlayArrowRounded } from "@mui/icons-material";
import ChatsBot from "./ChatsBot";
import { Edge, Node } from "reactflow";

interface Props {
  nodes?: Node<any, string | undefined>[] | undefined;
  edges?: Edge<any>[] | undefined;
}

const AlertDialog: React.FunctionComponent<Props> = ({ nodes, edges }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <PlayArrowRounded
        className="text-gray-500 text-3xl cursor-pointer"
        onClick={handleClickOpen}
      />
      <Dialog open={open} onClose={handleClose}>
        <ChatsBot edges={edges} nodes={nodes} />
      </Dialog>
    </React.Fragment>
  );
};

export default AlertDialog;
