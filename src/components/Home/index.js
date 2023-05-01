import {Component} from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import {MdOutlineClear} from 'react-icons/md'
import Header from '../Header'

import HeaderLeft from '../HeaderLeft'

import ReactContextObj from '../../ReactContext'

import {
  DisplayContainer,
  PremiumContainer,
  HomeContainer,
  ImagePremium,
  Para,
  ButtonGetIt,
  ResultContainer,
  InputContainer,
  InputElement,
  NormalContainer,
  IconContainer,
} from './StyledComponents'

import './index.css'

export default class Home extends Component {
  render() {
    return (
      <ReactContextObj.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <HomeContainer>
                <HeaderLeft />
                <DisplayContainer>
                  <PremiumContainer>
                    <div className="primium-container">
                      <ImagePremium
                        alt="hh"
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      />
                      <Para>Buy Nxt Watch Premium prepaid plans with UPI</Para>
                      <ButtonGetIt type="button">GET IT NOW</ButtonGetIt>
                    </div>
                    <button className="premium-wrong-button" type="button">
                      <MdOutlineClear />
                    </button>
                  </PremiumContainer>
                  <ResultContainer isDark={isDark}>
                    <InputContainer isDark={isDark}>
                      <InputElement
                        isDark={isDark}
                        type="search"
                        placeholder="random"
                      />
                      <IconContainer isDark={isDark}>
                        <BiSearchAlt className="search-icon" />
                      </IconContainer>
                    </InputContainer>
                    <NormalContainer>
                      <img
                        className="no-videos-image"
                        alt="no videos"
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                      />
                      <h1 className="heading">No Search results found</h1>
                      <p className="para">
                        Try different key words or remove search filter
                      </p>
                      <button className="retry-button" type="button">
                        Retry
                      </button>
                    </NormalContainer>
                  </ResultContainer>
                </DisplayContainer>
              </HomeContainer>
            </>
          )
        }}
      </ReactContextObj.Consumer>
    )
  }
}
