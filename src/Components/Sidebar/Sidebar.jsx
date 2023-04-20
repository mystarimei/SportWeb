import React from 'react';
import './Sidebar.css';
import { RxCross2 } from 'react-icons/rx';
import { SiJordan } from 'react-icons/si';
import { BsBag, BsBox2 } from 'react-icons/bs';
import { AiOutlineQuestionCircle, AiOutlineRight } from 'react-icons/ai';
import { useGlobalContext } from '../../context';


const Sidebar = () => {
    const { activeSidebar, closeSidebar } = useGlobalContext();
    return (
        <div className={`${activeSidebar} grid `} >
            <div>
                <button onClick={closeSidebar} className="close-btn">
                    <RxCross2 className='icon' />
                </button>
            </div>

            <div className="sideBarMenuOne flex">
                <button className="menuItem">
                    <p>新品和精選</p>
                    <span><AiOutlineRight className='icon' /></span>
                </button>
                <button className="menuItem">
                    <p>男款</p>
                    <span><AiOutlineRight className='icon' /></span>
                </button>
                <button className="menuItem">
                    <p>女款</p>
                    <span><AiOutlineRight className='icon' /></span>
                </button>
                <button className="menuItem">
                    <p>兒童款</p>
                    <span><AiOutlineRight className='icon' /></span>
                </button>
                <button className="menuItem">
                    <p>特惠商品</p>
                    <span><AiOutlineRight className='icon' /></span>
                </button>
                <a className="menuItem" href="#">
                    SKNRS
                </a>
            </div>

            <div className="sideBarMenuTwo">
                <ul className='Jordan flex'>
                    <li>
                        <a href="">
                            <span><SiJordan className='icon' /></span>
                            <p> Jordan</p>
                        </a>
                    </li>
                </ul>

                <div className="member">
                    <p>成為 Nike 會員，體驗優質產品、獲得啟發並掌握運動界相關動態。</p>
                    <button className='signIn'>加入</button>
                    <button className='login'>登入</button>
                </div>

                <div className="shoppingCart">
                    <ul className='menuList'>
                        <li className='menuItem'>
                            <span><BsBag className='icon' /></span>
                            <p>購物車</p>
                        </li>
                        <li className='menuItem'
                        ><span><BsBox2 className='icon' /></span>
                            <p>訂單</p>
                        </li>
                        <li className='menuItem'>
                            <span><AiOutlineQuestionCircle className='icon' /></span>
                            <p>說明</p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar;