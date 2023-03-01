import styled from 'styled-components';
import CircularProgressMaterial from '@mui/material/CircularProgress';


export const Container = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CircularProgress = styled(CircularProgressMaterial).attrs({
  fontSize: 'large',
})`
  color: #8257e5;
`;

export const Title = styled.text`
  font-size: 1.8rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: #909498;
  margin-top: 16px;

`;

export const Subtitle = styled.text`
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #909498;
  margin-top: 16px;

`;
