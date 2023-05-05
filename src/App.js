import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

import ProtectedRoute from './components/ProtectedRoute'

import ReactContextObj from './ReactContext'

import './App.css'

export default class App extends Component {
  state = {
    isDark: false,
    routePath: 'home',
    isLiked: false,
    isDisLiked: false,
    isSaved: false,
    SavedVideosList: [],
  }

  changeToTrending = () => {
    this.setState({
      routePath: 'Trending',
    })
  }

  changeToHome = () => {
    this.setState({
      routePath: 'Home',
    })
  }

  changeToGaming = () => {
    this.setState({
      routePath: 'Gaming',
    })
  }

  changeToSavedVideos = () => {
    this.setState({
      routePath: 'SavedVideos',
    })
  }

  changeDark = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  likeButton = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
    }))
  }

  disLikeButton = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
    }))
  }

  saveButton = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  render() {
    const {
      isDark,
      routePath,
      isLiked,
      isDisLiked,
      isSaved,
      SavedVideosList,
    } = this.state
    return (
      <ReactContextObj.Provider
        value={{
          isDark,
          routePath,
          isLiked,
          isDisLiked,
          isSaved,
          changeDark: this.changeDark,
          changeToTrending: this.changeToTrending,
          changeToHome: this.changeToHome,
          changeToGaming: this.changeToGaming,
          changeToSavedVideos: this.changeToSavedVideos,

          likeButton: this.likeButton,
          disLikeButton: this.disLikeButton,
          saveButton: this.saveButton,

          SavedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect component={NotFound} />
        </Switch>
      </ReactContextObj.Provider>
    )
  }
}
