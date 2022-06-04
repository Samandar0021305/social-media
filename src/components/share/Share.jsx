import "./share.css";
import {PermMedia,Label,Room,EmojiEmotions} from "@mui/icons-material";

import Mylogo from "../../assets/pexels-photo-220453.webp";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
          <div className="shareTop">
            <img className="shareProfilaImg" src={Mylogo} alt="my logo" />
            <input placeholder="Whats in your mind" className="shareInput" />
          </div>
          <hr className="shareHr" />
          <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIocn" />
                    <span className="shareOptionText">Photo our Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIocn" />
                    <span className="shareOptionText">tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIocn" />
                    <span className="shareOptionText">location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIocn" />
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton"> Share</button>
          </div>
      </div>
    </div>
  )
}
