import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  state = {
    savedVideos: [],
    isDarkTheme: false,
    activeTab: 'Home',
  }

  toggleTheme = () => {
    this.setState(prev => ({isDarkTheme: !prev.isDarkTheme}))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const VideoNotInList = savedVideos.filter(
      eachItem => eachItem.id === video.id,
    )

    if (VideoNotInList.length < 1) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, video],
      }))
    } else {
      const filteredVideo = savedVideos.filter(
        eachItem => eachItem.id !== video.id,
      )
      this.setState({savedVideos: filteredVideo})
    }
  }

  render() {
    const {isDarkTheme, savedVideos, activeTab} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          activeTab,
          savedVideos,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
          addVideo: this.addVideo,
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
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
