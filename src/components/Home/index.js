import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {MdClose, MdSearch} from 'react-icons/md'

import Header from '../Header'
import SideBar from '../SideBar'
import HomeVideoItem from '../HomeVideoItem'

import ThemeContext from '../../context/ThemeContext'

import {
  HomePageContainer,
  HomeContainer,
  BannerAndContentContainer,
  BannerContainer,
  BannerLogoAndCloseContainer,
  LogoAndBannerContent,
  LogoImage,
  BannerDescription,
  GetPremiumButton,
  BannerCloseButton,
  LoaderContainer,
  HomeContentContainer,
  SearchBarContainer,
  SearchInput,
  SearchInputContainer,
  SearchButton,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  NoSearchResultContainer,
  NoSearchResultImage,
  NoSearchResultHeading,
  NoSearchResultDescription,
  VideosList,
} from './styledComponent'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
}

class Home extends Component {
  state = {
    videosList: [],
    isBannerClose: false,
    apiStatus: apiStatusConstant.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosData()
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

  getVideosData = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstant.inprogress})
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videosList: formattedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getVideosData()
  }

  onClickCloseBanner = () => {
    this.setState({isBannerClose: true})
  }

  onRetry = () => {
    this.getVideosData()
  }

  renderBannerView = () => (
    <BannerContainer data-testid="banner">
      <BannerLogoAndCloseContainer>
        <LogoAndBannerContent>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerDescription>
            Buy Nxt Wathch Premium prepaid plans with UPI
          </BannerDescription>
          <GetPremiumButton type="button">GET IT NOW</GetPremiumButton>
        </LogoAndBannerContent>
        <BannerCloseButton
          onClick={this.onClickCloseBanner}
          data-testid="close"
        >
          <MdClose size={18} aria-label="closeIcon" className="close-icon" />
        </BannerCloseButton>
      </BannerLogoAndCloseContainer>
    </BannerContainer>
  )

  render() {
    const {isBannerClose, searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const failureImgUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

          const renderHomeVideos = () => {
            const {videosList} = this.state
            if (videosList.length > 0) {
              return (
                <VideosList>
                  {videosList.map(eachItem => (
                    <HomeVideoItem
                      HomeVideoDetails={eachItem}
                      key={eachItem.id}
                    />
                  ))}
                </VideosList>
              )
            }
            return (
              <NoSearchResultContainer>
                <NoSearchResultImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
                  alt="no videos"
                />
                <NoSearchResultHeading isDarkTheme={isDarkTheme}>
                  No Search result found
                </NoSearchResultHeading>
                <NoSearchResultDescription isDarkTheme={isDarkTheme}>
                  Try different key words or remove search filter
                </NoSearchResultDescription>
                <RetryButton type="button" onClick={this.onRetry}>
                  Retry
                </RetryButton>
              </NoSearchResultContainer>
            )
          }

          const renderFailureView = () => (
            <FailureContainer>
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
            </FailureContainer>
          )
          const renderLoader = () => (
            <LoaderContainer data-testid="loader">
              <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
            </LoaderContainer>
          )
          const renderHomePageView = () => {
            const {apiStatus} = this.state

            switch (apiStatus) {
              case apiStatusConstant.success:
                return renderHomeVideos()
              case apiStatusConstant.failure:
                return renderFailureView()
              case apiStatusConstant.inprogress:
                return renderLoader()
              default:
                return null
            }
          }
          return (
            <HomePageContainer isDarkTheme={isDarkTheme} data-testid="home">
              <Header />
              <HomeContainer>
                <SideBar />
                <BannerAndContentContainer>
                  {!isBannerClose && this.renderBannerView()}
                  <HomeContentContainer>
                    <SearchBarContainer>
                      <SearchInputContainer isDarkTheme={isDarkTheme}>
                        <SearchInput
                          type="search"
                          placeholder="Search"
                          isDarkTheme={isDarkTheme}
                          value={searchInput}
                          onChange={this.onChangeSearchInput}
                        />
                        <SearchButton
                          type="button"
                          isDarkTheme={isDarkTheme}
                          onClick={this.onClickSearch}
                          data-testid="searchButton"
                        >
                          <MdSearch
                            size={14}
                            color={isDarkTheme ? '#94a3b8' : '#212121'}
                          />
                        </SearchButton>
                      </SearchInputContainer>
                    </SearchBarContainer>
                    {renderHomePageView()}
                  </HomeContentContainer>
                </BannerAndContentContainer>
              </HomeContainer>
            </HomePageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
