import styled from 'styled-components'

export const SavedVideosPageContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : ' #f9f9f9 ')};
  min-height: 100vh;
`

export const SavedVideosAndSidebarContainer = styled.div`
  display: flex;
`
export const NotFoundContainer = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NotFoundContentContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NotFoundImage = styled.img`
  width: 350px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 450px;
    height: 370px;
  }
`
export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 20px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 15px;
  }
`
export const NotFoundDescription = styled.p`
  color: #475569;
  width: 75%;
  font-family: 'Roboto';
  font-size: 14px;
  text-align: center;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
