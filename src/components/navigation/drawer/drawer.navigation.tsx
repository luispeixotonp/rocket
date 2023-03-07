import { ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import MuiSwipeableDrawer, { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'
import { useDispatch, useSelector } from 'react-redux'
import { setShowMenu } from 'src/store/menu.slice'
import { RootState } from 'src/store/store'

interface Props {
  hidden: boolean
  navWidth: number
  settings: Settings
  navVisible: boolean
  children: ReactNode
  setNavVisible: (value: boolean) => void
  saveSettings: (values: Settings) => void
}

const SwipeableDrawer = styled(MuiSwipeableDrawer)<SwipeableDrawerProps>({
  overflowX: 'hidden',
  transition: 'width .25s ease-in-out',
  '& ul': {
    listStyle: 'none'
  },
  '& .MuiListItem-gutters': {
    paddingLeft: 4,
    paddingRight: 4
  },
  '& .MuiDrawer-paper': {
    left: 'unset',
    right: 'unset',
    overflowX: 'hidden',
    transition: 'width .25s ease-in-out, box-shadow .25s ease-in-out'
  }
})

const Drawer = (props: Props) => {
  const { hidden, children, navWidth, navVisible, setNavVisible } = props
  const showMenu = useSelector((state: RootState) => state.menu.showMenu)
  const dispatch = useDispatch<any>()

  const MobileDrawerProps = {
    open: navVisible,
    onOpen: () => setNavVisible(true),
    onClose: () => {
      handleDrawerClose()
      setNavVisible(false)
    },
    ModalProps: {
      keepMounted: true // Better open performance on mobile.
    }
  }

  const DesktopDrawerProps = {
    open: true,
    onOpen: () => null,
    onClose: () => {
      handleDrawerClose()
      setNavVisible(false)
    }
  }

  const getVisibleDrawer = () => {
    if (showMenu) {
      return 'temporary'
    }

    if (!hidden) {
      return 'permanent'
    } else {
      return 'temporary'
    }
  }

  const getProps = () => {
    if (showMenu) {
      return DesktopDrawerProps
    }

    if (!hidden) {
      return DesktopDrawerProps
    } else {
      return MobileDrawerProps
    }
  }

  const handleDrawerClose = () => {
    dispatch(setShowMenu(false))
  }

  return (
    <SwipeableDrawer
      className='layout-vertical-nav'
      variant={getVisibleDrawer()}
      {...({...getProps()})}
      PaperProps={{ sx: { width: navWidth, marginTop: '125px' } }}
      sx={{
        width: navWidth,
        '& .MuiDrawer-paper': {
          borderRight: 0,
          backgroundColor: '#fff',
          borderRadius: '16px',
          height: 'auto',
          padding: '1rem',
          alignItems: 'center',
        }
      }}
    >
      {children}
    </SwipeableDrawer>
  )
}

export default Drawer
