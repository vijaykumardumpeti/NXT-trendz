import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import {BsFire} from 'react-icons/bs'

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
  NormalContainer,
} from './StyledComponents'

const videosLists = [
  {
    id: 'ad9822d2-5763-41d9-adaf-baf9da3fd490',
    title: 'iB Hubs Announcement Event',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png',
    channel: {
      name: 'iB Hubs',
      profileImageUrl:
        'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png',
    },
    viewCount: '26K',
    publishedAt: 'Nov 29, 2016',
  },
  {
    id: 'ad9822d2-5763-41d9-adaf-baf9da3fd490',
    title: 'iB Hubs Announcement Event',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png',
    channel: {
      name: 'iB Hubs',
      profileImageUrl:
        'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png',
    },
    viewCount: '26K',
    publishedAt: 'Nov 29, 2016',
  },
  {
    id: 'ad9822d2-5763-41d9-adaf-baf9da3fd490',
    title: 'iB Hubs Announcement Event',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png',
    channel: {
      name: 'iB Hubs',
      profileImageUrl:
        'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png',
    },
    viewCount: '26K',
    publishedAt: 'Nov 29, 2016',
  },
  {
    id: 'ad9822d2-5763-41d9-adaf-baf9da3fd490',
    title: 'iB Hubs Announcement Event',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png',
    channel: {
      name: 'iB Hubs',
      profileImageUrl:
        'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png',
    },
    viewCount: '26K',
    publishedAt: 'Nov 29, 2016',
  },
]
console.log(videosLists)

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
console.log(apiStatusConstants)

export default class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    const videos = data.videos.map(o => ({
      id: o.id,
      publishedAt: o.published_at,
      thumbnailUrl: o.thumbnail_url,
      title: o.title,
      viewCount: o.view_count,
      channel: {
        name: o.channel.name,
        profileImageUrl: o.channel.profile_image_url,
      },
    }))

    console.log(videos)
    if (response.ok === true) {
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: videos,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  reloadApiCall = () => {
    this.getTrendingVideosList()
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
    const {videosList} = this.state
    return (
      <VideosContainer isDark={isDark}>
        {videosList.map(videoObj => {
          const {
            id,
            title,
            thumbnailUrl,
            channel,
            viewCount,
            publishedAt,
          } = videoObj
          const {name, profileImageUrl} = channel

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
                    <img
                      className="video-profile"
                      alt={name}
                      src={profileImageUrl}
                    />
                  </div>
                  <div>
                    <VideoHeading>{title}</VideoHeading>
                    <div className="view">
                      <VideoPara>{name}</VideoPara>
                      <div className="views-container">
                        <VideoPara>{viewCount} views</VideoPara>
                        <VideoPara>{publishedAt}</VideoPara>
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

  render() {
    const {apiStatus} = this.state
    console.log(apiStatus)
    return (
      <ReactContextObj.Consumer>
        {value => {
          const {isDark} = value
          console.log(isDark)
          return (
            <>
              <Header />
              <Container data-testid="trending">
                <HeaderLeft />
                <TrendingContainer>
                  <TrendingNav isDark={isDark}>
                    <ImageContainer isDark={isDark}>
                      <BsFire />
                    </ImageContainer>
                    <Heading isDark={isDark}>Trending</Heading>
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
