import "./post.css";
import {MoreVert,ThumbUp,Favorite} from "@mui/icons-material";

import myLogo from "../../assets/pexels-photo-220453.webp"
import logo from "../../assets/post.webp";
export default function Post({post}) {
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
                    <ThumbUp className="likeIcon"  htmlColor="blue" />
                    <Favorite className="likeIcon" htmlColor="red" />
                    <span className="postLikeCounter">32 people like it </span>
                </div>
                <div className="postBottomRigth">
                    <span className="postCommentText">9 comment</span>
                </div>
            </div>
        </div>
    </div>
  )
}
