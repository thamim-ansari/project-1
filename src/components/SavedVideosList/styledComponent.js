import styled from 'styled-components'

export const SavedVideosListItem = styled.li`
  list-style-type: none;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`
export const SavedVideosImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 110px;
  }
`
export const VideoInfoContainer = styled.div`
  display: flex;
  padding: 15px;
  @media screen and (min-width: 768px) {
    padding: 0px;
  }
`
export const ChannelLogoImage = styled.img`
  width: 35px;
  height: 35px;
  align-self: flex-start;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const VideoHeadingAndContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const VideoHeading = styled.p`
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0px;
  @media screen and (min-width: 768px) {
    margin-bottom: 5px;
  }
`
export const VideoStatsContainer = styled.div`
  display: flex;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`
export const ChannelName = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    margin: 0px;
    margin-bottom: 5px;
  }
`
export const VideoStats = styled.div`
  display: flex;
  align-items: center;
`
export const Dot1 = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const Dot2 = styled.div`
  display: flex;
`
export const Views = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    margin: 0px;
  }
`
export const UploadedOn = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    margin: 0px;
  }
`
