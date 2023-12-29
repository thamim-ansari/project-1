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
