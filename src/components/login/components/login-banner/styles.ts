import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #184485;

  @media (max-width: 800px) {
    display: hidden;
    overflow: hidden;
    width: 0vw;
    height: 0vh;
  }
`;
