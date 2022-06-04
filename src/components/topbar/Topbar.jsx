import PersonLogo from "../../assets/pexels-photo-220453.webp";

import {Search,Person,Chat , Notifications} from "@mui/icons-material";

import  './topbar.css';


export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo">SamandarSocial</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
            <Search className="searchIcon" />
            <input type="text" placeholder='search for frends' className="searchInput"   />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="tobbarLink">
                    Hompages
                </span>
                <span className="tobbarLink">
                 Timline    
                </span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person />
                    <span className="topbarIconsBadge">
                        1
                    </span>
                </div>
                <div className="topbarIconItem">
                    <Chat />
                    <span className="topbarIconsBadge">
                        2
                    </span>
                </div>
                <div className="topbarIconItem">
                    <Notifications />
                    <span className="topbarIconsBadge">
                        1
                    </span>
                </div>
            </div>
            <img src={PersonLogo} alt="" className="topbarImg" />
        </div>

    </div>
  )
}
