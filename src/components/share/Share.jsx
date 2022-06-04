import "./share.css";
import {PermMedia} from "@mui/icons-material";

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
                    <PermMedia className="shareIocn" />
                    <span className="shareOptionText">Photo our Video</span>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}
