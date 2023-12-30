import styled from 'styled-components'

export const VideoItemDetailsPageContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9 ')};
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
`
