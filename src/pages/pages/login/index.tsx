// ** React Imports
import { ReactNode } from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import LoginForm from '../../../components/login/components/login-form/login-form'
import LoadingLogin from '../../../components/login/components/loading/loading.login'
import LoginBanner from '../../../components/login/components/login-banner/login-banner'
import Container from './styles'

const LoginPage = () => {

  return (
    <>
      <Container>
        <LoginBanner />
        <LoginForm />
      </Container>
      <LoadingLogin />
    </>
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default LoginPage
