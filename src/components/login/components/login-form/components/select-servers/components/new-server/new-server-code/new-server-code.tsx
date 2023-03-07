import { TextField } from "@mui/material";
import React from "react";
import { Modal } from "src/components/modal/modal";
import { Container } from "./styles";
import base64 from 'base-64';
import utf8 from 'utf8';
import { addServer } from "src/store/server.slice";
import { Server } from "src/types/server/server.type";
import { useDispatch } from "react-redux";
import RegisterSuccess from "../../register-success/register-success";

interface NewServerCodeProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

interface ServerBase64 {
  baseName: string;
  baseUrl: string;
  baseImage: string;
}

const NewServerCode: React.FC<NewServerCodeProps> = (props) => {
  const dispatch = useDispatch<any>();
  const [visibleSuccess, setVisibleSuccess] = React.useState(false);
  const [codeServer, setCodeServer] = React.useState('');
  const [errorServer, setErrorServer] = React.useState({
    error: false,
    message: ''
  });

  const handleClose = () => {
    props.setVisible(false);
  }

  const validateForm = () => {
    if (codeServer.length === 0) {
      setErrorServer({
        error: true,
        message: 'Código do servidor é obrigatório'
      })
      
      return false;
    }

    return true;
  }

  const decodeServer = (): ServerBase64 | null => {
    try {
      const decode = base64.decode(codeServer);
      const utf8Decode = utf8.decode(decode);
  
      return JSON.parse(utf8Decode) as ServerBase64;
    } catch (error) {
      setErrorServer({
        error: true,
        message: 'Error ao decodificar o código do servidor'
      })
      
      return null;
    }
  }

  const resetError = () => {
    setErrorServer({
      error: false,
      message: ''
    })
  }

  const generateId = (): string => {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 10000); // valor aleatório entre 0 e 9999
    const id = timestamp.toString() + randomNum.toString();

    return id;
  }


  const saveServer = (data: Server) => {
    dispatch(addServer(data));
  }


  const handleSubmit = () => {
    if (!validateForm()) return;

    const server = decodeServer();

    if (!server) return;

    resetError();

    saveServer({
      id: generateId(),
      name: server.baseName,
      ipServer: server.baseUrl,
      ipImage: server.baseImage
    })
    handleClose();
    setVisibleSuccess(true);
  }

  return (
    <>
      <Modal
        visible={props.visible}
        setVisible={handleClose}
        title="Cadastrar novo servidor"
        button={{
          text: "Cadastrar",
          onClick: () => {
            handleSubmit()
          }
        }}
        >
        <Container>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            <TextField
              fullWidth
              multiline
              onChange={e => setCodeServer(e.target.value)}
              id='codeServer'
              error={errorServer.error}
              helperText={errorServer.message}
              label='Código do servidor'
              sx={{ marginBottom: 4, minWidth: 350 }}
              />
          </form>
        </Container>
      </Modal>
      <RegisterSuccess visible={visibleSuccess} setVisible={setVisibleSuccess} />
    </>
  )
}

export default NewServerCode