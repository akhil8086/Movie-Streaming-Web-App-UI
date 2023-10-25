
import testSvg from "../assets/icon.svg"
import homeSvg from "../assets/home.svg"
import favouriteSvg from "../assets/favourites.svg"
import trendingSvg from "../assets/trending.svg"
import comingSoonSvg from "../assets/comingSoon.svg"
import communitySvg from "../assets/community.svg"
import socialSvg from "../assets/Social.svg"
import settingsSvg from "../assets/settings.svg"
import logoutSvg from "../assets/logout.svg"
import "./Sidenav.css"

function Sidenav() {
  return (
    <div className="SideNav">
        <div className="sidenav_logo">
        <img src={testSvg} alt='icon'  className="logos"/>
        <h1 className="heading">WATCH</h1>
        </div>

        <div className="section_one">
        
        
        <button className="sidenav_buttons">
        <img src={homeSvg} alt='Home'  className="logos-one"/>
        <span className="fonts">Home</span>
        </button>
       

       
        <button className="sidenav_buttons">
        <img src={favouriteSvg} alt='Favourite'  className="logos-one"/>
        <span className="fonts">Favourites</span>
        </button>
  
        
      
        <button className="sidenav_buttons">
        <img src={trendingSvg} alt='Trending' className="logos-one"/>
        <span className="fonts">Trending</span>
        </button>
      

       
        <button className="sidenav_buttons">
        <img src={comingSoonSvg} alt='Coming_soon' className="logos-one" />
        <span className="fonts">Coming soon</span>
        </button>
     
        </div>


        <div className="section_two">

       
        <button className="sidenav_buttons">
        <img src={communitySvg} alt='community' className="logos-one" />
        <span className="fonts">Community</span>
        </button>
      
        <button className="sidenav_buttons">
        <img src={socialSvg} alt='Social'  className="logos-one"/>
        <span className="fonts">Social</span>
        </button>
     

        </div>

        <div className="section_three">

        <button className="sidenav_buttons">
            <img src={settingsSvg} alt="Settings" className="logos-one"/>
            <span className="fonts">Settings</span>
            </button>
       
        <button className="sidenav_buttons">
            <img src={logoutSvg} alt="Logout"  className="logos-one"/>
            <span className="fonts">Logout</span>
            </button>
       
        </div>

        </div>


  )
}

export default Sidenav