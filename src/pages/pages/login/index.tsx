// ** React Imports
import { ReactNode } from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import { Container } from './styles'
import LoginForm from './components/login-form/login-form'
import { LoginBanner } from './components/login-banner/login-banner'

const LoginPage = () => {

  return (
    <Container>
      <LoginBanner />
      <LoginForm />
    </Container>
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default LoginPage
