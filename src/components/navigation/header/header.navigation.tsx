import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { Avatar, CompanyText, Container, Divider, NameText } from './styles'
import * as Icon from 'mdi-material-ui'

const HeaderNavigation = () => {
  const name = useSelector((state: RootState) => state.auth.user?.NOMEUSU);
  const sellerSelected = useSelector((state: RootState) => state.auth.sellerCurrent);
  
return (
    <Container>
      <Avatar>
        <Icon.Account sx={{fontSize: '64px'}} />
      </Avatar>
      <CompanyText>
        Vendedor
      </CompanyText>
      <NameText>
        {sellerSelected ? (sellerSelected.CODVEND + ' - ' + sellerSelected.APELIDO) : name}
      </NameText>
      <Divider />
    </Container>
  )
}
export default HeaderNavigation