import { Box, BoxProps, styled, Typography, TypographyProps } from '@mui/material';
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton'
import { ElementType } from 'react';
import themeConfig from 'src/configs/themeConfig';

export const MenuNavLink = styled(ListItemButton)<
  ListItemButtonProps & { component?: ElementType; target?: '_blank' | undefined }
>(({ theme }) => ({
  width: '100%',
  borderRadius: '10px',
  background: `#F6F6F6`,
  color: theme.palette.text.primary,
  margin: '2px 0',
  padding: '0.75rem',
  transition: 'opacity .25s ease-in-out',
  '&.active, &.active:hover': {
    boxShadow: theme.shadows[3],
    backgroundColor: `#184485`
  },
  '&.active .MuiTypography-root, &.active .MuiSvgIcon-root': {
    color: `${theme.palette.common.white} !important`
  }
}))

export const MenuItemTextMetaWrapper = styled(Box)<BoxProps>({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity .25s ease-in-out',
  ...(themeConfig.menuTextTruncate && { overflow: 'hidden' })
})



export const Text = styled(Typography)<TypographyProps>({
  fontSize: '0.875rem',
  fontWeight: 500,
  fontFamily: 'Poppins, sans-serif',
  color: '#383838',
})