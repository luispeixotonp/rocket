import React from "react";
import { format } from 'date-fns';
import local from 'date-fns/locale/pt-BR';
import { Container, Icon, Text } from "./styles";


const CurrentDateHeader = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'd MMMM yyyy', { locale: local });

  return (
    <Container>
      <Icon />
      <Text>
        {formattedDate}
      </Text>
    </Container>

  )
}

export default CurrentDateHeader;
