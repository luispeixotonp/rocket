import styled from 'styled-components';
import Box from '@mui/material/Box'
import AvatarMaterial from '@mui/material/Avatar'
import DividerMaterial from '@mui/material/Divider'

export const Container = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  transition: 'all 0.3s ease-in-out';
  gap: 0.5rem;
`;

export const Avatar = styled(AvatarMaterial).attrs({
  sx: {
    width: '6.25rem',
    height: '6.25rem'
  }
})``;

export const AcronymText = styled.text`
  font-size: 3rem;
  text-transform: uppercase;
`;

export const CompanyText = styled.text`
  font-family: 'Poppins', sans-serif;
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: 700;
  color: #000;
`;

export const NameText = styled.text`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-transform: capitalize;
  color: #000;
`;

export const Divider = styled(DividerMaterial)`
  width: 100%;
  height: 0.125rem;
  border-radius: 0.125rem; 
  background-color: #D9D9D9;
`;