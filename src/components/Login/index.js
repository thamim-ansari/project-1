import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginPageContainer,
  ResponsiveContainer,
  LoginContainer,
  LoginLogoImage,
  LoginFromContainer,
  FormInputContainer,
  FormLabel,
  FormInput,
  ShowPasswordContainer,
  ShowPasswordInput,
  ShowPasswordLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponent'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isPasswordShown: false,
    isErrorMsgShown: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassWord = () => {
    this.setState(prev => ({isPasswordShown: !prev.isPasswordShown}))
  }

  onFailure = errorMsg => {
    this.setState({isErrorMsgShown: true, errorMsg})
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      isPasswordShown,
      isErrorMsgShown,
      errorMsg,
    } = this.state
    const passwordType = isPasswordShown ? 'text' : 'password'
    const Token = Cookies.get('jwt_token')
    if (Token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const loginLogoImg = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginPageContainer isDarkTheme={isDarkTheme}>
              <ResponsiveContainer>
                <LoginContainer isDarkTheme={isDarkTheme}>
                  <LoginLogoImage src={loginLogoImg} alt="website logo" />
                  <LoginFromContainer onSubmit={this.onSubmitForm}>
                    <FormInputContainer>
                      <FormLabel htmlFor="username" isDarkTheme={isDarkTheme}>
                        USERNAME
                      </FormLabel>
                      <FormInput
                        type="text"
                        id="username"
                        value={username}
                        onChange={this.onChangeUsername}
                        isDarkTheme={isDarkTheme}
                        placeholder="Username"
                      />
                    </FormInputContainer>
                    <FormInputContainer>
                      <FormLabel htmlFor="password" isDarkTheme={isDarkTheme}>
                        PASSWORD
                      </FormLabel>
                      <FormInput
                        type={passwordType}
                        id="password"
                        value={password}
                        onChange={this.onChangePassword}
                        isDarkTheme={isDarkTheme}
                        placeholder="Password"
                      />
                      <ShowPasswordContainer>
                        <ShowPasswordInput
                          type="checkbox"
                          id="passwordCheckbox"
                          onChange={this.onClickShowPassWord}
                        />
                        <ShowPasswordLabel
                          htmlFor="passwordCheckbox"
                          isDarkTheme={isDarkTheme}
                        >
                          Show Password
                        </ShowPasswordLabel>
                      </ShowPasswordContainer>
                    </FormInputContainer>
                    <LoginButton type="submit">Login</LoginButton>
                  </LoginFromContainer>
                  {isErrorMsgShown && (
                    <ErrorMessage isDarkTheme={isDarkTheme}>
                      *{errorMsg}
                    </ErrorMessage>
                  )}
                </LoginContainer>
              </ResponsiveContainer>
            </LoginPageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
