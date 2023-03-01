import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { CodeBraces, LinkPlus } from 'mdi-material-ui'
import React from "react";
import { Modal } from "src/components/modal/modal";
import NewServerCode from "../new-server-code/new-server-code";
import NewServerManual from "../new-server-manual/new-server-manual";

interface SelectMethodProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const SelectMethod: React.FC<SelectMethodProps> = (props) => {
  const [visibleFormManual, setVisibleFormManual] = React.useState(false)
  const [visibleFormCode, setVisibleFormCode] = React.useState(false)

  const handleFormManual = () => {
    props.setVisible(false)
    setVisibleFormManual(true)
  }

  const handleFormCode = () => {
    props.setVisible(false)
    setVisibleFormCode(true)
  }

  const render = (title: string, icon: React.ReactNode, onClick: () => void) => (
    <ListItem disableGutters>
      <ListItemButton
        autoFocus
        onClick={onClick}
      >
        <ListItemAvatar>
          <Avatar>
            {icon}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  )

  return (
    <>
      <Modal
        disableButtonClose
        title="Selecione o Método"
        visible={props.visible}
        setVisible={props.setVisible}
      >
        <List sx={{ pt: 0 }}>
          {render(
            'Adicionar Manualmente',
            <LinkPlus />,
            () => handleFormManual()
          )}

          {render(
            'Inserir Código',
            <CodeBraces />,
            () => handleFormCode()
          )}
        </List>
      </Modal>
      <NewServerManual visible={visibleFormManual} setVisible={setVisibleFormManual} />
      <NewServerCode visible={visibleFormCode} setVisible={setVisibleFormCode} />
    </>
  )
}