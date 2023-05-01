import {Component} from 'react'

import {MdDarkMode} from 'react-icons/md'
import {RxTextAlignJustify} from 'react-icons/rx'
import {HiOutlineLogout} from 'react-icons/hi'
import {FiSun} from 'react-icons/fi'

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

          const bgColor = isDark ? 'bg-color-dark' : 'bg-color-white'
          const color = isDark ? 'color-white' : 'color-dark'
          const logoutStyle = isDark ? 'log-out' : 'nav-logout-button'

          return (
            <div className={`nav-container ${bgColor}`}>
              <img className="logo-image" alt="logo" src={imagUrl} />
              <ul className="desktop-list">
                {isDark ? (
                  <li>
                    <FiSun className={`dark-mode-icon ${color}`} />
                  </li>
                ) : (
                  <li>
                    <MdDarkMode className={`dark-mode-icon ${color}`} />
                  </li>
                )}
                <li>
                  <img
                    className="profile-image"
                    alt="profile"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  />
                </li>
                <li>
                  <button
                    className={`nav-logout-button ${logoutStyle}`}
                    type="button"
                  >
                    Logout
                  </button>
                </li>
              </ul>
              <ul className="mobile-list">
                {isDark ? (
                  <li>
                    <FiSun className={`dark-mode-icon ${color}`} />
                  </li>
                ) : (
                  <li>
                    <MdDarkMode className={`dark-mode-icon ${color}`} />
                  </li>
                )}
                <li>
                  <RxTextAlignJustify className={`dark-mode-icon ${color}`} />
                </li>
                <li>
                  <HiOutlineLogout className={`dark-mode-icon ${color}`} />
                </li>
              </ul>
            </div>
          )
        }}
      </ReactContextObj.Consumer>
    )
  }
}
