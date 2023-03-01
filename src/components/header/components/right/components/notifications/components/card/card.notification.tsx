import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import MuiAvatar, { AvatarProps } from '@mui/material/Avatar'
import Typography, { TypographyProps } from '@mui/material/Typography'
import MuiMenuItem, { MenuItemProps } from '@mui/material/MenuItem'


interface CardNotificationProps {
  handleDropdownClose: () => void;
  index: number;
  item: {
    title: string;
    subtitle: string;
    icon: JSX.Element;
    date: string;
    color: string;
  };
}


const CardNotification: React.FC<CardNotificationProps> = (props): JSX.Element => {

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

  // ** Styled component for the subtitle in MenuItems
  const MenuItemSubtitle = styled(Typography)<TypographyProps>({
    flex: '1 1 100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  })

  const MenuItem = styled(MuiMenuItem)<MenuItemProps>(({ theme }) => ({
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    borderBottom: `1px solid ${theme.palette.divider}`
  }))


  return <MenuItem onClick={props.handleDropdownClose} key={props.index}>
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <Avatar
        color={props.item.color}
        sx={{
          backgroundColor: props.item.color,
          color: 'white',
        }}
      >
        {props.item.icon}
      </Avatar>
      <Box sx={{ mx: 4, flex: '1 1', display: 'flex', overflow: 'hidden', flexDirection: 'column' }}>
        <MenuItemTitle>{props.item.title}</MenuItemTitle>
        <MenuItemSubtitle variant='body2'>{props.item.subtitle}</MenuItemSubtitle>
      </Box>
      <Typography variant='caption' >
        {props.item.date}
      </Typography>
    </Box>
  </MenuItem>
}

export default CardNotification