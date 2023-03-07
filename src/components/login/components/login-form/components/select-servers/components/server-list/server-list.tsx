import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { Plus, TrashCan } from 'mdi-material-ui'
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "src/components/modal/modal";
import { RootState } from "src/store/store";
import { SelectMethod } from "../new-server/select-method/select-method";
import { setCurrentServer, setServerListModal, deleteServer } from "src/store/server.slice";
import { Server } from "src/types/server/server.type";


interface ServerListProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const ServerList: React.FC<ServerListProps> = (props) => {
  const [visibleMethod, setVisibleMethod] = React.useState(false)
  const servers = useSelector((state: RootState) => state.servers.servers)
  const visibleModal = useSelector((state: RootState) => state.servers.serverListModal)

  const dispatch = useDispatch<any>();


  const handleNewServer = () => {
    hadnleCloseModal()
    setVisibleMethod(true)
  }

  const hadnleCloseModal = () => {
    props.setVisible(false)
    dispatch(setServerListModal(false))
  }

  const selectCurrentServer = (server: Server) => {
    dispatch(setCurrentServer(server))
  }

  const removeServer = (id: string) => {
    dispatch(deleteServer(id))
  }

  const renderList = () =>
    servers.map((item, index) => (
      <ListItem key={index} disableGutters >
        <IconButton onClick={() => removeServer(item.id)}>
          <TrashCan sx={{ color: '#909090' }} />
        </IconButton>
        <ListItemButton onClick={() => {
          hadnleCloseModal()
          selectCurrentServer(item)
        }} key={index}>
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
        visible={props.visible || visibleModal}
        setVisible={hadnleCloseModal}
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