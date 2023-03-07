import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 3fr;
  align-items: center;
  height: 100vh;
  width: 100vw;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }
`;

export default Container;
