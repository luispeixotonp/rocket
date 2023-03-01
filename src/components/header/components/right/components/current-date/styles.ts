import styled from 'styled-components';
import IconMaterial from 'mdi-material-ui/Calendar';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: #EAF1FB;
  border-radius: 30px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Text = styled.text`
  font-size: 1.125rem;
  font-weight: 500;
  color: #184485;
  font-family: 'Poppins', sans-serif;
`;

export const Icon = styled(IconMaterial)`
  margin-right: 12px;
  color: #184485;
`;



