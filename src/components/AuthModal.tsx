import {FC} from "react";
interface Props {
  open: boolean;
  onClose: () => void;
}

export const AuthModal: FC<Props> = ({open, onClose}) => {
  const handleClose = () => {
    onClose();
  }
  return(
    <div>
      <input/>
      <input/>
    </div>
  );
}
