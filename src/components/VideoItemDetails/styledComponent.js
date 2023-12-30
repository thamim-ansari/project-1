import styled from 'styled-components'

export const VideoItemDetailsPageContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f ' : '#f9f9f9 ')};
  min-height: 100vh;
`
export const VideoItemDetailContainer = styled.div`
  display: flex;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`
export const VideoDetailsContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 25px 20px;
  }
`
export const FailureContainer = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const FailureImage = styled.img`
  width: 300px;
  width: 250px;
`
export const FailureHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 15px;
`
export const FailureDescription = styled.p`
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  margin: 0px;
  margin-bottom: 20px;
`
export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  padding: 10px 28px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const VideoContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    height: 450px;
  }
`
export const VideoDetails = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`
export const VideoHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? ' #e2e8f0' : '#1e293b')};
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 400;
`
export const VideoStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ViewsAndTimeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
export const Views = styled.p`
  color: ${props => (props.isDarkTheme ? ' #64748b' : '#616e7c')};
  font-family: 'Roboto';
  font-size: 12px;
`
export const PublishedAt = styled.p`
  color: ${props => (props.isDarkTheme ? ' #64748b' : '#616e7c')};
  font-family: 'Roboto';
  font-size: 12px;
`
export const LikeAndDislikeContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LikeButton = styled.button`
  background-color: transparent;
  color: ${props => props.LikedColor};
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  padding: none;
  margin: none;
  margin-right: 30px;
`
export const DislikeButton = styled.button`
  background-color: transparent;
  color: ${props => props.DislikedColor};
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  padding: none;
  margin: none;
  margin-right: 30px;
`
export const SavedButton = styled.button`
  background-color: transparent;
  color: ${props => props.SavedColor};
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  padding: none;
  margin: none;
  margin-right: 30px;
`
export const LineSeparator = styled.hr`
  border: 1px solid ${props => (props.isDarkTheme ? '#475569' : '#e2e8f0')};
  margin-top: 20px;
  margin-bottom: 30px;
`
export const ChanelInfoAndDescriptionContainer = styled.div`
  font-family: 'Roboto';
`
export const ChanelLogoAndNameInfoContainer = styled.div`
  font-family: 'Roboto';
  display: flex;
`
export const ChanelLogoImage = styled.img`
  width: 50px;
  height: 50px;
  align-self: flex-start;
`
export const ChannelStatsInfoContainer = styled.div`
  margin-left: 15px;
  margin-bottom: 15px;
`
export const ChanelName = styled.p`
  color: ${props => (props.isDarkTheme ? ' #e2e8f0' : '#1e293b')};
  font-family: 'Roboto';
  margin: 0px;
  font-size: 12px;
`
export const SubscribersCount = styled.p`
  color: ${props => (props.isDarkTheme ? ' #64748b' : '#616e7c')};
  font-family: 'Roboto';
  font-size: 12px;
`
export const VideoDescription = styled.p`
  color: ${props => (props.isDarkTheme ? ' #e2e8f0' : ' #475569')};
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 1.5;
`
