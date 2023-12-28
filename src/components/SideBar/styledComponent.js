import styled from 'styled-components'

export const SideBarContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: block;
    background-color: ${props => (props.isDarkTheme ? '#212121' : '#f9f9f9')};
    width: 25%;
    height: 92vh;
  }
`
export const SideBarNavList = styled.ul`
  list-style-type: none;
  padding: 0px;
`
export const SideBarNavItems = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const NavRoute = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
`
export const ContactUsContainer = styled.div`
  font-family: 'Roboto';
`
export const ContactUsHeader = styled.h1`
  font-family: 'Roboto';
`
export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`
export const SocialMedia = styled.img`
  width: 25px;
  height: 25px;
`
export const ContactUsDescription = styled.p`
  font-family: 'Roboto';
`
