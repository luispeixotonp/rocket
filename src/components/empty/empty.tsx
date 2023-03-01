import React from 'react';
import Lottie from 'react-lottie';
import { Subtitle } from '../charts/comparative/styles';
import { Container, Content, Title } from './styles';

const Empty:React.FC = () => {
  
return (
    <Container>
      <Content>
      <Lottie
        options={{
          loop: false,
          autoplay: true,
          animationData: require('../../../public/images/misc/empty.json'),
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        height={'300px'}
        width={'300px'}
        />
      <Title>Nenhum resultado encontrado</Title>
      <Subtitle>Verifique os filtros e tente novamente</Subtitle>
        </Content>
    </Container>
  );
};

export default Empty;