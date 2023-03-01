import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { AcronymText, Avatar, CompanyText, Container, Divider, NameText } from './styles'

const HeaderNavigation = () => {
  const name = useSelector((state: RootState) => state.auth.user?.NOMEUSU);
  const isManager = useSelector((state: RootState) => state.auth.isManager);
  const acronym = name ? name[0] : ''

  return (
    <Container>
      <Avatar>
        <AcronymText>
          {acronym}
        </AcronymText>
      </Avatar>
      <CompanyText>
        {isManager ? 'Gerente' : 'Vendedor'}
      </CompanyText>
      <NameText>
        {name}
      </NameText>
      <Divider />
    </Container>
  )
}
export default HeaderNavigation