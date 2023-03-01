import styled from 'styled-components';

interface Props {
  active?: boolean;
}

export const Container = styled.div`
  margin: 16px 0;
`;

export const Content = styled.div<Props>`
  display: flex;
  flex: 1;
  width: '100%';
  align-items: center;
  justify-content: space-around;
  padding: 0;
  height: 48px;
  border-radius: 10px;
  background-color: ${(props) => (props.active ? '#184485' : '#fff')};
`;


export const Title = styled.text<Props>`
  font-family: 'Poppins', sans-serif;
  max-width: 70%;
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => (props.active ? '#fff' : '#000')};
  text-transform: capitalize;
  flex-wrap: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

`;
