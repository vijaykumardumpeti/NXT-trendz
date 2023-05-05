import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {TbTextPlus} from 'react-icons/tb'

import ReactPlayer from 'react-player'
import Header from '../Header'
import HeaderLeft from '../HeaderLeft'

import './index.css'
import {BgContainer, NormalContainer, Button} from './StyledComponents'

import ReactContextObj from '../../ReactContext'

const videoItemDetailss = {
  id: 'ad9822d2-5763-41d9-adaf-baf9da3fd490',
  title: 'iB Hubs Announcement Event',
  videoUrl: 'https://www.youtube.com/watch?v=pT2ojWWjum8',
  thumbnailUrl:
    'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png',
  channel: {
    name: 'iB Hubs',
    profileImageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png',
    subscriberCount: '1M',
  },
  viewCount: '26K',
  publishedAt: 'Nov 29, 2016',
  description:
    'iB Hubs grandly celebrated its Announcement Event in November 13, 2016, in the presence of many eminent personalities from the Government, Industry, and Academia with Shri Amitabh Kant, CEO, NITI Aayog as the Chief Guest.',
}
console.log(videoItemDetailss)

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

export default class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoItemDetails: '',
  }

  componentDidMount() {
    this.getVideoDetailsObj()
  }

  getVideoDetailsObj = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`

    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    const videoDetails = {
      id: data.video_details.id,
      description: data.video_details.description,
      publishedAt: data.video_details.published_at,
      thumbnailUrl: data.video_details.thumbnail_url,
      title: data.video_details.title,
      videoUrl: data.video_details.video_url,
      viewCount: data.video_details.view_count,
      channel: {
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        name: data.video_details.channel.name,
      },
    }
    console.log(videoDetails)

    if (response.ok === true) {
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoItemDetails: videoDetails,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  successView = (
    isDark,
    likeButton,
    disLikeButton,
    saveButton,
    isLiked,
    isDisLiked,
    isSaved,
  ) => {
    const {videoItemDetails} = this.state

    this.likeButtonClicked = () => {
      this.likeButton()
    }
    this.disLikeButtonClicked = () => {
      this.disLikeButton()
    }
    this.saveButtonClicked = () => {
      this.saveButton()
    }

    const likeStyle = isLiked === true ? 'like-style' : ''
    const disLikeStyle = isDisLiked === true ? 'disLike-style' : ''
    const savedStyle = isSaved === true ? 'save-style' : ''

    return (
      <div className="video-item-container">
        <ReactPlayer
          className="react-player"
          url={videoItemDetails.videoUrl}
          light={videoItemDetails.thumbnailUrl}
          width="100%"
          height="100%"
          controls
        />
        <p>{videoItemDetails.title}</p>
        <div className="text-container">
          <div className="first-container">
            <p>{videoItemDetails.viewCount} views</p>
            <p>{videoItemDetails.publishedAt}</p>
          </div>
          <div className="second-container">
            <Button
              onClick={this.likeButtonClicked}
              isDark={isDark}
              type="button"
              className={`video-button ${likeStyle}`}
            >
              <p>
                <AiOutlineLike /> Like
              </p>
            </Button>
            <Button
              onClick={this.disLikeButtonClicked}
              isDark={isDark}
              type="button"
              className={`video-button ${disLikeStyle}`}
            >
              <p>
                <BiDislike /> Dislike
              </p>
            </Button>
            <Button
              onClick={this.saveButtonClicked}
              isDark={isDark}
              type="button"
              className={`video-button ${savedStyle}`}
            >
              <p>
                <TbTextPlus /> Save
              </p>
            </Button>
          </div>
        </div>
        <div>
          <hr className="hr" />
        </div>
        <div className="last-container">
          <div className="profile-container">
            <img
              className="image"
              alt={videoItemDetails.name}
              src={videoItemDetails.channel.profileImageUrl}
            />
          </div>
          <div className="profile-description-container">
            <p>{videoItemDetails.channel.name}</p>
            <p>{videoItemDetails.channel.subscriberCount} subscribers</p>
            <p className="description">{videoItemDetails.description}</p>
          </div>
        </div>
      </div>
    )
  }

  loaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#53722f" height="50" width="50" />
    </div>
  )

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
          onClick={this.reloadApiCalls}
          className="retry-button"
          type="button"
        >
          Retry
        </button>
      </NormalContainer>
    )
  }

  reloadApiCalls = () => {
    this.getVideoDetailsObj()
  }

  switchMethod = (
    isDark,
    likeButton,
    disLikeButton,
    saveButton,
    isLiked,
    isDisLiked,
    isSaved,
  ) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.failure:
        return this.failureView(isDark)

      case apiStatusConstants.success:
        return this.successView(
          isDark,
          likeButton,
          disLikeButton,
          saveButton,
          isLiked,
          isDisLiked,
          isSaved,
        )

      case apiStatusConstants.inProgress:
        return this.loaderView()

      default:
        return null
    }
  }

  render() {
    const {videoDetails, apiStatus} = this.state
    console.log(videoDetails)
    console.log(apiStatus)
    return (
      <ReactContextObj.Consumer>
        {value => {
          const {
            isDark,
            isLiked,
            isDisLiked,
            isSaved,
            likeButton,
            disLikeButton,
            saveButton,
          } = value

          console.log(isDark)
          return (
            <>
              <Header />
              <BgContainer isDark={isDark} data-testid="videoItemDetails">
                <HeaderLeft />
                {this.switchMethod(
                  isDark,
                  isLiked,
                  isDisLiked,
                  isSaved,
                  likeButton,
                  disLikeButton,
                  saveButton,
                )}
              </BgContainer>
            </>
          )
        }}
      </ReactContextObj.Consumer>
    )
  }
}
