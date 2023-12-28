import {Component} from 'react'
import {MdClose} from 'react-icons/md'

import Header from '../Header'
import SideBar from '../SideBar'

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
} from './styledComponent'
import './index.css'

class Home extends Component {
  state = {
    isBannerClose: false,
  }

  onClickCloseBanner = () => {
    this.setState({isBannerClose: true})
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
                            aria-label="closeIcon"
                            className="close-icon"
                          />
                        </BannerCloseButton>
                      </BannerLogoAndCloseContainer>
                    </BannerContainer>
                  )}
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
