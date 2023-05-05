import React from 'react'

const ReactContextObj = React.createContext({
  isDark: false,
  routePath: 'home',

  isLiked: false,
  isDisLiked: false,
  isSaved: false,
  SavedVideosList: [],
  changeDark: () => {},

  changeToTrending: () => {},
  changeToHome: () => {},
  changeToSavedVideos: () => {},
  changeToGaming: () => {},

  likeButton: () => {},
  disLikeButton: () => {},
  saveButton: () => {},
})

export default ReactContextObj
