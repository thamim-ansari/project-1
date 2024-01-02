import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import SideBar from '../SideBar'

import ThemeContext from '../../context/ThemeContext'
import {
  SavedVideosPageContainer,
  SavedVideosAndSidebarContainer,
  SavedVideosContainer,
  SavedHeaderAndLogoContainer,
  SavedVideosLogoContainer,
  SavedVideosPageHeading,
  SavedVideosListContainer,
  SavedVideosListItem,
  SavedVideosImage,
  GamingHeading,
  GamingStats,
  FailureContainer,
  FailureResponsiveContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  LoaderContainer,
} from './styledComponent'
import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
}

class Gaming extends Component {
  state = {
    gamingList: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getGamingVideosData()
  }

  getFormattedData = data => ({
    id: data.id,
    title: data.title,
    thumbnailUrl: data.thumbnail_url,
    viewCount: data.view_count,
  })

  getGamingVideosData = async () => {
    this.setState({apiStatus: apiStatusConstant.inprogress})
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const formattedData = data.videos.map(eachData =>
        this.getFormattedData(eachData),
      )
      this.setState({
        gamingList: formattedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  onRetry = () => {
    this.getGamingVideosData()
  }

  render() {
    const {gamingList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, changeTab} = value
          const failureImgUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          const onClickChangeTab = () => {
            changeTab(' ')
          }
          const renderGamingVideosView = () => (
            <SavedVideosContainer>
              <SavedHeaderAndLogoContainer
                isDarkTheme={isDarkTheme}
                data-testid="banner"
              >
                <SavedVideosLogoContainer isDarkTheme={isDarkTheme}>
                  <SiYoutubegaming
                    size={25}
                    color={isDarkTheme ? '#ff0b37' : '#ff0000'}
                  />
                </SavedVideosLogoContainer>
                <SavedVideosPageHeading isDarkTheme={isDarkTheme}>
                  Gaming
                </SavedVideosPageHeading>
              </SavedHeaderAndLogoContainer>
              <SavedVideosListContainer>
                {gamingList.map(eachItem => (
                  <SavedVideosListItem key={eachItem.id}>
                    <Link
                      to={`/videos/${eachItem.id}`}
                      className="gaming-videos-link-items "
                      onClick={onClickChangeTab}
                    >
                      <SavedVideosImage
                        src={eachItem.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <GamingHeading isDarkTheme={isDarkTheme}>
                        {eachItem.title}
                      </GamingHeading>
                      <GamingStats>
                        {eachItem.viewCount} Watching Worldwide
                      </GamingStats>
                    </Link>
                  </SavedVideosListItem>
                ))}
              </SavedVideosListContainer>
            </SavedVideosContainer>
          )
          const renderFailureView = () => (
            <FailureContainer>
              <FailureResponsiveContainer>
                <FailureImage src={failureImgUrl} alt="failure view" />
                <FailureHeading isDarkTheme={isDarkTheme}>
                  Oops! Something Went Wrong
                </FailureHeading>
                <FailureDescription isDarkTheme={isDarkTheme}>
                  We are having some trouble to complete your request.please try
                  again.
                </FailureDescription>
                <RetryButton type="button" onClick={this.onRetry}>
                  Retry
                </RetryButton>
              </FailureResponsiveContainer>
            </FailureContainer>
          )
          const renderLoader = () => (
            <LoaderContainer data-testid="loader">
              <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
            </LoaderContainer>
          )
          const renderGamingVideosAllView = () => {
            const {apiStatus} = this.state
            switch (apiStatus) {
              case apiStatusConstant.success:
                return renderGamingVideosView()
              case apiStatusConstant.failure:
                return renderFailureView()
              case apiStatusConstant.inprogress:
                return renderLoader()
              default:
                return null
            }
          }
          return (
            <SavedVideosPageContainer
              isDarkTheme={isDarkTheme}
              data-testid="gaming"
            >
              <Header />
              <SavedVideosAndSidebarContainer>
                <SideBar />
                {renderGamingVideosAllView()}
              </SavedVideosAndSidebarContainer>
            </SavedVideosPageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
