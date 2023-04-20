import React from "react";
import './Main.css';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import airmax1 from '../../img/airmax1.jpg';
import airmax2 from '../../img/airmax2.jpg';
import airmax4 from '../../img/airmax4.jpg';
import man from '../../img/man.jpg';
import woman from '../../img/woman.jpg';
import kid from '../../img/kid.jpg';
import { useGlobalContext } from '../../context';
const Main = () => {
    const { mouseOver,mouseLeave } = useGlobalContext();
    return (
        <div className="Main">
            <div className="imgContent">
                <img src={img1} alt="" />
            </div>

            <div className="mainContent flex">
                <p className="firstLook">搶先看</p>
                <h1 className="mainTitle">NIKE AIR <br /> MAX PULSE</h1>
                <p className="mainText">格外舒適， 超級耐穿， 氣墊升級。 隆重介紹Air Max Pulse， 專為超越極限和最佳表現而生。</p>
                <div className="mainBtn">
                    <button>通知我</button>
                    <button>選購 Air Max</button>
                </div>
            </div>

            <div className="mainAirMax">
                <div className="airmaxTitle">
                    <p className="title">最棒的 Air Max</p>
                </div>
                <div className="airmaxGroup grid">
                    <div className="airmaxContent grid">
                        <div className="airmaxItem">
                            <div className="airmaxImg">
                                <img src={airmax1} alt="" className="product" />
                            </div>
                            <div className="airmaxInfo">
                                <div className="info flex">
                                    <h4 className="infoName"> NIKE AirMax </h4>
                                    <p className="price">$4800</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="airmaxContent grid">
                        <div className="airmaxItem">
                            <div className="airmaxImg">
                                <img src={airmax2} alt="" className="product" />
                            </div>
                            <div className="airmaxInfo">
                                <div className="info flex">
                                    <h4 className="infoName"> NIKE AirMax </h4>
                                    <p className="price">$4800</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="airmaxContent grid">
                        <div className="airmaxItem">
                            <div className="airmaxImg">
                                <img src={airmax4} alt="" className="product" />
                            </div>
                            <div className="airmaxInfo">
                                <div className="info flex">
                                    <h4 className="infoName"> NIKE AirMax </h4>
                                    <p className="price">$4800</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mainFeatured">
                <div className="title">
                    <h2 className="text">精選</h2>
                </div>

                <div className="featuredImg">
                    <img src={img2} alt="" />
                </div>
                <div className="featuredText">
                    <h3 className="title">穿對鞋款跟著感覺走</h3>
                    <p className="desc">每個人都應該體驗穿上理想鞋款跑步的感受</p>
                    <button className="">找到適合的鞋款</button>
                </div>
            </div>

            <div className="mainMustHave">
                <div className="title">
                    <h2>必備單品</h2>
                </div>

                <div className="mainProduct flex">
                    <div className="productItem">
                        <div className="productImg">
                            <img src={man} alt="" />
                            <div className="productBtn">
                                <button>男款</button>
                            </div>
                        </div>
                    </div>

                    <div className="productItem">
                        <div className="productImg">
                            <img src={woman} alt="" />
                            <div className="productBtn">
                                <button>女款</button>
                            </div>
                        </div>
                    </div>

                    <div className="productItem">
                        <div className="productImg">
                            <img src={kid} alt="" />
                            <div className="productBtn">
                                <button>兒童款</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mainFooter grid" onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
                <div className="groupFooter">
                    <h4>經典款</h4>
                    <div className="footerMenu">
                        <ul className="list">
                            <li className="item">Air Force 1</li>
                            <li className="item">Huarache</li>
                            <li className="item">Air Max 90</li>
                            <li className="item">Air Max 95</li>
                            <li className="item">Air Max 97</li>
                            <li className="item">Air Max 270</li>
                            <li className="item">Air Max 720</li>
                            <li className="item">所有Air Max</li>
                        </ul>
                    </div>
                </div>
                <div className="groupFooter">
                    <h4>鞋款</h4>
                    <div className="footerMenu">
                        <ul className="list">
                            <li className="item">所有鞋款</li>
                            <li className="item">專屬訂製鞋款</li>
                            <li className="item">Jordan 鞋款</li>
                            <li className="item">跑鞋</li>
                            <li className="item">籃球鞋款</li>
                            <li className="item">足球鞋款</li>
                            <li className="item">健身與訓練鞋款</li>
                            <li className="item">運動生活鞋款</li>
                        </ul>
                    </div>
                </div>
                <div className="groupFooter">
                    <h4>服裝</h4>
                    <div className="footerMenu">
                        <ul className="list">
                            <li className="item">所有服裝</li>
                            <li className="item">合宜穿著</li>
                            <li className="item">連帽上衣與套頭</li>
                            <li className="item">T恤與上衣</li>
                            <li className="item">外套</li>
                            <li className="item">緊身與Nike Pro</li>
                            <li className="item">長褲與內搭褲</li>
                            <li className="item">短褲</li>
                        </ul>
                    </div>
                </div>
                <div className="groupFooter">
                    <h4>兒童款</h4>
                    <div className="footerMenu">
                        <ul className="list">
                            <li className="item">嬰幼兒鞋款</li>
                            <li className="item">兒童鞋款</li>
                            <li className="item">兒童Jordan鞋款</li>
                            <li className="item">兒童籃球鞋</li>
                            <li className="item">兒童跑鞋</li>
                            <li className="item">兒童服裝</li>
                            <li className="item">兒童背包</li>
                            <li className="item">兒童襪子</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main