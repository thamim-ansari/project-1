import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import {
  SavedVideosPageContainer,
  SavedVideosAndSidebarContainer,
  NotFoundContainer,
  NotFoundContentContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponent'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <SavedVideosPageContainer
          isDarkTheme={isDarkTheme}
          data-testid="trending"
        >
          <Header />
          <SavedVideosAndSidebarContainer>
            <SideBar />
            <NotFoundContainer>
              <NotFoundContentContainer>
                <NotFoundImage src={notFoundImgUrl} alt="not found" />
                <NotFoundHeading isDarkTheme={isDarkTheme}>
                  Page Not Found
                </NotFoundHeading>
                <NotFoundDescription>
                  We are sorry, the page you requested could not be found.
                </NotFoundDescription>
              </NotFoundContentContainer>
            </NotFoundContainer>
          </SavedVideosAndSidebarContainer>
        </SavedVideosPageContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
