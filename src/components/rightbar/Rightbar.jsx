import "./rightbar.css";

import data from "../../asaidData";
import Gift from "../../assets/gift-box.png"
import BrthdayLogo from "../../assets/birthday-wishes-for-friend-11-1024x1024.jpg";


export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="brithdayContainer">
          <img src={Gift} alt="" className="brithdayImg" />
          <span className="brithdayText"> <b>Pola Foster</b> and <b>3 other frends</b> have a brithday today</span>
        </div>
        <img className="rightbarAd" src={BrthdayLogo} alt="" />
        <h4 className="rightbarTitle">online Frends</h4>
        <ul className="rightbarFrendList">
          {data.reverse().map((element)=>{
            return(
              <li className="rightbarFrend" key={element.id}>
            <div className="rightbarImgContainer">
             <img className="rightbarProfilaImg" src={element.img} alt="" /> 
             <span className="rightbarOnline"></span>
            </div>
            <span className="rigthbarUserName">{element.name}</span>
          </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
