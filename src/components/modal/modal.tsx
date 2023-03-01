import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export interface ModalProps {
  visible: boolean;
  children?: React.ReactNode;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  title?: string;
  disableButtonClose?: boolean;
  button?: {
    text: string;
    onClick: () => void;
  }
}


export const Modal: React.FC<ModalProps> = (props) => {

  const handleCloseForm = () => {
    props.setVisible(false);
  };

  return (
    <Dialog open={props.visible} onClose={handleCloseForm}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        {props.children}
      </DialogContent>
      <DialogActions>
        {!props.disableButtonClose && <Button color='error' onClick={handleCloseForm}>Cancelar</Button>}
        {props.button && <Button onClick={props.button.onClick}>{props.button.text}</Button>}
      </DialogActions>
    </Dialog>
  );
}