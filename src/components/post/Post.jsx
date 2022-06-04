import "./post.css";
import {MoreVert,ThumbUp,Favorite} from "@mui/icons-material";

import myLogo from "../../assets/pexels-photo-220453.webp"
import logo from "../../assets/post.webp";
import { useState } from "react";
export default function Post() {
    const [x,setX] = useState(23)
 const handl = ()=>{
     setX(x+1)
 }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={myLogo} alt="" />
                    <span className="postUserName">Safak Kochugali</span>
                    <span className="postDate">5 min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey its mey post :)</span>

                <img className="postImg" src={logo} alt="logo" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUp className="likeIcon" onClick={handl}  htmlColor="blue" />
                    <Favorite className="likeIcon" onClick={handl} htmlColor="red" />
                    <span className="postLikeCounter">{x} people like it </span>
                </div>
                <div className="postBottomRigth">
                    <span className="postCommentText">9 comment</span>
                </div>
            </div>
        </div>
    </div>
  )
}
