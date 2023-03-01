import { Container } from './styles'
import Left from './components/left/left.header'
import Right from './components/right/right.header'

const AppBarContent = () => {
  return (
    <Container>
      <Left />
      <Right />
    </Container>
  )
}

export default AppBarContent
