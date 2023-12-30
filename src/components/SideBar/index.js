import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import ThemeContext from '../../context/ThemeContext'
import {
  SideBarContainer,
  SideBarNavList,
  SideBarNavItems,
  NavRoute,
  ContactUsContainer,
  ContactUsHeader,
  SocialMediaContainer,
  SocialMedia,
  ContactUsDescription,
} from './styledComponent'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, changeTab, activeTab} = value

      const activeTabBg = isDarkTheme ? '#424242' : '#e2e8f0'
      const iconTheme = isDarkTheme ? '#909090' : '#606060'
      const activeIconThem = isDarkTheme ? '#ff0b37' : '#ff0000'
      const navTextColor = isDarkTheme ? '#cccccc' : '#606060'
      const activeNavText = isDarkTheme ? '#f9f9f9' : '#181818'

      const onClickHomeTab = () => {
        changeTab('Home')
      }

      const onClickTrendingTab = () => {
        changeTab('Trending')
      }

      const onClickGamingTab = () => {
        changeTab('Gaming')
      }

      const onClickSavedVideosTab = () => {
        changeTab('Saved Videos')
      }
      return (
        <SideBarContainer isDarkTheme={isDarkTheme}>
          <SideBarNavList>
            <SideBarNavItems
              key="Home"
              onClick={onClickHomeTab}
              bgColor={activeTab === 'Home' ? activeTabBg : 'null'}
            >
              <AiFillHome
                size={20}
                color={activeTab === 'Home' ? activeIconThem : iconTheme}
              />
              <NavRoute
                textColor={activeTab === 'Home' ? activeNavText : navTextColor}
                weight={activeTab === 'Home'}
              >
                Home
              </NavRoute>
            </SideBarNavItems>
            <SideBarNavItems
              key="Trending"
              onClick={onClickTrendingTab}
              bgColor={activeTab === 'Trending' ? activeTabBg : 'null'}
            >
              <HiFire
                size={20}
                color={activeTab === 'Trending' ? activeIconThem : iconTheme}
              />
              <NavRoute
                textColor={
                  activeTab === 'Trending' ? activeNavText : navTextColor
                }
                weight={activeTab === 'Trending'}
              >
                Trending
              </NavRoute>
            </SideBarNavItems>
            <SideBarNavItems
              key="Gaming"
              onClick={onClickGamingTab}
              bgColor={activeTab === 'Gaming' ? activeTabBg : 'null'}
            >
              <SiYoutubegaming
                size={20}
                color={activeTab === 'Gaming' ? activeIconThem : iconTheme}
              />
              <NavRoute
                textColor={
                  activeTab === 'Gaming' ? activeNavText : navTextColor
                }
                weight={activeTab === 'Gaming'}
              >
                Gaming
              </NavRoute>
            </SideBarNavItems>
            <SideBarNavItems
              key="Saved Videos"
              onClick={onClickSavedVideosTab}
              bgColor={activeTab === 'Saved Videos' ? activeTabBg : 'null'}
            >
              <MdPlaylistAdd
                size={20}
                color={
                  activeTab === 'Saved Videos' ? activeIconThem : iconTheme
                }
              />
              <NavRoute
                textColor={
                  activeTab === 'Saved Videos' ? activeNavText : navTextColor
                }
                weight={activeTab === 'Saved Videos'}
              >
                Saved videos
              </NavRoute>
            </SideBarNavItems>
          </SideBarNavList>
          <ContactUsContainer>
            <ContactUsHeader isDarkTheme={isDarkTheme}>
              CONTACT US
            </ContactUsHeader>
            <SocialMediaContainer>
              <SocialMedia
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMedia
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                alt="twitter logo"
              />
              <SocialMedia
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaContainer>
            <ContactUsDescription isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsDescription>
          </ContactUsContainer>
        </SideBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
