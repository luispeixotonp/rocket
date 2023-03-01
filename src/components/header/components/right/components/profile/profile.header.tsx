// ** React Imports
import { useState, SyntheticEvent } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

import Avatar from '@mui/material/Avatar'


// ** Icons Imports
import CogOutline from 'mdi-material-ui/CogOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import MenuProfile from './menu/menu.profile'
import { IconButton } from '@mui/material'
import { Container } from './styles'

const ProfileHeader = () => {
  // ** States
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  // ** Hooks
  const router = useRouter()

  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = (url?: string) => {
    if (url) {
      router.push(url)
    }
    setAnchorEl(null)
  }

  const styles = {
    py: 2,
    px: 4,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: 'text.primary',
    textDecoration: 'none',
    '& svg': {
      fontSize: '1.375rem',
      color: 'text.secondary'
    }
  }

  const menuItems = [
    {
      title: 'Perfil',
      icon: <AccountOutline sx={{ marginRight: 2 }} />,
      url: '/pages/profile'
    },
    {
      title: 'Configurações',
      icon: <CogOutline sx={{ marginRight: 2 }} />,
      url: '/pages/settings'
    },
    {
      title: 'FAQ',
      icon: <HelpCircleOutline sx={{ marginRight: 2 }} />,
      url: '/pages/faq'
    },
  ]


  return (
    <Container>
      <IconButton onClick={handleDropdownOpen} aria-label='expand row' size='small'>
        <Avatar
          onClick={handleDropdownOpen}
          sx={{ width: 40, height: 40 }}
        />
      </IconButton>
      <MenuProfile
        anchorEl={anchorEl}
        handleDropdownClose={handleDropdownClose}
        menuItems={menuItems}
        styles={styles}
      />
    </Container>
  )
}

export default ProfileHeader


