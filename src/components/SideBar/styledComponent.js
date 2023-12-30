import styled from 'styled-components'

export const SideBarContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: block;
    background-color: ${props => (props.isDarkTheme ? '#212121' : '#f9f9f9')};
    width: 25%;
    height: 95vh;
    display: flex;
    flex-direction: column;
  }
`
export const SideBarNavList = styled.ul`
  list-style-type: none;
  flex-grow: 1;
  padding: 0px;
`
export const SideBarNavItems = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
`
export const NavRoute = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: ${props => (props.weight ? 'Bold' : '400')};
  margin-left: 25px;
`
export const ContactUsContainer = styled.div`
  margin-left: 15px;
`
export const ContactUsHeader = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 14px;
  margin-bottom: 20px;
`
export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  margin-bottom: 20px;
`
export const SocialMedia = styled.img`
  width: 25px;
  height: 25px;
`
export const ContactUsDescription = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#475569')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  width: 200px;
  line-height: 1.5;
  margin-bottom: 40px;
`
