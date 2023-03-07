import { Box } from '@mui/material';
import styled from 'styled-components';
import Typography from '@mui/material/Typography'

export const Wrapper = styled.div`
  display: none;
  @media (max-width: 950px) {
    display: flex;
  }
`;
export const Container = styled(Box)`
  display: none;
  align-items: center;
  justify-content: center;
`;

export const Text = styled(Typography).attrs({
  ml: 1, fontWeight: 600
})`
  font-family: 'Poppins', sans-serif;
  @media (max-width: 800px) {
    display: none;
  }
`


export const MenuContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  `;

