import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { Cloud, Plus } from 'mdi-material-ui'
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "src/components/modal/modal";
import { RootState } from "src/store/store";
import { SelectMethod } from "../new-server/select-method/select-method";
import { setCurrentServer } from "src/store/server.slice";
import { Server } from "src/types/server/server.type";


interface ServerListProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const ServerList: React.FC<ServerListProps> = (props) => {
  const [visibleMethod, setVisibleMethod] = React.useState(false)
  const servers = useSelector((state: RootState) => state.servers.servers)

  const dispatch = useDispatch<any>();


  const handleNewServer = () => {
    props.setVisible(false)
    setVisibleMethod(true)
  }


  const selectCurrentServer = (server: Server) => {
    dispatch(setCurrentServer(server))
  }

  const renderList = () =>
    servers.map((item, index) => (
      <ListItem key={index} disableGutters >
        <ListItemButton onClick={() => {
          props.setVisible(false)
          selectCurrentServer(item)
        }} key={index}>
          <ListItemAvatar>
            <Avatar>
              <Cloud />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.name}
            secondary={item.ipServer}
          />
        </ListItemButton>
      </ListItem>
    ))

  const renderNewServer = () => (
    <ListItem disableGutters>
      <ListItemButton
        autoFocus
        onClick={() => handleNewServer()}
      >
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'primary.light' }}>
            <Plus sx={{ color: '#fff' }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Adicionar novo servidor" />
      </ListItemButton>
    </ListItem>
  )

  return (
    <>
      <Modal
        title="Servidores"
        visible={props.visible}
        setVisible={props.setVisible}
      >
        <List sx={{
          pt: 0,
          maxHeight: 600,
          overflow: 'auto',
        }}>
          {renderList()}
        </List>
        <List sx={{ pt: 0 }}>
          {renderNewServer()}
        </List>
      </Modal>
      <SelectMethod visible={visibleMethod} setVisible={setVisibleMethod} />
    </>
  )
}