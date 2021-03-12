import React from "react";
import './Header.css';
import sslogo from "./sslogo.svg";
import SearchIcon from '@material-ui/icons/Search';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import WeekendOutlinedIcon from '@material-ui/icons/WeekendOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="homeHeader_left">
                <Link to="/">
                <img src={sslogo} alt="sobersocial" className="homeHeader_logo" />
                </Link>
                <div className="homeHeader_inputSearch">
                    <input type="text" placeholder="Search" />
                    <SearchIcon className="homeHeader_searchIcon" />
                </div>
            </div>
            <div className="homeHeader_right">
                <div className="homeHeader_option">
                    <HomeOutlinedIcon font="large" />
                </div>
                <div className="homeHeader_option">
                    <WeekendOutlinedIcon font="large" />
                </div>
                <div className="homeHeader_option">
                    <ChatBubbleOutlineOutlinedIcon font="large" />
                </div>
                <div className="homeHeader_option">
                    <EventOutlinedIcon font="large" />
                </div>
                <div className="homeHeader_option">
                    <NotificationsNoneOutlinedIcon font="large" />
                </div>
                <div className="homeHeader_option">
                    <MenuOutlinedIcon font="large" />
                </div>
            </div>
        </div>
    )
}

export default Header
