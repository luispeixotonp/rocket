import { Card, CardContent } from '@mui/material';
import styled from 'styled-components';

interface ContainerProps {
  color?: string;
  type?: string;
}

interface IconProps {
  color?: string;
}

export const Container = styled(CardContent) <ContainerProps>`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: ${(props) => (props.type === 'result' ? 'column' : 'row')};
  padding: 16px 8px;
  background-color: ${(props) => props.color || '#fff'};
  height: 100px;
  flex: 1;
`;

export const ResultTitle = styled.text`
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.75);


`;
export const ResultValue = styled.text`
  font-size: 1.25rem;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  margin-top: 4px;
  color: #fff;
`;

export const IconContainer = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: ${(props) => props.color || '#fff'};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.text`
  font-size: 0.938rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #545151;


`;
export const Value = styled.text`
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  margin-top: 4px;
  color: #000000;
`;

