import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import Cookies from 'js-cookie'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

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
  VideosContainer,
  VideoItemContainer,
  VideoDescriptionContainer,
  VideoHeading,
  VideoPara,
  ReactPlayerContainer,
  Img,
} from './StyledComponents'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  emptyList: 'EMPTY_LIST',
}

export default class Home extends Component {
  state = {
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    videosLists: [],
  }

  componentDidMount() {
    this.apiCall()
  }

  apiCall = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (data.videos.length === 0) {
      this.setState({
        apiStatus: apiStatusConstants.emptyList,
      })
    } else {
      const videos = data.videos.map(videoObj => ({
        id: videoObj.id,
        publishedAt: videoObj.published_at,
        thumbnailUrl: videoObj.thumbnail_url,
        title: videoObj.title,
        viewCount: videoObj.view_count,
        channel: {
          name: videoObj.channel.name,
          profileImageUrl: videoObj.channel.profile_image_url,
        },
      }))

      if (response.ok === true) {
        this.setState({
          apiStatus: apiStatusConstants.success,
          videosLists: videos,
        })
      } else {
        this.setState({
          apiStatus: apiStatusConstants.failure,
        })
      }
    }
  }

  reloadApiCall = () => {
    this.apiCall()
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  failureView = isDark => {
    const imgUrl = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <NormalContainer>
        <img className="no-videos-image" alt="failure view" src={imgUrl} />
        <h1 className="heading">Oops! Something Went Wrong</h1>
        <p className="para">
          We are having some trouble to complete your request. Please try agin.
        </p>
        <button
          onClick={this.reloadApiCall}
          className="retry-button"
          type="button"
        >
          Retry
        </button>
      </NormalContainer>
    )
  }

  loaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#53722f" height="50" width="50" />
    </div>
  )

  emptyListView = () => (
    <NormalContainer>
      <img
        className="no-videos-image"
        alt="no videos"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
      />
      <h1 className="heading">No Search results found</h1>
      <p className="para">Try different key words or remove search filter</p>
      <button
        onClick={this.reloadApiCall}
        className="retry-button"
        type="button"
      >
        Retry
      </button>
    </NormalContainer>
  )

  successView = isDark => {
    const {videosLists} = this.state
    return (
      <VideosContainer isDark={isDark}>
        {videosLists.map(videoObj => {
          const {
            id,
            title,
            thumbnailUrl,
            channel,
            viewCount,
            publishedAt,
          } = videoObj
          const {name, profileImageUrl} = channel

          const dateString = formatDistanceToNow(new Date(publishedAt))

          console.log(dateString)

          const linkStyle = isDark
            ? 'link-element-style-1'
            : 'link-element-style-2'

          return (
            <Link className={linkStyle} to={`/videos/${id}`}>
              <VideoItemContainer key={id}>
                <ReactPlayerContainer>
                  <Img alt="channel logo" src={thumbnailUrl} />
                </ReactPlayerContainer>
                <VideoDescriptionContainer>
                  <div>
                    <img
                      className="video-profiles"
                      alt="channel logo"
                      src={profileImageUrl}
                    />
                  </div>
                  <div className="video-text-container">
                    <VideoHeading>{title}</VideoHeading>
                    <div className="view">
                      <VideoPara>{name}</VideoPara>
                      <div className="views-container">
                        <VideoPara>{viewCount} views</VideoPara>
                        <VideoPara>{dateString}</VideoPara>
                      </div>
                    </div>
                  </div>
                </VideoDescriptionContainer>
              </VideoItemContainer>
            </Link>
          )
        })}
      </VideosContainer>
    )
  }

  switchMethod = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.failure:
        return this.failureView(isDark)

      case apiStatusConstants.success:
        return this.successView()

      case apiStatusConstants.inProgress:
        return this.loaderView()

      case apiStatusConstants.emptyList:
        return this.emptyListView()

      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state

    return (
      <ReactContextObj.Consumer>
        {value => {
          const {isDark} = value
          return (
            <div>
              <Header />
              <HomeContainer data-testid="home">
                <HeaderLeft />
                <DisplayContainer>
                  <PremiumContainer>
                    <div className="primium-container">
                      <ImagePremium
                        alt="nxt watch logo"
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      />
                      <Para>Buy Nxt Watch Premium prepaid plans with UPI</Para>
                      <ButtonGetIt type="button">GET IT NOW</ButtonGetIt>
                    </div>
                    <button
                      data-testid="close"
                      className="premium-wrong-button"
                      type="button"
                    >
                      <MdOutlineClear />
                    </button>
                  </PremiumContainer>
                  <ResultContainer isDark={isDark}>
                    <InputContainer isDark={isDark}>
                      <InputElement
                        onChange={this.onChangeSearchInput}
                        value={searchInput}
                        isDark={isDark}
                        type="search"
                        placeholder="random"
                      />
                      <IconContainer isDark={isDark}>
                        <BiSearchAlt
                          data-testid="searchButton"
                          className="search-icon"
                          onClick={this.reloadApiCall}
                        />
                      </IconContainer>
                    </InputContainer>
                    {this.switchMethod(isDark)}
                  </ResultContainer>
                </DisplayContainer>
              </HomeContainer>
            </div>
          )
        }}
      </ReactContextObj.Consumer>
    )
  }
}
