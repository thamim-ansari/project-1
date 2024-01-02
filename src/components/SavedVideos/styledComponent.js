import styled from 'styled-components'

export const SavedVideosPageContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : ' #f9f9f9 ')};
  min-height: 100vh;
`

export const SavedVideosAndSidebarContainer = styled.div`
  display: flex;
`
export const SavedVideosContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 95vh;
    overflow-y: auto;
  }
`
export const SavedHeaderAndLogoContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f1f1f1')};
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`
export const SavedVideosLogoContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#d7dfe9')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    width: 65px;
    height: 65px;
  }
`
export const SavedVideosPageHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const SavedVideosListContainer = styled.ul`
  padding-left: 0px;
  @media screen and (min-width: 768px) {
    margin-top: 30px;
    margin-left: 30px;
  }
`
export const NoVideosContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoVideosContentContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NoVideosImage = styled.img`
  width: 350px;
  height: 250px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 450px;
    height: 350px;
  }
`
export const NoVideosHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 24px;
  margin-bottom: 5px;
`
export const NoVideosDescription = styled.p`
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#64748b')};
  font-family: 'Roboto';
  font-size: 16px;
`
