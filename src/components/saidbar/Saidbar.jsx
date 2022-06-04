import "./sadbar.css";

import {RssFeed,Chat,Group,QuestionAnswer,VideoCall,Bookmark,Work,Event,Chalet} from "@mui/icons-material";

import FrendLogo from "../../assets/portrait-normal-boy-smiling-over-260nw-135283244.webp";

function Saidbar(){
    return(
        <div className="saidbar">
        <div className="sadbarWrapper">
            <ul className="saidbarList">
                <li className="saidbarListItem">
                    <RssFeed className="saidbarIcon" />
                    <span className="saidbarListItemText">Feed</span>
                </li>
                <li className="saidbarListItem">
                    <Chat className="saidbarIcon" />
                    <span className="saidbarListItemText">Chat</span>
                </li>
                <li className="saidbarListItem">
                    <VideoCall className="saidbarIcon" />
                    <span className="saidbarListItemText">Video</span>
                </li>
                <li className="saidbarListItem">
                    <Group className="saidbarIcon" />
                    <span className="saidbarListItemText">Group</span>
                </li>
                <li className="saidbarListItem">
                    <Bookmark className="saidbarIcon" />
                    <span className="saidbarListItemText">Bookmark</span>
                </li>
                <li className="saidbarListItem">
                    <QuestionAnswer className="saidbarIcon" />
                    <span className="saidbarListItemText">QuestionAnswer</span>
                </li>
                <li className="saidbarListItem">
                    <Work className="saidbarIcon" />
                    <span className="saidbarListItemText">Jobs</span>
                </li>
                <li className="saidbarListItem">
                    <Event className="saidbarIcon" />
                    <span className="saidbarListItemText">Event</span>
                </li>
                <li className="saidbarListItem">
                    <Chalet className="saidbarIcon" />
                    <span className="saidbarListItemText">Chalet</span>
                </li>
            </ul>
            <button className="saidbarButton">Show More</button>
            <hr className="saidbarHr" />
            <ul className="saidbarFrendList">
                <li className="saidbarFrend">
                    <img className="saidbarFrendImg" src={FrendLogo} alt="" />
                    <span className="saidbarFrendName">Jan Doe</span>
                </li>
                <li className="saidbarFrend">
                    <img className="saidbarFrendImg" src={FrendLogo} alt="" />
                    <span className="saidbarFrendName">Jan Doe</span>
                </li>
                <li className="saidbarFrend">
                    <img className="saidbarFrendImg" src={FrendLogo} alt="" />
                    <span className="saidbarFrendName">Jan Doe</span>
                </li>
                <li className="saidbarFrend">
                    <img className="saidbarFrendImg" src={FrendLogo} alt="" />
                    <span className="saidbarFrendName">Jan Doe</span>
                </li>
                <li className="saidbarFrend">
                    <img className="saidbarFrendImg" src={FrendLogo} alt="" />
                    <span className="saidbarFrendName">Jan Doe</span>
                </li>
                <li className="saidbarFrend">
                    <img className="saidbarFrendImg" src={FrendLogo} alt="" />
                    <span className="saidbarFrendName">Jan Doe</span>
                </li>
                <li className="saidbarFrend">
                    <img className="saidbarFrendImg" src={FrendLogo} alt="" />
                    <span className="saidbarFrendName">Jan Doe</span>
                </li>
                <li className="saidbarFrend">
                    <img className="saidbarFrendImg" src={FrendLogo} alt="" />
                    <span className="saidbarFrendName">Jan Doe</span>
                </li>
                <li className="saidbarFrend">
                    <img className="saidbarFrendImg" src={FrendLogo} alt="" />
                    <span className="saidbarFrendName">Jan Doe</span>
                </li>
                <li className="saidbarFrend">
                    <img className="saidbarFrendImg" src={FrendLogo} alt="" />
                    <span className="saidbarFrendName">Jan Doe</span>
                </li>
            </ul>
        </div> 
        </div>
    )
}
export default Saidbar;