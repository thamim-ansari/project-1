import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
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
    apiStatusConstant: apiStatusConstant.initial,
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
    publishedAt: data.published_at,
  })

  getVideosData = async () => {
    const apiUrl = 'https://apis.ccbp.in/videos/all?search='
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const formattedData = data.videos.map(eachData =>
      this.getFormattedData(eachData),
    )
    this.setState({videosList: formattedData})
  }

  onClickCloseBanner = () => {
    this.setState({isBannerClose: true})
  }

  renderHomeVideos = () => {
    const {videosList} = this.state
    return <HomeVideoItem videosList={videosList} onRetry={this.onRetry} />
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  onRetry = () => {
    this.getVideosData()
  }

  render() {
    const {isBannerClose} = this.state

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
                  {!isBannerClose && (
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
                          <GetPremiumButton type="button">
                            GET IT NOW
                          </GetPremiumButton>
                        </LogoAndBannerContent>
                        <BannerCloseButton
                          onClick={this.onClickCloseBanner}
                          data-testid="close"
                        >
                          <MdClose
                            size={18}
                            aria-label="closeIcon"
                            className="close-icon"
                          />
                        </BannerCloseButton>
                      </BannerLogoAndCloseContainer>
                    </BannerContainer>
                  )}
                  <HomeContentContainer>
                    <SearchBarContainer>
                      <SearchInputContainer isDarkTheme={isDarkTheme}>
                        <SearchInput
                          type="search"
                          placeholder="Search"
                          isDarkTheme={isDarkTheme}
                        />
                        <SearchButton type="button" isDarkTheme={isDarkTheme}>
                          <MdSearch
                            size={14}
                            color={isDarkTheme ? '#94a3b8' : '#212121'}
                          />
                        </SearchButton>
                      </SearchInputContainer>
                    </SearchBarContainer>
                    {this.renderHomeVideos()}
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
