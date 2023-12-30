import styled from 'styled-components'

export const NavContainer = styled.nav`
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  width: 100%;
`
export const ResponsiveContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const AppLogoImage = styled.img`
  width: 100px;
`
export const NavMenuContainer = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
`
export const ToggleThemeButton = styled.button`
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
`
export const HamburgerMenuButton = styled.button`
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MobileLogoutButton = styled.button`
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ProfileImage = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: block;
    width: 25px;
    height: 25px;
    margin-left: 25px;
    margin-right: 25px;
  }
`
export const DesktopLogoutButton = styled.button`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: block;
    background-color: transparent;
    color: #3b82f6;
    border: 1px solid #3b82f6;
    font-family: 'Roboto';
    font-size: 13px;
    font-weight: 500;
    padding: 5px 16px;
    border-radius: 3px;
  }
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const PopupButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PopupDescription = styled.p`
  color: #f9f9f9;
  font-family: 'Roboto';
  font-size: 14px;
`
export const PopupButton = styled.button`
  color: ${props => (props.isCancel ? '#f9f9f9' : '#94a3b8')};
  background-color: ${props => (props.isCancel ? '#3b82f6' : 'transparent')};
  border: ${props => (props.isCancel ? 'none' : '1px solid #94a3b8')};
  font-family: 'Roboto';
  font-size: 14px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 80px;
  border-radius: 4px;
  margin-left: 10px;
  margin-right: 10px;
`
