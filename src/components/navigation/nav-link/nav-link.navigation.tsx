import { useRouter } from 'next/router'
import ListItem from '@mui/material/ListItem'
import themeConfig from 'src/configs/themeConfig'
import { NavLink } from 'src/@core/layouts/types'
import { Settings } from 'src/@core/context/settingsContext'
import { handleURLQueries } from 'src/@core/layouts/utils'
import { MenuItemTextMetaWrapper, MenuNavLink, Text } from './styles'
import SectionNavigation from '../section/section.navigation'

interface Props {
  item: NavLink
  settings: Settings
  navVisible?: boolean
  toggleNavVisibility: () => void
}

const NavLink = ({ item, navVisible, toggleNavVisibility }: Props) => {
  const router = useRouter()
  const routerPath = item.path === undefined ? '/' : `${item.path}`
  const isNavLinkActive = () => {
    if (router.pathname === item.path || handleURLQueries(router, item.path)) {
      return true
    } else {
      return false
    }
  }

  const handleClick = () => {
    if (routerPath) router.push(routerPath)
  }

  const renderLink = () => (
    <ListItem
      disablePadding
      className='nav-link'
      disabled={item.disabled || false}
      sx={{ mt: 1.5, px: '0 !important' }}
      onClick={handleClick}
    >
      <MenuNavLink
        component={'a'}
        className={isNavLinkActive() ? 'active' : ''}
        {...(item.openInNewTab ? { target: '_blank' } : null)}
        onClick={e => {
          if (item.path === undefined) {
            e.preventDefault()
            e.stopPropagation()
          }
          if (navVisible) {
            toggleNavVisibility()
          }
        }}
        sx={{
          ...(item.disabled ? { pointerEvents: 'none' } : { cursor: 'pointer' })
        }}
      >
        <MenuItemTextMetaWrapper>
          <Text {...(themeConfig.menuTextTruncate && { noWrap: true })}>{item.title}</Text>
        </MenuItemTextMetaWrapper>
      </MenuNavLink>
    </ListItem >
  )

  const renderSectionTitle = () => (
    <SectionNavigation
      item={item}
      isActive={isNavLinkActive()}
      route={routerPath} />
  )


  const renderMenuItem = () => {
    if (item.isSection) return renderSectionTitle()

    return renderLink()
  }

  return renderMenuItem()
}

export default NavLink
