import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Saidbar from "../../components/saidbar/Saidbar";
import Topbar from "../../components/topbar/Topbar";

import './home.css';

function Home(){
    return(
        <>
        <Topbar />
        <div className="homeContainer">
        <Saidbar />
        <Feed />
        <Rightbar />
        </div>

        </>
    )
}

export default Home;