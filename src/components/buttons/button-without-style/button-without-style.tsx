import React from "react";
import { Button } from "./styles";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonWithoutStyle: React.FC<Props> = (props) => (
  <Button >
    {props.children}
  </Button>
)

export default ButtonWithoutStyle