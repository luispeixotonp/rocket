// ** React Imports
import { useState, SyntheticEvent, ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { styled, Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiMenu, { MenuProps } from '@mui/material/Menu'
import MuiMenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import * as Icon from 'mdi-material-ui'

// ** Third Party Components
import PerfectScrollbarComponent from 'react-perfect-scrollbar'
import { MenuContainer, Text, Wrapper } from './styles'
import { TextField } from '@mui/material'
import { Seller } from 'src/types/seller/seller.types'
import CardSeller from './components/card/card.seller'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store'

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



const SellerHeader = () => {
  // ** States
  const [anchorEl, setAnchorEl] = useState<(EventTarget & Element) | null>(null)
  const [search, setSearch] = useState<string>('')

  // ** Hook
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
  const sellerCurrent = useSelector((state: RootState) => state.auth.sellerCurrent)
  const isManager = useSelector((state: RootState) => state.auth.isManager)
  const sellers = useSelector((state: RootState) => state.auth.sellers)

  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const searchFilter = () => {
    const data = sellers
    if (search.length > 0) {
      return data.filter((item: Seller) => {
        return item.APELIDO.toLowerCase().includes(search.toLowerCase())
      })
    } else {
      return data
    }
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

  return (
    <Wrapper hidden={!isManager}>
      <IconButton color='inherit' aria-haspopup='true' onClick={handleDropdownOpen} aria-controls='customized-menu' sx={{ gap: 2 }}>
        <Icon.Account />
        <Text variant='h6' sx={{ ml: 1, fontWeight: 600 }}>
          {sellerCurrent ? sellerCurrent.APELIDO : 'Vendedor'}
        </Text>
        <Icon.ChevronDown />
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
            <TextField sx={{ width: '100%' }} label='Pesquisar vendedor' variant='outlined' InputProps={{ endAdornment: <Icon.Magnify /> }} onChange={handleSearch} />
          </MenuContainer>
        </MenuItem>
        <ScrollWrapper>
          {searchFilter().map((item, index) => {
            return (
              <CardSeller
                key={index}
                index={index}
                handleDropdownClose={handleDropdownClose}
                item={item} />
            )
          })
          }
        </ScrollWrapper>
      </Menu>
      </Wrapper>
  )
}

export default SellerHeader


