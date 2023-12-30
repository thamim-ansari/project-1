import styled from 'styled-components'

export const NoSearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NoSearchResultImage = styled.img`
  width: 280px;
  height: 220px;
  margin-bottom: 15px;
`
export const NoSearchResultHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 15px;
`
export const NoSearchResultDescription = styled.p`
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
  font-family: 'Roboto';
  font-size: 16px;
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
export const VideosList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`
export const VideoItem = styled.li`
  width: 100%;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-right: 15px;
    margin-bottom: 15px;
  }
`
export const ThumbNailImage = styled.img`
  width: 100%;
  height: 200px;
`
export const VideoInfoContainer = styled.div`
  display: flex;
  padding: 15px;
`
export const ChannelLogoImage = styled.img`
  width: 35px;
  height: 35px;
  align-self: flex-start;
`

export const VideoHeadingAndContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const VideoHeading = styled.h1`
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
