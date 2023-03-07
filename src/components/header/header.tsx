import { Container } from './styles'
import Left from './components/left/left.header'
import Right from './components/right/right.header'
import SellerSearchHeader from './components/sellers-search/selllers-search.header'

const AppBarContent = () => {
  return (
    <Container>
      <Left />
      <SellerSearchHeader />
      <Right />
    </Container>
  )
}

export default AppBarContent
