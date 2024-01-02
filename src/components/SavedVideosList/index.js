import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import ThemeContext from '../../context/ThemeContext'
import {
  SavedVideosListItem,
  SavedVideosImage,
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

const SavedVideosList = props => {
  const {savedVideosDetails} = props
  const {
    id,
    thumbnailUrl,
    profileImageUrl,
    title,
    name,
    viewCount,
    publishedAt,
  } = savedVideosDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <SavedVideosListItem key={id}>
            <Link to={`/videos/${id}`} className="saved-videos-link-items">
              <SavedVideosImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoInfoContainer>
                <ChannelLogoImage src={profileImageUrl} alt="channel logo" />
                <VideoHeadingAndContentContainer>
                  <VideoHeading isDarkTheme={isDarkTheme}>{title}</VideoHeading>
                  <VideoStatsContainer>
                    <ChannelName>{name}</ChannelName>
                    <VideoStats>
                      <Dot1>
                        <BsDot size={20} color=" #475569" />
                      </Dot1>
                      <Views>{viewCount}</Views>
                      <Dot2>
                        <BsDot size={20} color=" #475569" />
                      </Dot2>
                      <UploadedOn>{publishedAt}</UploadedOn>
                    </VideoStats>
                  </VideoStatsContainer>
                </VideoHeadingAndContentContainer>
              </VideoInfoContainer>
            </Link>
          </SavedVideosListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideosList
