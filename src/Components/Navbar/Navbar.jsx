import React, { useState } from "react"
import './Navbar.css'
import { SiNike, SiJordan } from 'react-icons/si';
import { BsBag } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai';
import { useGlobalContext } from '../../context';
const Navbar = () => {
    const { showSidebar } = useGlobalContext();
    return (
        <div className="navbar flex">
            <div className="navbarOne flex">
                <div className="logo">
                    <SiJordan className="icon" />
                </div>

                <div className="login flex">
                    <span className="text">說明</span>
                    <span className="text">|</span>
                    <span className="text">加入</span>
                    <span className="text">|</span>
                    <span className="text">登入</span>
                </div>
            </div>

            <div className="navbarTwo flex">
                <div className="logoDiv">
                    <SiNike className="icon" />
                </div>

                <div className="navBarMenu">
                    <ul className="menu flex">
                        <li className="menuItem"><a href="#">新品和精選</a></li>
                        <li className="menuItem"><a href="#">男款</a></li>
                        <li className="menuItem"><a href="#">女款</a></li>
                        <li className="menuItem"><a href="#">兒童款</a></li>
                        <li className="menuItem"><a href="#">特惠商品</a></li>
                        <li className="menuItem"><a href="#">SNKRS</a></li>
                    </ul>
                </div>

                <div className="itemIcon flex">
                    <div className="search flex">
                        <button className="search-icon">
                            <AiOutlineSearch className="icon" />
                        </button>
                        <input type="text" placeholder="搜尋"/>
                    </div>
                    <button className="nav-icon">
                        <BsBag className="icon" />
                    </button>
                    <button className="nav-icon">
                        <MdFavoriteBorder className="icon " />
                    </button>
                    <button onClick={showSidebar} className="nav-icon">
                        <RxHamburgerMenu className="icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;