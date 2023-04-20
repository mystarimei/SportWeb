import React from "react";
import './Footer.css';
import { AiOutlineTwitter, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { TfiYoutube } from 'react-icons/tfi';
import { ImInstagram } from 'react-icons/im';
import { FaFacebookF } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useGlobalContext } from '../../context';
const Footer = () => {
    const {
        settingOrderLinklist,
        settingNewsLinklist,
        activeOrderLinklist,
        activeNewsLinklist,
        activeMouseOver,
    } = useGlobalContext();
    return (
        <div className={activeMouseOver}>
            <div className="footerContainer flex">
                <div className="footerLink flex">
                    <div className="linkGroup">
                        <ul className="linkList">
                            <li className="linkItem white">加入會員</li>
                            <li className="linkItem white">訂閱最新訊息</li>
                            <li className="linkItem white">傳送意見回饋</li>
                        </ul>
                    </div>

                    <div className="linkGroup">
                        <ul className="linkList">
                            <li className="linkItem white">取得協助</li>
                            <li className="linkItem">訂單狀態</li>
                            <li className="linkItem">出貨與寄送</li>
                            <li className="linkItem">退貨</li>
                            <li className="linkItem">付款選項</li>
                            <li className="linkItem">聯絡我們</li>
                        </ul>
                    </div>

                    <div className="linkGroup">
                        <ul className="linkList">
                            <li className="linkItem white">關於NIKE</li>
                            <li className="linkItem">最新消息</li>
                            <li className="linkItem">職涯發展</li>
                            <li className="linkItem">投資者</li>
                            <li className="linkItem">環境永續者</li>
                        </ul>
                    </div>


                    <div className="linkGroup2">
                        <button className="linkBtn" onClick={settingOrderLinklist}>
                            <span>取得協助</span><li>{activeOrderLinklist ? <AiOutlineMinus className="icon" /> : <AiOutlinePlus className="icon" />}</li>
                        </button>
                        <ul className={activeOrderLinklist ? 'linkList' : 'linkList none'}>
                            <li className="linkItem">訂單狀態</li>
                            <li className="linkItem">出貨與寄送</li>
                            <li className="linkItem">退貨</li>
                            <li className="linkItem">付款選項</li>
                            <li className="linkItem">聯絡我們</li>
                        </ul>
                    </div>
                    <div className="linkGroup2">
                        <button className="linkBtn" onClick={settingNewsLinklist}>
                            <span>關於 NIKE</span><li>{activeNewsLinklist ? <AiOutlineMinus className="icon" /> : <AiOutlinePlus className="icon" />}</li>
                        </button>
                        <ul className={activeNewsLinklist ? 'linkList' : 'linkList none'}>
                            <li className="linkItem">最新消息</li>
                            <li className="linkItem">職涯發展</li>
                            <li className="linkItem">投資者</li>
                            <li className="linkItem">環境永續者</li>
                        </ul>
                    </div>
                </div>
                <div className="socialLink flex">
                    <ul className="socialList flex">
                        <li className="socialItem">
                            <AiOutlineTwitter className="icon" />
                        </li>
                        <li className="socialItem">
                            <FaFacebookF className="icon" />
                        </li>
                        <li className="socialItem">
                            <TfiYoutube className="icon" />
                        </li>
                        <li className="socialItem">
                            <ImInstagram className="icon" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="subFooter flex">
                <div className="copyRight flex">
                    <div className="location flex">
                        <div><HiOutlineLocationMarker className="icon" /></div>
                        <div>台灣</div>
                    </div>
                    <div className="grey">
                        <span> &copy; 2023/03 minwei</span>
                    </div>
                </div>
                <div className="illustrate flex">
                    <ul className="footerMenu flex">
                        <li className="footerItem">指南</li>
                        <li className="footerItem">銷售條款</li>
                        <li className="footerItem">使用條款</li>
                        <li className="footerItem">Nike條款</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer