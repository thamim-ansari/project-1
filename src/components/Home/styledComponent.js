import styled from 'styled-components'

export const HomePageContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9 ')};
  min-height: 100vh;
`
export const HomeContainer = styled.div`
  display: flex;
`
export const BannerAndContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 95vh;
    overflow-y: auto;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  background-size: cover;
`
export const BannerLogoAndCloseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`
export const LogoAndBannerContent = styled.div`
  width: 70%;
  @media screen and (min-width: 768px) {
    width: 25%;
  }
`
export const LogoImage = styled.img`
  width: 130px;
`
export const BannerDescription = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  line-height: 2;
  margin-top: 10px;
  margin-bottom: 25px;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  align-self: flex-start;
  margin: 0px;
  padding: 0px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const GetPremiumButton = styled.button`
  color: #1e293b;
  background-color: transparent;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 16px;
  border: 1px solid #000000;
  padding: 8px 16px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`
export const HomeContentContainer = styled.div`
  font-family: 'Roboto';
  padding-top: 15px;
  @media screen and (min-width: 768px) {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
`
export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 50%;
    justify-content: flex-start;
    margin-bottom: 40px;
  }
`
export const SearchInputContainer = styled.div`
  display: flex;
  width: 95%;
  border: 1px solid ${props => (props.isDarkTheme ? '#383838' : '#e2e8f0')};
`
export const SearchInput = styled.input`
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
  font-family: 'Roboto';
  font-size: 14px;
  background-color: transparent;
  flex-grow: 1;
  padding-left: 10px;
  height: 30px;
  border: none;
  outline: none;
`
export const SearchButton = styled.button`
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#f1f5f9')};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 24px;
  border: none;
  border-left: 1px solid ${props => (props.isDarkTheme ? '#383838' : '#e2e8f0')};
  outline: none;
  cursor: pointer;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
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
