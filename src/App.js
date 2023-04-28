import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'

import Login from './components/Login'
import Home from './components/Home'

import ReactContextObj from './ReactContext'

import './App.css'

export default class App extends Component {
  state = {
    isDark: false,
  }

  changeDark = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  render() {
    const {isDark} = this.state
    return (
      <ReactContextObj.Provider value={{isDark, changeDark: this.changeDark}}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </ReactContextObj.Provider>
    )
  }
}
