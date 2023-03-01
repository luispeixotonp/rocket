import { CardContent } from '@mui/material';
import styled from 'styled-components';

export const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
`;

export const Value = styled.text`
  font-size: 2.4rem;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  color: #184485;
  fill: #184485;
`;

export const Label = styled.text`
  font-size: 1.25rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: #000000;
  fill: #000000;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #DCDCE6;
  margin: 1.0rem 0;
`;






