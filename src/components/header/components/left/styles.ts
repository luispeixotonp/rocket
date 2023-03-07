import IconButtonMaterial from '@mui/material/IconButton';
import { Box } from '@mui/system';
import styled from 'styled-components';

export const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconButton  = styled(IconButtonMaterial).attrs({
  sx: {
    mr: 1,
    mt: 5,
    display: { xs: 'block', md: 'none' },
  },
})`
  display: none;
  @media (max-width: 950px) {
    display: flex;
  }

`;

