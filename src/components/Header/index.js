import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {RiMoonFill} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd, MdClose} from 'react-icons/md'
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import {
  NavContainer,
  ResponsiveContainer,
  AppLogoImage,
  NavMenuContainer,
  ToggleThemeButton,
  HamburgerMenuButton,
  MobileLogoutButton,
  ProfileImage,
  DesktopLogoutButton,
  PopupContainer,
  PopupContent,
  PopupDescription,
  PopupButtonContainer,
  PopupButton,
  MobileNavigationPopupContainer,
  SideBarContainer,
  SideBarNavList,
  SideBarNavItems,
  NavRoute,
  NavRouteCloseButton,
} from './styledComponent'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme, changeTab, activeTab} = value
        const loginLogoImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const themeIcon = isDarkTheme ? (
          <FiSun className="light-icon theme-icon" />
        ) : (
          <RiMoonFill className="theme-icon" />
        )
        const hamburgerIcon = isDarkTheme ? (
          <GiHamburgerMenu className="light-icon hamburger-icon" />
        ) : (
          <GiHamburgerMenu className="hamburger-icon" />
        )
        const logoutIcon = isDarkTheme ? (
          <FiLogOut className="light-icon mobile-logout-icon" />
        ) : (
          <FiLogOut className="mobile-logout-icon" />
        )
        const onClickToggleTheme = () => {
          toggleTheme()
        }
        const isCancel = true
        const activeTabBg = isDarkTheme ? '#424242' : '#e2e8f0'
        const iconTheme = isDarkTheme ? '#909090' : '#606060'
        const activeIconThem = isDarkTheme ? '#ff0b37' : '#ff0000'
        const navTextColor = isDarkTheme ? '#cccccc' : '#606060'
        const activeNavText = isDarkTheme ? '#f9f9f9' : '#181818'
        const onClickHomeTab = () => {
          changeTab('Home')
        }

        const onClickTrendingTab = () => {
          changeTab('Trending')
        }

        const onClickGamingTab = () => {
          changeTab('Gaming')
        }

        const onClickSavedVideosTab = () => {
          changeTab('Saved Videos')
        }
        return (
          <NavContainer isDarkTheme={isDarkTheme}>
            <ResponsiveContainer>
              <Link to="/" onClick={onClickHomeTab}>
                <AppLogoImage src={loginLogoImg} alt="website logo" />
              </Link>
              <NavMenuContainer>
                <ToggleThemeButton
                  type="button"
                  onClick={onClickToggleTheme}
                  data-testid="theme"
                >
                  {themeIcon}
                </ToggleThemeButton>
                <Popup
                  modal
                  trigger={
                    <HamburgerMenuButton>{hamburgerIcon}</HamburgerMenuButton>
                  }
                >
                  {close => (
                    <MobileNavigationPopupContainer isDarkTheme={isDarkTheme}>
                      <NavRouteCloseButton
                        type="button"
                        onClick={() => close()}
                      >
                        <MdClose
                          size={30}
                          color={isDarkTheme ? '#ffffff' : '#181818'}
                        />
                      </NavRouteCloseButton>
                      <SideBarContainer isDarkTheme={isDarkTheme}>
                        <SideBarNavList>
                          <Link to="/" className="mobile-navbar-link-items">
                            <SideBarNavItems
                              key="Home"
                              onClick={onClickHomeTab}
                              bgColor={
                                activeTab === 'Home' ? activeTabBg : 'null'
                              }
                            >
                              <AiFillHome
                                size={20}
                                color={
                                  activeTab === 'Home'
                                    ? activeIconThem
                                    : iconTheme
                                }
                              />
                              <NavRoute
                                textColor={
                                  activeTab === 'Home'
                                    ? activeNavText
                                    : navTextColor
                                }
                                weight={activeTab === 'Home'}
                              >
                                Home
                              </NavRoute>
                            </SideBarNavItems>
                          </Link>
                          <Link
                            to="/trending"
                            className="mobile-navbar-link-items"
                          >
                            <SideBarNavItems
                              key="Trending"
                              onClick={onClickTrendingTab}
                              bgColor={
                                activeTab === 'Trending' ? activeTabBg : 'null'
                              }
                            >
                              <HiFire
                                size={20}
                                color={
                                  activeTab === 'Trending'
                                    ? activeIconThem
                                    : iconTheme
                                }
                              />
                              <NavRoute
                                textColor={
                                  activeTab === 'Trending'
                                    ? activeNavText
                                    : navTextColor
                                }
                                weight={activeTab === 'Trending'}
                              >
                                Trending
                              </NavRoute>
                            </SideBarNavItems>
                          </Link>
                          <Link
                            to="/gaming"
                            className="mobile-navbar-link-items"
                          >
                            <SideBarNavItems
                              key="Gaming"
                              onClick={onClickGamingTab}
                              bgColor={
                                activeTab === 'Gaming' ? activeTabBg : 'null'
                              }
                            >
                              <SiYoutubegaming
                                size={20}
                                color={
                                  activeTab === 'Gaming'
                                    ? activeIconThem
                                    : iconTheme
                                }
                              />
                              <NavRoute
                                textColor={
                                  activeTab === 'Gaming'
                                    ? activeNavText
                                    : navTextColor
                                }
                                weight={activeTab === 'Gaming'}
                              >
                                Gaming
                              </NavRoute>
                            </SideBarNavItems>
                          </Link>
                          <Link
                            to="/saved-videos"
                            className="mobile-navbar-link-items"
                          >
                            <SideBarNavItems
                              key="Saved Videos"
                              onClick={onClickSavedVideosTab}
                              bgColor={
                                activeTab === 'Saved Videos'
                                  ? activeTabBg
                                  : 'null'
                              }
                            >
                              <MdPlaylistAdd
                                size={20}
                                color={
                                  activeTab === 'Saved Videos'
                                    ? activeIconThem
                                    : iconTheme
                                }
                              />
                              <NavRoute
                                textColor={
                                  activeTab === 'Saved Videos'
                                    ? activeNavText
                                    : navTextColor
                                }
                                weight={activeTab === 'Saved Videos'}
                              >
                                Saved videos
                              </NavRoute>
                            </SideBarNavItems>
                          </Link>
                        </SideBarNavList>
                      </SideBarContainer>
                    </MobileNavigationPopupContainer>
                  )}
                </Popup>

                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Popup
                  modal
                  trigger={
                    <MobileLogoutButton onClick={onClickLogout}>
                      {logoutIcon}
                    </MobileLogoutButton>
                  }
                >
                  {close => (
                    <PopupContainer isDarkTheme={isDarkTheme}>
                      <PopupContent>
                        <PopupDescription isDarkTheme={isDarkTheme}>
                          Are you sure, you want to logout?
                        </PopupDescription>
                        <PopupButtonContainer>
                          <PopupButton type="button" onClick={() => close()}>
                            Cancel
                          </PopupButton>
                          <PopupButton
                            type="button"
                            onClick={onClickLogout}
                            isCancel={isCancel}
                          >
                            Confirm
                          </PopupButton>
                        </PopupButtonContainer>
                      </PopupContent>
                    </PopupContainer>
                  )}
                </Popup>
                <Popup
                  modal
                  trigger={
                    <DesktopLogoutButton onClick={onClickLogout}>
                      Logout
                    </DesktopLogoutButton>
                  }
                >
                  {close => (
                    <PopupContainer isDarkTheme={isDarkTheme}>
                      <PopupContent>
                        <PopupDescription isDarkTheme={isDarkTheme}>
                          Are you sure, you want to logout?
                        </PopupDescription>
                        <PopupButtonContainer>
                          <PopupButton type="button" onClick={() => close()}>
                            Cancel
                          </PopupButton>
                          <PopupButton
                            type="button"
                            onClick={onClickLogout}
                            isCancel={isCancel}
                          >
                            Confirm
                          </PopupButton>
                        </PopupButtonContainer>
                      </PopupContent>
                    </PopupContainer>
                  )}
                </Popup>
              </NavMenuContainer>
            </ResponsiveContainer>
          </NavContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
