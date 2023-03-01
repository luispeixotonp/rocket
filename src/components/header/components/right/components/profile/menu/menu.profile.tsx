import React from "react";

import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import LogoutVariant from 'mdi-material-ui/LogoutVariant'
import { styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/store";
import { signOut } from "src/store/auth.slice";
import { useRouter } from "next/router";


interface MenuProfileProps {
  anchorEl: Element | null;
  handleDropdownClose: (url?: string) => void;
  menuItems: { title: string; icon: JSX.Element; url: string }[];
  styles: {
    py: number;
    px: number;
    width: string;
    display: string;
    alignItems: string;
    color: string;
    textDecoration: string;
    '& svg': { fontSize: string; color: string }
  };
}

const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}))




const MenuProfile: React.FC<MenuProfileProps> = (props) => {
  const name = useSelector((state: RootState) => state.auth.user?.NOMEUSU);
  const isManager = useSelector((state: RootState) => state.auth.isManager);
  const acronym = name ? name[0] : ''

  const dispatch = useDispatch<any>();
  const router = useRouter();

  const logout = () => {
    dispatch(signOut());
    router.push('/pages/login');

  }

  return <Menu
    anchorEl={props.anchorEl}
    open={Boolean(props.anchorEl)}
    onClose={() => props.handleDropdownClose()}
    sx={{ '& .MuiMenu-paper': { width: 230, marginTop: 4 } }}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  >
    <Box sx={{ pt: 2, pb: 3, px: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Badge
          overlap='circular'
          badgeContent={<BadgeContentSpan />}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Avatar alt={name} sx={{ width: '2.5rem', height: '2.5rem' }}>
            <text style={{ textTransform: 'uppercase' }}>{acronym}</text>
          </Avatar>
        </Badge>
        <Box sx={{ display: 'flex', marginLeft: 3, alignItems: 'flex-start', flexDirection: 'column' }}>
          <Typography sx={{ fontWeight: 600, textTransform: 'capitalize' }}>{name}</Typography>
          <Typography variant='body2' sx={{ fontSize: '0.8rem', color: 'text.disabled' }}>
            {isManager ? 'Supervisor' : 'Vendedor'}
          </Typography>
        </Box>
      </Box>
    </Box>
    <Divider sx={{ mt: 0, mb: 1 }} />
    {/* {props.menuItems.map((item, index) => (
      <MenuItem key={index} sx={{ p: 0 }} onClick={() => props.handleDropdownClose()}>
        <Box sx={props.styles}>
          {item.icon}
          {item.title}
        </Box>
      </MenuItem>
    ))} */}
    <Divider />
    <MenuItem sx={{ py: 2 }} onClick={() => logout()}>
      <LogoutVariant sx={{ marginRight: 2, fontSize: '1.375rem', color: 'text.secondary' }} />
      Sair
    </MenuItem>
  </Menu>
}

export default MenuProfile;