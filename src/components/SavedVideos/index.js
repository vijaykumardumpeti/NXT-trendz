import {Component} from 'react'

import {TbTextPlus} from 'react-icons/tb'

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
} from './StyledComponents'

const SavedVideosList = [
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

export default class Trending extends Component {
  render() {
    return (
      <ReactContextObj.Consumer>
        {value => {
          const {isDark} = value
          console.log(isDark)
          return (
            <>
              <Header />
              <Container>
                <HeaderLeft />
                <TrendingContainer>
                  <TrendingNav isDark={isDark}>
                    <ImageContainer isDark={isDark}>
                      <TbTextPlus />
                    </ImageContainer>
                    <Heading isDark={isDark}>Saved Videos</Heading>
                  </TrendingNav>
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

                      return (
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
                      )
                    })}
                  </VideosContainer>
                </TrendingContainer>
              </Container>
            </>
          )
        }}
      </ReactContextObj.Consumer>
    )
  }
}
