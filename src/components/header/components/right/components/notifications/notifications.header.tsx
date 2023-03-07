// ** React Imports
import { useState, SyntheticEvent, ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import { styled, Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiMenu, { MenuProps } from '@mui/material/Menu'
import MuiMenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import * as Icon from 'mdi-material-ui'

// ** Icons Imports
import BellOutline from 'mdi-material-ui/BellOutline'

// ** Third Party Components
import PerfectScrollbarComponent from 'react-perfect-scrollbar'
import { MenuContainer, Wrapper } from './styles'
import CardNotification from './components/card/card.notification'

// ** Styled Menu component
const Menu = styled(MuiMenu)<MenuProps>(({ theme }) => ({
  '& .MuiMenu-paper': {
    width: 380,
    overflow: 'hidden',
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  '& .MuiMenu-list': {
    padding: 0
  }
}))

// ** Styled MenuItem component
const MenuItem = styled(MuiMenuItem)<MenuItemProps>(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.divider}`
}))

const styles = {
  maxHeight: 349,
  '& .MuiMenuItem-root:last-of-type': {
    border: 0
  }
}

// ** Styled PerfectScrollbar component
const PerfectScrollbar = styled(PerfectScrollbarComponent)({
  ...styles
})



const NotificationHeader = () => {
  // ** States
  const [anchorEl, setAnchorEl] = useState<(EventTarget & Element) | null>(null)

  // ** Hook
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = () => {
    setAnchorEl(null)
  }

  const ScrollWrapper = ({ children }: { children: ReactNode }) => {
    if (hidden) {
      return <Box sx={{ ...styles, overflowY: 'auto', overflowX: 'hidden' }}>{children}</Box>
    } else {
      return (
        <PerfectScrollbar options={{ wheelPropagation: false, suppressScrollX: true }}>{children}</PerfectScrollbar>
      )
    }
  }
  const dataList = [
    {
      title: 'Nova venda realizada',
      subtitle: '1 hora atrás',
      icon: <Icon.ShoppingOutline />,
      date: 'Hoje',
      color: '#00B87C'
    },
    {
      title: 'Pedido entregue',
      subtitle: '30 minutos atrás',
      icon: <Icon.Check />,
      date: 'Hoje',
      color: '#00B87C'
    },
    {
      title: 'Novo cliente cadastrado',
      subtitle: '2 horas atrás',
      icon: <Icon.Account />,
      date: 'Hoje',
      color: '#FFA500'
    },
    {
      title: 'Pagamento aprovado',
      subtitle: '1 dia atrás',
      icon: <Icon.CreditCardOutline />,
      date: 'Ontem',
      color: '#00B87C'
    },
    {
      title: 'Produto esgotado',
      subtitle: '5 horas atrás',
      icon: <Icon.AlertCircleOutline />,
      date: 'Hoje',
      color: '#FF0000'
    },
    {
      title: 'Recebido pedido de reposição de estoque',
      subtitle: '2 dias atrás',
      icon: <Icon.FileTable />,
      date: 'Anteontem',
      color: '#00B87C'
    },
    {
      title: 'Promoção relâmpago ativa',
      subtitle: '3 horas atrás',
      icon: <Icon.LightningBoltOutline />,
      date: 'Hoje',
      color: '#FFD700'
    },
    {
      title: 'Pedido cancelado pelo cliente',
      subtitle: '5 horas atrás',
      icon: <Icon.CloseCircleOutline />,
      date: 'Hoje',
      color: '#FF0000'
    },
    {
      title: 'Recebido pagamento em duplicidade',
      subtitle: '1 hora atrás',
      icon: <Icon.Cash />,
      date: 'Hoje',
      color: '#00B87C'
    },
    {
      title: 'Problema com envio do produto',
      subtitle: '2 dias atrás',
      icon: <Icon.Alert />,
      date: 'Anteontem',
      color: '#FF0000'
    },
  ];

  return (
    <Wrapper>
      <IconButton color='inherit' aria-haspopup='true' onClick={handleDropdownOpen} aria-controls='customized-menu'>
        <BellOutline />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleDropdownClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem disableRipple>
          <MenuContainer>
            <Typography sx={{ fontWeight: 600 }}>Notificações</Typography>
            <Chip
              size='small'
              label='8 Novas'
              color='primary'
              sx={{ height: 20, fontSize: '0.75rem', fontWeight: 500, borderRadius: '10px' }}
            />
          </MenuContainer>
        </MenuItem>
        <ScrollWrapper>
          {dataList.map((item, index) => {
            return (
              <CardNotification
                key={index}
                handleDropdownClose={handleDropdownClose}
                index={index}
                item={item} />
            )
          })
          }
        </ScrollWrapper>
      </Menu>
      </Wrapper>
  )
}

export default NotificationHeader


