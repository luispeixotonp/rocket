import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Text = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #000000;
  text-transform: capitalize;
  font-family: 'Poppins', sans-serif;
`;

