import {Component} from 'react'

import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {BsFire} from 'react-icons/bs'
import {SiYoutubegaming} from 'react-icons/si'
import {TbTextPlus} from 'react-icons/tb'

import ReactContextObj from '../../ReactContext'

import {
  HeaderContainer,
  UnorderedListContainer,
  ListItem,
  Para,
  ContactInfoContainer,
  SocialIconsContainer,
  ImageSocial,
} from './StyledComponents'

import './index.css'

export default class HeaderLeft extends Component {
  render() {
    return (
      <ReactContextObj.Consumer>
        {value => {
          const {
            isDark,
            changeToTrending,
            changeToHome,
            routePath,
            changeToGaming,
            changeToSavedVideos,
          } = value

          const trendingStyle = routePath === 'Trending' ? 'trending-style' : ''
          const homeStyle = routePath === 'Home' ? 'home-style' : ''

          const gamingStyle = routePath === 'Gaming' ? 'gaming-style' : ''
          const savedStyle = routePath === 'SavedVideos' ? 'saved-style' : ''

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

          const linkStyle = isDark ? 'link-white' : 'link-dark'

          return (
            <HeaderContainer isDark={isDark}>
              <UnorderedListContainer isDark={isDark}>
                <Link
                  data-testid="home"
                  isDark={isDark}
                  onClick={this.onChangeToHome}
                  className={linkStyle}
                  to="/"
                >
                  <ListItem className={homeStyle}>
                    <AiFillHome className="home-icon" />
                    <Para>Home</Para>
                  </ListItem>
                </Link>
                <Link
                  isDark={isDark}
                  onClick={this.onChangeToTrending}
                  className={linkStyle}
                  to="/trending"
                >
                  <ListItem className={trendingStyle}>
                    <BsFire className="home-icon" />
                    <Para>Trending</Para>
                  </ListItem>
                </Link>

                <Link
                  isDark={isDark}
                  onClick={this.onChangeToGaming}
                  className={linkStyle}
                  to="/gaming"
                >
                  <ListItem className={gamingStyle}>
                    <SiYoutubegaming className="home-icon" />
                    <Para>Gaming</Para>
                  </ListItem>
                </Link>

                <Link
                  isDark={isDark}
                  onClick={this.onChangeToSavedVideos}
                  className={linkStyle}
                  to="/saved-videos"
                >
                  <ListItem className={savedStyle}>
                    <TbTextPlus className="home-icon" />
                    <Para>Saved videos</Para>
                  </ListItem>
                </Link>
              </UnorderedListContainer>

              <ContactInfoContainer>
                <Para>CONTACT US</Para>
                <SocialIconsContainer>
                  <ImageSocial
                    alt="facebook logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  />
                  <ImageSocial
                    alt="twitter logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  />
                  <ImageSocial
                    alt="linked in logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  />
                </SocialIconsContainer>
                <Para width="220px">
                  Enjoy! Now to see your channels and recommendations!
                </Para>
              </ContactInfoContainer>
            </HeaderContainer>
          )
        }}
      </ReactContextObj.Consumer>
    )
  }
}
