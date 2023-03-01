import styled from 'styled-components';
import IconMaterial from 'mdi-material-ui/Account'


// create props

interface Props {
  color?: string;
  position?: number;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  margin-bottom: ${(props) => {
    if (props.position === 1) return '50px';
    if (props.position === 2) return '10px';
    if (props.position === 3) return '0px';
  }};
`;

export const Avatar = styled.div<Props>`
  position: relative;
  width: ${(props) => {
    if (props.position === 1) return '90px';

    return '70px';
  }};
    
  height: ${(props) => {
    if (props.position === 1) return '90px';

    return '70px';
  }};
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid ${(props) => props.color};
`;

export const Icon = styled(IconMaterial)`
  width: 50px;
  height: 50px;
  color: #747179;
`;


export const Position = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  width: 25px;
  height: 25px;
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 0.950rem;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
`;

export const Cicle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #F5F5F5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.text`
  margin-top: 10px;
  font-size: 0.938rem;
  text-align: center;
  font-weight: bold;
  color: #fff;
  font-family: 'Poppins', sans-serif;
`;

export const Points = styled.text<Props>`
  color: ${(props) => props.color};
  font-size: 1rem;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
`;