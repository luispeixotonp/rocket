import { Box } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;
export const Container = styled(Box)`
  display: none;
  align-items: center;
  justify-content: center;
`;


export const MenuContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  `;

