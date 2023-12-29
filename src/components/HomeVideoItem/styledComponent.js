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
  padding: 0px;
`
export const VideoItem = styled.li`
  width: 100%;
  list-style-type: none;
`
export const ThumbNailImage = styled.img`
  width: 100%;
  height: 200px;
  margin-bottom: 15px;
`
export const VideoInfoContainer = styled.div`
  display: flex;
`
export const ChannelLogoImage = styled.img`
  width: 100px;
`

export const VideoHeadingAndContentContainer = styled.div`
  display: flex;
`

export const VideoHeading = styled.h1`
  font-family: 'Roboto';
`
