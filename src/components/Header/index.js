import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
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
  PopupContainer,
  PopupDescription,
  PopupButtonContainer,
  PopupButton,
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
        const isCancel = true
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
                <Popup
                  modal
                  trigger={
                    <MobileLogoutButton onClick={onClickLogout}>
                      {logoutIcon}
                    </MobileLogoutButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <PopupContainer>
                      <PopupDescription>
                        Are you sure, you want to logout?
                      </PopupDescription>
                      <PopupButtonContainer>
                        <PopupButton type="button" onClick={() => close()}>
                          Close
                        </PopupButton>
                        <PopupButton
                          type="button"
                          onClick={onClickLogout}
                          isCancel={isCancel}
                        >
                          Confirm
                        </PopupButton>
                      </PopupButtonContainer>
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
                  className="popup-content"
                >
                  {close => (
                    <PopupContainer>
                      <PopupDescription>
                        Are you sure, you want to logout?
                      </PopupDescription>
                      <PopupButtonContainer>
                        <PopupButton type="button" onClick={() => close()}>
                          Close
                        </PopupButton>
                        <PopupButton
                          type="button"
                          onClick={onClickLogout}
                          isCancel={isCancel}
                        >
                          Confirm
                        </PopupButton>
                      </PopupButtonContainer>
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
