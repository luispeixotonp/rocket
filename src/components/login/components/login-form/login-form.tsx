import { ChangeEvent, MouseEvent, ReactNode, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'

import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

import BlankLayout from 'src/@core/layouts/BlankLayout'
import { Container } from './styles'
import { SelectServers } from './components/select-servers/select-servers'
import { Validate } from 'src/utils/validate/validate.utis'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { Alert, AlertTitle } from '@mui/material'
import { login, resetAuthState } from 'src/store/auth.slice'



interface State {
  password: string
  showPassword: boolean
}

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LoginForm = () => {
  const serverSelected = useSelector((state: RootState) => state.servers.currentServer)
  const statusLogin = useSelector((state: RootState) => state.auth.loginFetchStatus)
  const user = useSelector((state: RootState) => state.auth.user)
  const dispatch = useDispatch<any>()

  useEffect(() => {
    redirect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusLogin, user])

  const redirect = () => {
    if (statusLogin === 'success' && user) {
      router.push('/')
    } else if (statusLogin === 'error') {
      setErrorLogin({
        error: true,
        message: 'Usuário ou senha inválidos'
      })
    }
    dispatch(resetAuthState())
  }

  const [errorUsername, setErrorUsername] = useState({
    error: false,
    message: ''
  })
  const [errorPassword, setErrorPassword] = useState({
    error: false,
    message: ''
  })

  const [serverError, setServerError] = useState({
    error: false,
    message: ''
  })

  const [errorLogin, setErrorLogin] = useState({
    error: false,
    message: ''
  })

  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false
  })

  // ** Hook
  const theme = useTheme()
  const router = useRouter()

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const renderErrorServer = (): ReactNode => {
    if (serverError.error) {
      return (
        <Alert severity="error" sx={{ marginBottom: '1rem' }}>
          <AlertTitle>Error</AlertTitle>
          {serverError.message}
        </Alert>
      )
    }
  }

  const renderErrorLogin = (): ReactNode => {
    if (errorLogin.error) {
      return (
        <Alert severity="error" sx={{ marginBottom: '1rem' }}>
          <AlertTitle>Error</AlertTitle>
          {errorLogin.message}

        </Alert>
      )
    }
  }


  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const validateForm = (username: string, password: string): boolean => {
    let isError = false
    const resetError = () => {
      return {
        error: false,
        message: ''
      }
    }
    setErrorUsername(resetError())
    setErrorPassword(resetError())
    setServerError(resetError())

    if (!Validate.isNotEmpty(username)) {
      setErrorUsername({
        error: true,
        message: 'Usuário não pode ser vazio'
      })
      isError = true
    }

    if (!Validate.isNotEmpty(password)) {
      setErrorPassword({
        error: true,
        message: 'Senha não pode ser vazia'
      })
      isError = true
    }

    if (serverSelected === null) {
      setServerError({
        error: true,
        message: 'Selecione um servidor'
      })
      isError = true
    }

    return isError
  }

  const auth = (user: string, password: string) => {
    dispatch(login({
      user,
      password,
    }))
  }


  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;

    if (validateForm(username, password)) return;
    console.log('submit')
    auth(username, password)
  }

  return (
    <Container>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography
              variant='h6'
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: 'Capitalize',
                fontSize: '2.5rem !important',
                color: theme.palette.primary.dark
              }}
            >
              Performance
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              fullWidth
              id='username'
              label='Usuário'
              error={errorUsername.error}
              helperText={errorUsername.message}
              sx={{ marginBottom: 4 }}
            />
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-login-password'>Senha</InputLabel>
              <OutlinedInput
                label='Senha'
                value={values.password}
                id='password'
                error={errorPassword.error}
                onChange={handleChange('password')}
                type={values.showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <SelectServers />
            {renderErrorServer()}
            {renderErrorLogin()}
            <Button
              fullWidth
              size='large'
              variant='contained'
              sx={{ marginBottom: 7 }}
              type='submit'
            >
              Logar
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>


  )
}

LoginForm.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default LoginForm
