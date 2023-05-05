import {Component} from 'react'

import {TbTextPlus} from 'react-icons/tb'

import {Link} from 'react-router-dom'

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

const SavedVideosLists = [
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
  },
]

console.log(SavedVideosLists)

export default class Trending extends Component {
  videosView = (isDark, SavedVideosList) => {
    console.log(SavedVideosList)
    return (
      <VideosContainer isDark={isDark}>
        {SavedVideosList.map(videoObj => {
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
            <Link className={linkStyle} to={`/videos/${id}`}>
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

  emptyListView = isDark => (
    <NormalContainer isDark={isDark}>
      <img
        className="no-videos-image"
        alt="no saved videos"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
      />
      <h1 className="heading">No saved videos found</h1>
      <p className="para">You can save your videos while watching them</p>
    </NormalContainer>
  )

  render() {
    return (
      <ReactContextObj.Consumer>
        {value => {
          const {isDark, SavedVideosList} = value
          console.log(isDark)

          return (
            <>
              <Header />
              <Container data-testid="savedVideos">
                <HeaderLeft />
                <TrendingContainer>
                  <TrendingNav isDark={isDark}>
                    <ImageContainer isDark={isDark}>
                      <TbTextPlus />
                    </ImageContainer>
                    <Heading isDark={isDark}>Saved Videos</Heading>
                  </TrendingNav>
                  {SavedVideosList.length === 0
                    ? this.emptyListView(isDark)
                    : this.videosView(isDark, SavedVideosList)}
                </TrendingContainer>
              </Container>
            </>
          )
        }}
      </ReactContextObj.Consumer>
    )
  }
}
