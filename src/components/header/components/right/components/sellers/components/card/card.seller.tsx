import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import MuiAvatar, { AvatarProps } from '@mui/material/Avatar'
import Typography, { TypographyProps } from '@mui/material/Typography'
import MuiMenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import { Seller } from 'src/types/seller/seller.types'
import { RootState } from 'src/store/store'
import { useDispatch, useSelector } from 'react-redux'
import { setSellerCurrent } from 'src/store/auth.slice'


interface CardNotificationProps {
  index: number;
  item: Seller
  handleDropdownClose: () => void
}


const CardSeller: React.FC<CardNotificationProps> = (props): JSX.Element => {
  const currentCODVEND = useSelector((state: RootState) => state.auth.CODVEND)
  const dispatch = useDispatch()

  // ** Styled Avatar component
  const Avatar = styled(MuiAvatar)<AvatarProps>({
    width: '2.375rem',
    height: '2.375rem',
    fontSize: '1.125rem'
  })

  // ** Styled component for the title in MenuItems
  const MenuItemTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
    fontWeight: 600,
    flex: '1 1 100%',
    overflow: 'hidden',
    fontSize: '0.875rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    marginBottom: theme.spacing(0.75)
  }))

  const MenuItem = styled(MuiMenuItem)<MenuItemProps>(({ theme }) => ({
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    borderBottom: `1px solid ${theme.palette.divider}`
  }))

  const handleSelectSeller = (seller: Seller) => {
    dispatch(setSellerCurrent(seller))
    props.handleDropdownClose()
  }


  return <MenuItem key={props.index} onClick={() => handleSelectSeller(props.item)}>
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <Avatar
        sx={currentCODVEND === props.item.CODVEND ?{
          backgroundColor: 'primary.main',
          color: 'primary.contrastText'
        } : {}}
      >
        {props.item.APELIDO.length > 0 ? props.item.APELIDO[0] : ''}
      </Avatar>
      <Box sx={{ mx: 4, flex: '1 1', display: 'flex', overflow: 'hidden', flexDirection: 'column' }}>
        <MenuItemTitle>{props.item.APELIDO}</MenuItemTitle>
      </Box>
    </Box>
  </MenuItem>
}

export default CardSeller