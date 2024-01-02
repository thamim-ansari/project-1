import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'
import {HiFire} from 'react-icons/hi'

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
  VideoInfoContainer,
  ChannelLogoImage,
  VideoHeadingAndContentContainer,
  VideoHeading,
  VideoStatsContainer,
  ChannelName,
  VideoStats,
  Dot1,
  Dot2,
  Views,
  UploadedOn,
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

class Trending extends Component {
  state = {
    trendingList: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getTendingVideosData()
  }

  getFormattedData = data => ({
    name: data.channel.name,
    profileImageUrl: data.channel.profile_image_url,
    id: data.id,
    title: data.title,
    thumbnailUrl: data.thumbnail_url,
    viewCount: data.view_count,
    publishedAt: `${formatDistanceToNow(new Date(data.published_at)).slice(
      -7,
    )} ago`,
  })

  getTendingVideosData = async () => {
    this.setState({apiStatus: apiStatusConstant.inprogress})
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        trendingList: formattedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  onRetry = () => {
    this.getFormattedData()
  }

  render() {
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
          const renderTrendingVideosView = () => {
            const {trendingList} = this.state
            return (
              <SavedVideosContainer>
                <SavedHeaderAndLogoContainer
                  isDarkTheme={isDarkTheme}
                  data-testid="banner"
                >
                  <SavedVideosLogoContainer isDarkTheme={isDarkTheme}>
                    <HiFire
                      size={25}
                      color={isDarkTheme ? '#ff0b37' : '#ff0000'}
                    />
                  </SavedVideosLogoContainer>
                  <SavedVideosPageHeading isDarkTheme={isDarkTheme}>
                    Trending
                  </SavedVideosPageHeading>
                </SavedHeaderAndLogoContainer>
                <SavedVideosListContainer>
                  {trendingList.map(eachItem => (
                    <SavedVideosListItem key={eachItem.id}>
                      <Link
                        to={`/videos/${eachItem.id}`}
                        className="trending-videos-link-items"
                        onClick={onClickChangeTab}
                      >
                        <SavedVideosImage
                          src={eachItem.thumbnailUrl}
                          alt="video thumbnail"
                        />
                        <VideoInfoContainer>
                          <ChannelLogoImage
                            src={eachItem.profileImageUrl}
                            alt="channel logo"
                          />
                          <VideoHeadingAndContentContainer>
                            <VideoHeading isDarkTheme={isDarkTheme}>
                              {eachItem.title}
                            </VideoHeading>
                            <VideoStatsContainer>
                              <ChannelName>{eachItem.name}</ChannelName>
                              <VideoStats>
                                <Dot1>
                                  <BsDot size={20} color=" #475569" />
                                </Dot1>
                                <Views>{eachItem.viewCount}</Views>
                                <Dot2>
                                  <BsDot size={20} color=" #475569" />
                                </Dot2>
                                <UploadedOn>{eachItem.publishedAt}</UploadedOn>
                              </VideoStats>
                            </VideoStatsContainer>
                          </VideoHeadingAndContentContainer>
                        </VideoInfoContainer>
                      </Link>
                    </SavedVideosListItem>
                  ))}
                </SavedVideosListContainer>
              </SavedVideosContainer>
            )
          }
          const renderTrendingVideosAllView = () => {
            const {apiStatus} = this.state
            switch (apiStatus) {
              case apiStatusConstant.success:
                return renderTrendingVideosView()
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
              data-testid="trending"
            >
              <Header />
              <SavedVideosAndSidebarContainer>
                <SideBar />
                {renderTrendingVideosAllView()}
              </SavedVideosAndSidebarContainer>
            </SavedVideosPageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
