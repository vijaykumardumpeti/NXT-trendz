import {Component} from 'react'

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
  render() {
    return (
      <ReactContextObj.Consumer>
        {value => {
          const {isDark} = value
          const imagUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <Container isDark={isDark}>
              <FormContainer isDark={isDark}>
                <LoginImage alt="NXT LOGO" src={imagUrl} />
                <InputAndLabelContainer>
                  <Label isDark={isDark} htmlFor="username">
                    USERNAME
                  </Label>
                  <InputElement
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
                    isDark={isDark}
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
                </InputAndLabelContainer>
                <CheckBoxAndLabelContainer>
                  <CheckboxInput id="checkbox" type="checkbox" />
                  <Label isDark={isDark} htmlFor="checkbox">
                    Show Password
                  </Label>
                </CheckBoxAndLabelContainer>

                <LoginButton type="submit">Login</LoginButton>
              </FormContainer>
            </Container>
          )
        }}
      </ReactContextObj.Consumer>
    )
  }
}
