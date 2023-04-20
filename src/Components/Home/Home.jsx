import React from "react";
import './Home.css';
import video from '../../img/running.mp4'

const Home = () => {
    return (
        <div className="home">
            <div className="sale"></div>
            <video src={video} muted autoPlay loop type="video/mp4"/>

            <div className="homeContent">
                <h3 className="title">換季特惠</h3>
                <p className="contentText">
                    特惠商品只要選購3件以上，即可享額外7折優惠。<br/>
                    使用優惠代碼：IWW0323。
                </p>
                <div className="saleButton">
                    <button>選購</button>
                    <button>促銷條款</button>
                </div>
            </div>
        </div>
    )
}

export default Home;