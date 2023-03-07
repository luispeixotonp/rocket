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

export const CircularProgress = styled(CircularProgressMaterial).attrs({
  fontSize: 'large',
})`
  color: #8257e5;
`;

export const Title = styled.text`
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: #184485;
  margin-top: 16px;

`;

export const Subtitle = styled.text`
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #184485;
  margin-top: 16px;

`;

