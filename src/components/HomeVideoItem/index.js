import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
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
  VideoStatsContainer,
  ChannelName,
  VideoStats,
  Dot1,
  Dot2,
  Views,
  UploadedOn,
} from './styledComponent'
import './index.css'

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
                <Link to={`/videos/${eachItem.id}`} className="link-items">
                  <ThumbNailImage
                    src={eachItem.thumbnailUrl}
                    alt="video thumbnail"
                  />
                  <VideoInfoContainer>
                    <ChannelLogoImage
                      src={eachItem.channel.profileImageUrl}
                      alt="channel logo"
                    />
                    <VideoHeadingAndContentContainer>
                      <VideoHeading isDarkTheme={isDarkTheme}>
                        {eachItem.title}
                      </VideoHeading>
                      <VideoStatsContainer>
                        <ChannelName>{eachItem.channel.name}</ChannelName>
                        <VideoStats>
                          <Dot1>
                            <BsDot size={20} color=" #475569" />
                          </Dot1>
                          <Views>{eachItem.viewCount}</Views>
                          <Dot2>
                            <BsDot size={20} color=" #475569" />
                          </Dot2>
                          <UploadedOn>{eachItem.publishedAt}</UploadedOn>
                        </VideoStats>
                      </VideoStatsContainer>
                    </VideoHeadingAndContentContainer>
                  </VideoInfoContainer>
                </Link>
              </VideoItem>
            ))}
          </VideosList>
        )
      }}
    </ThemeContext.Consumer>
  )
  return videosList.length > 0 ? renderVideoList() : renderNoResultView()
}

export default HomeVideoItem
