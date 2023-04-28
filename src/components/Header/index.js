import {Component} from 'react'

import {MdDarkMode} from 'react-icons/md'

import ReactContextObj from '../../ReactContext'

import './index.css'

export default class Header extends Component {
  render() {
    return (
      <ReactContextObj.Consumer>
        {value => {
          const {isDark} = value
          const imagUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <div>
              <img alt="logo" src={imagUrl} />
              <ul className="desktop-list">
                <li>
                  <MdDarkMode className="dark-mode-icon" />
                </li>
                <li>
                  <img
                    alt="profile"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  />
                </li>
                <li>
                  <button type="button">Logout</button>
                </li>
              </ul>
            </div>
          )
        }}
      </ReactContextObj.Consumer>
    )
  }
}
