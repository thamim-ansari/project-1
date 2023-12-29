import ThemeContext from '../../context/ThemeContext'
import {
  NoSearchResultContainer,
  NoSearchResultImage,
  NoSearchResultHeading,
  NoSearchResultDescription,
  RetryButton,
  VideosList,
  VideoItem,
  ThumbNailImage,
  VideoInfoContainer,
  ChannelLogoImage,
  VideoHeadingAndContentContainer,
  VideoHeading,
} from './styledComponent'

const HomeVideoItem = props => {
  const {videosList, onRetry} = props
  const onClickRetry = () => {
    onRetry()
  }
  const renderNoResultView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
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
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoSearchResultContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
  const renderVideoList = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <VideosList>
            {videosList.map(eachItem => (
              <VideoItem key={eachItem.id}>
                <ThumbNailImage src={eachItem.thumbnailUrl} />
                <VideoInfoContainer>
                  <ChannelLogoImage src={eachItem.channel.profileImageUrl} />
                  <VideoHeadingAndContentContainer>
                    <VideoHeading>{eachItem.title}</VideoHeading>
                  </VideoHeadingAndContentContainer>
                </VideoInfoContainer>
              </VideoItem>
            ))}
          </VideosList>
        )
      }}
    </ThemeContext.Consumer>
  )
  return videosList.length === 0 ? renderNoResultView() : renderVideoList()
}

export default HomeVideoItem
