import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'
import SavedVideosList from '../SavedVideosList'

import ThemeContext from '../../context/ThemeContext'
import {
  SavedVideosPageContainer,
  SavedVideosAndSidebarContainer,
  SavedVideosContainer,
  SavedHeaderAndLogoContainer,
  SavedVideosLogoContainer,
  SavedVideosPageHeading,
  SavedVideosListContainer,
  NoVideosContainer,
  NoVideosContentContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosDescription,
} from './styledComponent'

const SaveVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const listLength = savedVideos.length
      const renderNoVideosView = () => (
        <NoVideosContainer>
          <NoVideosContentContainer>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoVideosHeading isDarkTheme={isDarkTheme}>
              No saved videos found
            </NoVideosHeading>
            <NoVideosDescription isDarkTheme={isDarkTheme}>
              Save your videos by clicking a button
            </NoVideosDescription>
          </NoVideosContentContainer>
        </NoVideosContainer>
      )
      const renderSavedVideosView = () => (
        <SavedVideosContainer>
          <SavedHeaderAndLogoContainer
            isDarkTheme={isDarkTheme}
            data-testid="banner"
          >
            <SavedVideosLogoContainer isDarkTheme={isDarkTheme}>
              <HiFire size={25} color={isDarkTheme ? '#ff0b37' : '#ff0000'} />
            </SavedVideosLogoContainer>
            <SavedVideosPageHeading isDarkTheme={isDarkTheme}>
              Saved Videos
            </SavedVideosPageHeading>
          </SavedHeaderAndLogoContainer>
          <SavedVideosListContainer>
            {savedVideos.map(eachItem => (
              <SavedVideosList
                key={eachItem.id}
                savedVideosDetails={eachItem}
              />
            ))}
          </SavedVideosListContainer>
        </SavedVideosContainer>
      )

      return (
        <SavedVideosPageContainer
          isDarkTheme={isDarkTheme}
          data-testid="savedVideos"
        >
          <Header />
          <SavedVideosAndSidebarContainer>
            <SideBar />
            {listLength > 0 ? renderSavedVideosView() : renderNoVideosView()}
          </SavedVideosAndSidebarContainer>
        </SavedVideosPageContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SaveVideos
