import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {MdDarkMode, MdOutlineClear} from 'react-icons/md'
import {RxTextAlignJustify} from 'react-icons/rx'
import {HiOutlineLogout} from 'react-icons/hi'
import {FiSun} from 'react-icons/fi'

import {AiFillHome} from 'react-icons/ai'
import {BsFire} from 'react-icons/bs'
import {SiYoutubegaming} from 'react-icons/si'
import {TbTextPlus} from 'react-icons/tb'

import Popup from 'reactjs-popup'

import ReactContextObj from '../../ReactContext'

import './index.css'
import {
  UnorderedListContainer,
  ListItem,
  Para,
  ButtonsContainerPop,
  PopupContainer,
  PopupContainerLogout,
  Button,
} from './StyledComponents'

class Header extends Component {
  onLogoutFunc = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <ReactContextObj.Consumer>
        {value => {
          const {
            isDark,
            changeDark,
            changeToTrending,
            changeToHome,
            routePath,
            changeToGaming,
            changeToSavedVideos,
          } = value
          const imagUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const bgColor = isDark ? 'bg-color-dark' : 'bg-color-white'
          const color = isDark ? 'color-white' : 'color-dark'
          const logoutStyle = isDark ? 'log-out' : 'nav-logout-button'

          this.onChangeDark = () => {
            changeDark()
          }
          this.onChangeToTrending = () => {
            changeToTrending()
          }
          this.onChangeToHome = () => {
            changeToHome()
          }

          this.onChangeToGaming = () => {
            changeToGaming()
          }

          this.onChangeToSavedVideos = () => {
            changeToSavedVideos()
          }

          const trendingStyle = routePath === 'Trending' ? 'trending-style' : ''
          const homeStyle = routePath === 'Home' ? 'home-style' : ''

          const gamingStyle = routePath === 'Gaming' ? 'gaming-style' : ''
          const savedStyle = routePath === 'SavedVideos' ? 'saved-style' : ''

          const linkStyle = isDark ? 'link-white' : 'link-dark'

          return (
            <div data-testid="banner" className={`nav-container ${bgColor}`}>
              <Link to="/">
                <img className="logo-image" alt="website logo" src={imagUrl} />
              </Link>
              <ul className="desktop-list">
                {isDark ? (
                  <button
                    data-testid="theme"
                    onClick={this.onChangeDark}
                    className="dark-mode-button"
                    type="button"
                  >
                    <li data-testid="theme">
                      <FiSun className={`dark-mode-icon ${color}`} />
                    </li>
                  </button>
                ) : (
                  <button
                    data-testid="theme"
                    onClick={this.onChangeDark}
                    className="dark-mode-button"
                    type="button"
                  >
                    <li data-testid="theme">
                      <MdDarkMode className={`dark-mode-icon ${color}`} />
                    </li>
                  </button>
                )}
                <li>
                  <img
                    className="profile-image"
                    alt="profile"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  />
                </li>
                <li>
                  <Popup
                    trigger={
                      <button
                        className={`nav-logout-button ${logoutStyle}`}
                        type="button"
                      >
                        Logout
                      </button>
                    }
                    position="bottom center"
                  >
                    {close => (
                      <PopupContainerLogout isDark={isDark}>
                        <p className="popup-para">
                          Are you sure you want to logout?
                        </p>
                        <ButtonsContainerPop isDark={isDark}>
                          <Button
                            isDark={isDark}
                            type="button"
                            className="cancel-button"
                            onClick={close}
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={this.onLogoutFunc}
                            isDark={isDark}
                            type="button"
                            className="confirm-button"
                          >
                            Confirm
                          </Button>
                        </ButtonsContainerPop>
                      </PopupContainerLogout>
                    )}
                  </Popup>
                </li>
              </ul>
              <ul className="mobile-list">
                {isDark ? (
                  <button
                    data-testid="theme"
                    onClick={this.onChangeDark}
                    className="dark-mode-button"
                    type="button"
                  >
                    <li>
                      <FiSun className={`dark-mode-icon ${color}`} />
                    </li>
                  </button>
                ) : (
                  <button
                    data-testid="theme"
                    onClick={this.onChangeDark}
                    className="dark-mode-button"
                    type="button"
                  >
                    <li>
                      <MdDarkMode className={`dark-mode-icon ${color}`} />
                    </li>
                  </button>
                )}
                <li>
                  <Popup
                    position="bottom center"
                    trigger={
                      <button className="wrong-button" type="button">
                        <RxTextAlignJustify
                          className={`dark-mode-icon ${color}`}
                        />
                      </button>
                    }
                  >
                    {close => (
                      <PopupContainer isDark={isDark}>
                        <button type="button" className="close" onClick={close}>
                          <MdOutlineClear />
                        </button>
                        <UnorderedListContainer isDark={isDark}>
                          <Link
                            className={linkStyle}
                            onClick={this.onChangeToHome}
                            to="/"
                          >
                            <ListItem className={homeStyle}>
                              <AiFillHome className="home-icon" />
                              <Para>Home</Para>
                            </ListItem>
                          </Link>
                          <Link
                            className={linkStyle}
                            onClick={this.onChangeToTrending}
                            to="/trending"
                          >
                            <ListItem className={trendingStyle}>
                              <BsFire className="home-icon" />
                              <Para>Trending</Para>
                            </ListItem>
                          </Link>

                          <Link
                            className={linkStyle}
                            onClick={this.onChangeToGaming}
                            to="/gaming"
                          >
                            <ListItem className={gamingStyle}>
                              <SiYoutubegaming className="home-icon" />
                              <Para>Gaming</Para>
                            </ListItem>
                          </Link>

                          <Link
                            className={linkStyle}
                            onClick={this.onChangeToSavedVideos}
                            to="/saved-videos"
                          >
                            <ListItem className={savedStyle}>
                              <TbTextPlus className="home-icon" />
                              <Para>Saved videos</Para>
                            </ListItem>
                          </Link>
                        </UnorderedListContainer>
                      </PopupContainer>
                    )}
                  </Popup>
                </li>
                <li>
                  <Popup
                    trigger={
                      <button className="logout-icon-button" type="button">
                        <HiOutlineLogout
                          className={`dark-mode-icon ${color}`}
                        />
                      </button>
                    }
                    position="bottom center"
                  >
                    {close => (
                      <PopupContainerLogout isDark={isDark}>
                        <p className="popup-para">
                          Are you sure you want to logout?
                        </p>
                        <ButtonsContainerPop isDark={isDark}>
                          <Button
                            isDark={isDark}
                            type="button"
                            className="cancel-button"
                            onClick={close}
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={this.onLogoutFunc}
                            isDark={isDark}
                            type="button"
                            className="confirm-button"
                          >
                            Confirm
                          </Button>
                        </ButtonsContainerPop>
                      </PopupContainerLogout>
                    )}
                  </Popup>
                </li>
              </ul>
            </div>
          )
        }}
      </ReactContextObj.Consumer>
    )
  }
}

export default withRouter(Header)
