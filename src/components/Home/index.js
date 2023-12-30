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
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
    },
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

  renderHomeVideos = () => {
    const {videosList} = this.state
    return <HomeVideoItem videosList={videosList} onRetry={this.onRetry} />
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const failureImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
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
      }}
    </ThemeContext.Consumer>
  )

  renderHomePageView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderHomeVideos()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      case apiStatusConstant.inprogress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    const {isBannerClose, searchInput} = this.state
    console.log(searchInput)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
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
                        >
                          <MdSearch
                            size={14}
                            color={isDarkTheme ? '#94a3b8' : '#212121'}
                          />
                        </SearchButton>
                      </SearchInputContainer>
                    </SearchBarContainer>
                    {this.renderHomePageView()}
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
