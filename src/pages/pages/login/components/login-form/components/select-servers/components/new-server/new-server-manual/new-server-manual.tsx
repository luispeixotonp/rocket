import { Button, TextField } from "@mui/material";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "src/components/modal/modal";
import { addServer } from "src/store/server.slice";
import { Server } from "src/types/server/server.type";
import { Validate } from "src/utils/validate/validate.utis";
import { Container } from "./styles";

interface NewServerManualProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}


const NewServerManual: React.FC<NewServerManualProps> = (props) => {
  const dispatch = useDispatch<any>();
  const [serverName, setServerName] = React.useState('');
  const [ipServer, setIpServer] = React.useState('');
  const [ipImage, setIpImage] = React.useState('');



  const [errorName, setErrorName] = React.useState({
    error: false,
    message: ''
  });
  const [errorIpServer, setErrorIpServer] = React.useState({
    error: false,
    message: ''
  });
  const [errorIpImage, setErrorIpImage] = React.useState({
    error: false,
    message: ''
  });

  const generateId = (): string => {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 10000); // valor aleatório entre 0 e 9999
    const id = timestamp.toString() + randomNum.toString();

    return id;
  }

  const saveServer = (data: Server) => {
    dispatch(addServer(data));
  }


  const validateForm = (): boolean => {
    let isError = false;
    const error = (message: string) => {
      return {
        error: true,
        message
      }
    }
    const resetError = () => {
      return {
        error: false,
        message: ''
      }
    }

    setErrorName(resetError());
    setErrorIpServer(resetError());
    setErrorIpImage(resetError());


    if (!Validate.isNotEmpty(serverName)) {
      setErrorName(error('Preencha o nome do servidor'))
      isError = true;
    } else {
      setErrorName(resetError())
    }

    if (!Validate.isNotEmpty(ipServer)) {
      setErrorIpServer(error('Preencha o IP do servidor'));
      isError = true;
    } else if (!Validate.isNotUrl(ipServer)) {
      setErrorIpServer(error('Preencha o IP do servidor corretamente'));
      isError = true;
    } else {
      setErrorIpServer(resetError());
    }

    if (!Validate.isNotEmpty(ipImage)) {
      setErrorIpImage(error('Preencha o IP da imagem'));
      isError = true;
    } else if (!Validate.isNotUrl(ipImage)) {
      setErrorIpImage(error('Preencha o IP da imagem corretamente'));
      isError = true;
    } else {
      setErrorIpImage(resetError());
    }

    if (isError) {
      return false;
    }

    return true;

  }

  const handleSubmit = () => {
    const name = serverName;
    if (!validateForm()) return;

    saveServer({
      id: generateId(),
      name,
      ipServer,
      ipImage,
    })
    setServerName('');
    setIpServer('');
    setIpImage('');
    handleClose();
  }

  const handleClose = () => {
    props.setVisible(false);
  }

  return (
    <Modal
      visible={props.visible}
      setVisible={handleClose}
      title="Cadastrar novo servidor"
      button={{
        text: 'Salvar',
        onClick: () => handleSubmit(),
      }}
    >
      <Container>
        <TextField
          fullWidth
          id='serverName'
          label='Nome do servidor'
          error={errorName.error}
          helperText={errorName.message}
          sx={{ marginBottom: 4 }}
          onChange={(e) => setServerName(e.target.value)}
          placeholder='Ex: Servidor de teste'
        />
        <TextField
          autoFocus
          fullWidth
          error={errorIpServer.error}
          helperText={errorIpServer.message}
          id='ipServer'
          label='IP/Servidor'
          onChange={(e) => setIpServer(e.target.value)}
          sx={{ marginBottom: 4 }}
          placeholder='Ex: http://empresa.force.vidyacode.com.br:1500'
        />

        <TextField
          autoFocus
          fullWidth
          error={errorIpImage.error}
          helperText={errorIpImage.message}
          id='ipImage'
          onChange={(e) => setIpImage(e.target.value)}
          label='IP/Imagem' sx={{ marginBottom: 4 }}
          placeholder='Ex: http://empresa.nuvemdatacom.com.br:9562'
        />


      </Container>
    </Modal>
  )
}

export default NewServerManual