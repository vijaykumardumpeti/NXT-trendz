import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import {Link} from 'react-router-dom'

import {SiYoutubegaming} from 'react-icons/si'

import './index.css'
import Header from '../Header'
import HeaderLeft from '../HeaderLeft'

import ReactContextObj from '../../ReactContext'

import {
  Container,
  TrendingContainer,
  TrendingNav,
  Heading,
  ImageContainer,
  VideosContainer,
  VideoItemContainer,
  VideoDescriptionContainer,
  VideoHeading,
  VideoPara,
  ReactPlayerContainer,
  VideosBgContainer,
  NormalContainer,
} from './StyledComponents'

const GamingVideosLists = [
  {
    id: 'b214dc8a-b126-4d15-8523-d37404318347',
    title: 'Drop Stack Ball',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch/drop-stack-ball-img.png',
    viewCount: '44K',
  },
  {
    id: 'b214dc8a-b126-4d15-8523-d37404318347',
    title: 'Drop Stack Ball',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch/drop-stack-ball-img.png',
    viewCount: '44K',
  },
  {
    id: 'b214dc8a-b126-4d15-8523-d37404318347',
    title: 'Drop Stack Ball',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch/drop-stack-ball-img.png',
    viewCount: '44K',
  },
  {
    id: 'b214dc8a-b126-4d15-8523-d37404318347',
    title: 'Drop Stack Ball',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch/drop-stack-ball-img.png',
    viewCount: '44K',
  },
]

console.log(GamingVideosLists)

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
console.log(apiStatusConstants)

export default class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    GamingVideosList: [],
  }

  componentDidMount() {
    this.getGamingVideosList()
  }

  getGamingVideosList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.videos)

    const videos = data.videos.map(o => ({
      id: o.id,
      thumbnailUrl: o.thumbnail_url,
      title: o.title,
      viewCount: o.view_count,
    }))

    console.log(videos)
    if (response.ok === true) {
      this.setState({
        apiStatus: apiStatusConstants.success,
        GamingVideosList: videos,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  failureView = isDark => {
    const imgUrl = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <NormalContainer isDark={isDark}>
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

  reloadApiCall = () => {
    this.getGamingVideosList()
  }

  loaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#53722f" height="50" width="50" />
    </div>
  )

  switchMethod = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.failure:
        return this.failureView(isDark)

      case apiStatusConstants.success:
        return this.successView(isDark)

      case apiStatusConstants.inProgress:
        return this.loaderView()

      default:
        return null
    }
  }

  successView = isDark => {
    const {GamingVideosList} = this.state

    return (
      <VideosBgContainer isDark={isDark}>
        <VideosContainer isDark={isDark}>
          {GamingVideosList.map(videoObj => {
            const {id, title, thumbnailUrl, viewCount} = videoObj

            const linkStyle = isDark
              ? 'link-element-style-1'
              : 'link-element-style-2'

            return (
              <Link className={linkStyle} to={`videos/${id}`}>
                <VideoItemContainer key={id}>
                  <ReactPlayerContainer
                    thumbnailUrl={thumbnailUrl}
                    className="react-player"
                  >
                    .
                  </ReactPlayerContainer>
                  <VideoDescriptionContainer>
                    <div>
                      <VideoHeading>{title}</VideoHeading>
                      <div className="view">
                        <div className="views-container">
                          <VideoPara>{viewCount} Watching</VideoPara>
                          <VideoPara>Worldwide</VideoPara>
                        </div>
                      </div>
                    </div>
                  </VideoDescriptionContainer>
                </VideoItemContainer>
              </Link>
            )
          })}
        </VideosContainer>
      </VideosBgContainer>
    )
  }

  reloadApiCall = () => {
    this.getGamingVideosList()
  }

  render() {
    return (
      <ReactContextObj.Consumer>
        {value => {
          const {isDark} = value
          console.log(isDark)
          return (
            <>
              <Header />
              <Container data-testid="gaming">
                <HeaderLeft />
                <TrendingContainer>
                  <TrendingNav isDark={isDark}>
                    <ImageContainer isDark={isDark}>
                      <SiYoutubegaming />
                    </ImageContainer>
                    <Heading isDark={isDark}>Gaming</Heading>
                  </TrendingNav>

                  {this.switchMethod(isDark)}
                </TrendingContainer>
              </Container>
            </>
          )
        }}
      </ReactContextObj.Consumer>
    )
  }
}
