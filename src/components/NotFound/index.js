import {NormalContainer} from './StyledComponents'

import ReactContextObj from '../../ReactContext'

import Header from '../Header'

const NotFound = () => (
  <ReactContextObj.Consumer>
    {value => {
      const {isDark} = value

      const imgUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NormalContainer isDark={isDark}>
            <img className="no-videos-image" alt="not found" src={imgUrl} />
            <h1 className="heading">Page Not Found</h1>
            <p className="para">
              We are sorry, the page you requested could not be found.
            </p>
          </NormalContainer>
        </>
      )
    }}
  </ReactContextObj.Consumer>
)

export default NotFound
