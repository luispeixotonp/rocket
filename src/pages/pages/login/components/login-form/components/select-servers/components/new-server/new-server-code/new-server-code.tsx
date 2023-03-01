import { TextField } from "@mui/material";
import React from "react";
import { Modal } from "src/components/modal/modal";
import { Container } from "./styles";

interface NewServerCodeProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const NewServerCode: React.FC<NewServerCodeProps> = (props) => {

  const handleClose = () => {
    props.setVisible(false);
  }

  return (
    <Modal
      visible={props.visible}
      setVisible={handleClose}
      title="Cadastrar novo servidor"
      button={{
        text: "Cadastrar",
        onClick: () => {
          console.log('Cadastrar')
        }
      }}
    >
      <Container>
        <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
          <TextField
            fullWidth
            multiline
            id='codeServer'
            label='Código do servidor'
            sx={{ marginBottom: 4, minWidth: 350 }}
          />
        </form>
      </Container>
    </Modal>
  )
}

export default NewServerCode