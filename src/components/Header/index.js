import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {RiMoonFill} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'
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
        const {isDarkTheme, toggleTheme} = value
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
        return (
          <NavContainer isDarkTheme={isDarkTheme}>
            <ResponsiveContainer>
              <Link to="/">
                <AppLogoImage src={loginLogoImg} alt="nxt watch logo" />
              </Link>
              <NavMenuContainer>
                <ToggleThemeButton
                  type="button"
                  onClick={onClickToggleTheme}
                  data-testid="theme"
                >
                  {themeIcon}
                </ToggleThemeButton>
                <HamburgerMenuButton>{hamburgerIcon}</HamburgerMenuButton>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <MobileLogoutButton onClick={onClickLogout}>
                  {logoutIcon}
                </MobileLogoutButton>
                <DesktopLogoutButton onClick={onClickLogout}>
                  Logout
                </DesktopLogoutButton>
              </NavMenuContainer>
            </ResponsiveContainer>
          </NavContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
