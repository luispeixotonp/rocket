// ** MUI Imports
import Box from '@mui/material/Box'
import * as Icon from 'mdi-material-ui'
import {  Wrapper } from './styles'
import { Autocomplete, InputAdornment, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { setSellerCurrent } from 'src/store/auth.slice'
import { Seller } from 'src/types/seller/seller.types'

const SellerSearchHeader = () => {
  const isManager = useSelector((state: RootState) => state.auth.isManager)
  const sellers = useSelector((state: RootState) => state.auth.sellers)
  const currentCODVEND = useSelector((state: RootState) => state.auth.CODVEND)
  const dispatch = useDispatch()

  const isSelected = (CODVEND: string) => {
    return currentCODVEND === CODVEND
  }

  const handleSelectSeller = (seller: Seller) => {
    dispatch(setSellerCurrent(seller))
  }
  

  return (
    <Wrapper hidden={!isManager} >
        <Autocomplete
      id="grouped-demo"
      options={sellers}
      groupBy={(option) => option.APELIDO[0]}
      renderOption={(props, option) => (
        <Box component="li" {...props} onClickCapture={
          () => {
            handleSelectSeller(option)
          }
        }>
          { isSelected(option.CODVEND) && <Icon.Check sx={{ mr: 2, color: 'primary.main' }} /> }
          {option.CODVEND} - {option.APELIDO} 
        </Box>
      )}
      sx={{ width: '100%' }}
      getOptionLabel={(option) => option.CODVEND + ' - ' + option.APELIDO}
      renderInput={(params) => <TextField sx={{ width: '100%' }} placeholder="Pesquisar vendedor" {...params}  InputProps={{
        ...params.InputProps,
        startAdornment: (
          <InputAdornment position="start">
            <Icon.Magnify />
          </InputAdornment>
        ),
      }}
      />}
    />
      </Wrapper>
  )
}

export default SellerSearchHeader


