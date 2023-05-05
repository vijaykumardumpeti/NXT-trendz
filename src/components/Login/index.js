import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'
import {
  FormContainer,
  Container,
  InputAndLabelContainer,
  Label,
  InputElement,
  CheckBoxAndLabelContainer,
  CheckboxInput,
  LoginButton,
  LoginImage,
} from './StyledComponents'

import ReactContextObj from '../../ReactContext'

export default class Login extends Component {
  state = {
    isClicked: false,
    username: '',
    password: '',
    errorMsg: '',
  }

  onChangeToText = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  successFunc = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    console.log(Cookies.get('jwt_token'))

    const {history} = this.props
    history.replace('/')
  }

  failureFunc = errorMsg => {
    this.setState({
      errorMsg,
    })
  }

  validateUserCredentials = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userCredentials = {
      username,
      password,
    }

    const requestUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    }

    const response = await fetch(requestUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.successFunc(data.jwt_token)
    }
    if (response.ok === false) {
      this.failureFunc(data.error_msg)
    }
  }

  render() {
    const {isClicked, username, password, errorMsg} = this.state

    const type = isClicked ? 'text' : 'password'

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ReactContextObj.Consumer>
        {value => {
          const {isDark} = value
          const imagUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <Container isDark={isDark}>
              <FormContainer
                onSubmit={this.validateUserCredentials}
                isDark={isDark}
              >
                <LoginImage alt="NXT LOGO" src={imagUrl} />
                <InputAndLabelContainer>
                  <Label isDark={isDark} htmlFor="username">
                    USERNAME
                  </Label>
                  <InputElement
                    onChange={this.onChangeUsername}
                    value={username}
                    isDark={isDark}
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </InputAndLabelContainer>
                <InputAndLabelContainer>
                  <Label isDark={isDark} htmlFor="password">
                    PASSWORD
                  </Label>
                  <InputElement
                    onChange={this.onChangePassword}
                    value={password}
                    isDark={isDark}
                    id="password"
                    type={type}
                    placeholder="Password"
                  />
                </InputAndLabelContainer>
                <CheckBoxAndLabelContainer>
                  <CheckboxInput
                    onClick={this.onChangeToText}
                    id="checkbox"
                    type="checkbox"
                  />
                  <Label isDark={isDark} htmlFor="checkbox">
                    Show Password
                  </Label>
                </CheckBoxAndLabelContainer>

                <LoginButton type="submit">Login</LoginButton>
                <p className="error-msg">{errorMsg}</p>
              </FormContainer>
            </Container>
          )
        }}
      </ReactContextObj.Consumer>
    )
  }
}
