import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoItemDetailsPageContainer,
  VideoItemDetailContainer,
  LoaderContainer,
  VideoDetailsContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  VideoContainer,
  VideoDetails,
  VideoHeading,
  VideoStatsContainer,
  ViewsAndTimeContainer,
  Views,
  PublishedAt,
  LikeAndDislikeContainer,
  LikeButton,
  DislikeButton,
  SavedButton,
  LineSeparator,
  ChanelInfoAndDescriptionContainer,
  ChanelLogoAndNameInfoContainer,
  ChanelLogoImage,
  ChannelStatsInfoContainer,
  ChanelName,
  SubscribersCount,
  VideoDescription,
} from './styledComponent'
import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstant.initial,
    isLiked: false,
    isDisked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.inprogress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const formattedData = {
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: `${formatDistanceToNow(
          new Date(data.video_details.published_at),
        ).slice(-7)} ago`,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        videoDetails: formattedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const failureImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContainer>
            <FailureImage src={failureImgUrl} alt="failure view" />
            <FailureHeading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription isDarkTheme={isDarkTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <RetryButton type="button" onClick={this.onRetry}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  onToggleLike = () => {
    this.setState(prev => ({isLiked: !prev.isLiked, isDisked: false}))
  }

  onToggleDisLike = () => {
    this.setState(prev => ({isDisked: !prev.isDisked, isLiked: false}))
  }

  onToggleSaved = () => {
    this.setState(prev => ({isSaved: !prev.isSaved}))
  }

  renderVideoDetailsView = () => {
    const {videoDetails, isLiked, isDisked, isSaved} = this.state
    const {
      description,
      // eslint-disable-next-line
      id,
      publishedAt,
      title,
      videoUrl,
      viewCount,
      profileImageUrl,
      name,
      subscriberCount,
    } = videoDetails
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, addVideo} = value
          const LikedColor = isLiked ? '#2563eb' : '#64748b'
          const DislikedColor = isDisked ? '#2563eb' : '#64748b'
          const SavedColor = isSaved ? '#2563eb' : '#64748b'
          const onToggleSaved = () => {
            this.setState(prev => ({isSaved: !prev.isSaved}))
            addVideo(videoDetails)
          }

          return (
            <>
              <VideoContainer>
                <ReactPlayer
                  className="video-player"
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </VideoContainer>
              <VideoDetails>
                <VideoHeading isDarkTheme={isDarkTheme}>{title}</VideoHeading>
                <VideoStatsContainer>
                  <ViewsAndTimeContainer>
                    <Views isDarkTheme={isDarkTheme}>{viewCount}</Views>
                    <BsDot size={20} color=" #475569" />
                    <PublishedAt isDarkTheme={isDarkTheme}>
                      {publishedAt}
                    </PublishedAt>
                  </ViewsAndTimeContainer>
                  <LikeAndDislikeContainer>
                    <LikeButton
                      type="button"
                      isDarkTheme={isDarkTheme}
                      onClick={this.onToggleLike}
                      LikedColor={LikedColor}
                    >
                      <BiLike
                        color={LikedColor}
                        size={20}
                        className="like-dislike-save-icons"
                      />
                      Like
                    </LikeButton>
                    <DislikeButton
                      type="button"
                      isDarkTheme={isDarkTheme}
                      DislikedColor={DislikedColor}
                      onClick={this.onToggleDisLike}
                    >
                      <BiDislike
                        color={DislikedColor}
                        size={20}
                        className="like-dislike-save-icons"
                      />
                      Dislike
                    </DislikeButton>
                    <SavedButton
                      type="button"
                      isDarkTheme={isDarkTheme}
                      SavedColor={SavedColor}
                      onClick={onToggleSaved}
                    >
                      <MdPlaylistAdd
                        color={SavedColor}
                        size={20}
                        className="like-dislike-save-icons"
                      />
                      {isSaved ? 'Saved' : 'Save'}
                    </SavedButton>
                  </LikeAndDislikeContainer>
                </VideoStatsContainer>
                <LineSeparator isDarkTheme={isDarkTheme} />
                <ChanelInfoAndDescriptionContainer>
                  <ChanelLogoAndNameInfoContainer>
                    <ChanelLogoImage src={profileImageUrl} alt="channel logo" />
                    <ChannelStatsInfoContainer>
                      <ChanelName isDarkTheme={isDarkTheme}>{name}</ChanelName>
                      <SubscribersCount isDarkTheme={isDarkTheme}>
                        {subscriberCount} subscribers
                      </SubscribersCount>
                    </ChannelStatsInfoContainer>
                  </ChanelLogoAndNameInfoContainer>
                  <VideoDescription isDarkTheme={isDarkTheme}>
                    {description}
                  </VideoDescription>
                </ChanelInfoAndDescriptionContainer>
              </VideoDetails>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderVideoDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderVideoDetailsView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      case apiStatusConstant.inprogress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <VideoItemDetailsPageContainer
              isDarkTheme={isDarkTheme}
              data-testid="videoItemDetails"
            >
              <Header />
              <VideoItemDetailContainer>
                <SideBar />
                <VideoDetailsContainer>
                  {this.renderVideoDetails()}
                </VideoDetailsContainer>
              </VideoItemDetailContainer>
            </VideoItemDetailsPageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
