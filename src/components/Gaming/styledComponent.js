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
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    padding-left: 20px;
    padding-top: 40px;
  }
`
export const SavedVideosListItem = styled.li`
  width: 40%;
  margin-left: 10px;
  margin-right: 10px;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    width: 18%;
    margin-bottom: 20px;
  }
`
export const SavedVideosImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 250px;
  }
`
export const GamingHeading = styled.p`
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
export const GamingStats = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
`
export const FailureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`
export const FailureResponsiveContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    max-width: 450px;
  }
`
export const FailureImage = styled.img`
  width: 200px;
  height: 175px;
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 300px;
  }
`
export const FailureHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
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
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`
