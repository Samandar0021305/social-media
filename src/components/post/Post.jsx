import "./post.css";
import {MoreVert,ThumbUp,Favorite} from "@mui/icons-material";

import myLogo from "../../assets/pexels-photo-220453.webp"
import logo from "../../assets/post.webp";
import { useState } from "react";

import response from "../../FeedPost";


export default function Post() {
    const [x,setX] = useState(Math.floor(Math.random()*100))
    
    const handl = ()=>{
        setX(x + 1)
    }
    
      return (
    <div className="post">
       {response.map((res)=>{
           return(
            <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={myLogo} alt="" />
                    <span className="postUserName">Safak Kochugali</span>
                    <span className="postDate">{res.id} min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{res.post}</span>

                <img className="postImg" src={res.img} alt="logo" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUp className="likeIcon" key={res.id} onClick={handl}  htmlColor="blue" />
                    <Favorite className="likeIcon" key={res.id}  onClick={handl} htmlColor="red" />
                    <span className="postLikeCounter" key={res.id}>{x} people like it </span>
                </div>
                <div className="postBottomRigth">
                    <span className="postCommentText">{res.id} comment</span>
                </div>
            </div>
        </div>
           )
       })}
    </div>
  )
}
