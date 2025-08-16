"use client";

import "../styles/header.css";
import searchicon from "../assets/search.png";
import logo from "../assets/logo.png";
import gift from "../assets/gift.png";
import message from "../assets/message.png";
import bell from "../assets/bell.png";
import plus from "../assets/plus.png";
import avatar from "../assets/Avatar.png";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="flex items-center space-x-4">
          <div className="search-container">
            <img src={searchicon} alt="icon" className="search-icon" />
            <input
              type="text"
              placeholder="Search Pipedrive"
              className="search-input"
            />
          </div>
        </div>

        <div className="header-brand-logo">
          <img src={logo} alt="icon" />
        </div>

        <div className="header-actions">
          <button className="header-btn circle">
            <img src={plus} alt="icon" className="top-icon" />
          </button>
          <div className="circle"><img src={gift} alt="icon" className="gift-icon" /></div>
          <div className="circle"><img src={message} alt="icon" className="msg-icon" /></div>
          <div className="circle"><img src={bell} alt="icon" className="bell-icon" /></div>
          
          <div className="header-profile">
            
            <img src={avatar} alt="icon" className="top-icon" />
            <div className="header-profile-info">
              <div className="header-profile-name">Phyllis Yang</div>
              <div className="header-profile-company">Silicon Links Inc</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
