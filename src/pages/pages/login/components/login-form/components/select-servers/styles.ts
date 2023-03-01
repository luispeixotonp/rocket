import styled from 'styled-components';


import { CloudOutline, ChevronDown } from 'mdi-material-ui'
import ButtonMaterial from '@mui/material/Button';

interface IconContainerProps {
  slim?: boolean;
}

interface ContentProps {
  isSelected?: boolean;
}

export const Container = styled.div`
  flex: 1;
  width: 100%;
  margin: 32px 0;
`;

export const Button = styled(ButtonMaterial).attrs({
  variant: 'text',
  fullWidth: true,
  sx: {
    width: '100%',
    margin: '0',
    padding: '0',
    borderRadius: '0',
  }
})`
  width: 100%;
  margin: 0;
`;

export const Content = styled.div<ContentProps>`
  width: 100%;
  padding: 8px;
  flex-direction: row;
  display: flex;
  border-radius: 8px;
  background-color: ${({ isSelected }) => (isSelected ? '#18448517' : 'transparent')};
  border: 1px solid #184485;
`;

export const Info = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  padding: ${({ slim }) => (slim ? '4px' : '8px')};
  align-items: center;
  justify-content: center;
  margin-right: ${({ slim }) => (slim ? '4px' : '8px')};
  
`;

export const ServerIcon = styled(CloudOutline).attrs({
  fontSize: 'large',
})`
  color: #184485;
  width: 1.5rem;
  height: 1.5rem;
`;

export const ChevronIcon = styled(ChevronDown).attrs({
  fontSize: 'medium',
})`
  color: #184485;
`;

export const Title = styled.text`
  font-size: 1rem;
  color: #000;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Subtitle = styled.text`
  font-size: 0.825rem;
  max-width: 90%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  font-weight: 500;
  color: #757278;
`;

