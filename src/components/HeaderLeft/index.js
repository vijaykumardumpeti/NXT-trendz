import {Component} from 'react'

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
          const {isDark} = value
          return (
            <HeaderContainer isDark={isDark}>
              <UnorderedListContainer>
                <ListItem>
                  <AiFillHome className="home-icon" />
                  <Para>Home</Para>
                </ListItem>
                <ListItem>
                  <BsFire className="home-icon" />
                  <Para>Trending</Para>
                </ListItem>
                <ListItem>
                  <SiYoutubegaming className="home-icon" />
                  <Para>Gaming</Para>
                </ListItem>
                <ListItem>
                  <TbTextPlus className="home-icon" />
                  <Para>Saved videos</Para>
                </ListItem>
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
