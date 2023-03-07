import React from 'react';
import Lottie from 'react-lottie';
import { Container, Subtitle, Title } from './styles';

interface LoadingProps {
  visible: boolean;
}

const Loading:React.FC<LoadingProps> = ({visible}) => {
  if (!visible) {
    return null;
  }
  
return (
    <Container>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: require('../../../public/images/misc/loading.json'),
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        height={'300px'}
        width={'300px'}
        />
      <Title>Carregando...</Title>
      <Subtitle>Aguarde enquanto os dados são carregados</Subtitle>
    </Container>
  );
};

export default Loading;