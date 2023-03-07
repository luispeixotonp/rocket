import React from "react";
import Lottie from "react-lottie";
import { useDispatch } from "react-redux";
import { Modal } from "src/components/modal/modal";
import { setServerListModal } from "src/store/server.slice";
import { Container, Text } from "./styles";

interface RegisterSuccessProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}


const RegisterSuccess: React.FC<RegisterSuccessProps> = (props) => {
  const dispatch = useDispatch<any>();

  const handleClose = () => {
    props.setVisible(false);
  }

  const handleOpenServerList = () => {
    handleClose();
    dispatch(setServerListModal(true));
  };

  return (
    <>
      <Modal
        visible={props.visible}
        setVisible={handleClose}
        title="Servidor cadastrado!"
        cancelText="Fechar"
        button={{
          text: 'Lista de servidores',
          onClick: () => handleOpenServerList()
        }}
      >
        <Container>
        <Lottie
          options={{
            loop: false,
            autoplay: true,
            animationData: require('../../../../../../../../../public/images/misc/animations/success.json'),
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          height={'150px'}
          width={'150px'}
          />
          <Text>
            A configuração do servidor
            <br />
            foi salva com sucesso!
          </Text>
        </Container>
      </Modal>
    </>
  )
}

export default RegisterSuccess;