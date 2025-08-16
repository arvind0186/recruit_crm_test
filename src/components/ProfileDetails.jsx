"use client";

import "../styles/profile.css";
import message from "../assets/message-icon.png";
import call from "../assets/call-icon.png";
import user from "../assets/user-icon.png";

export default function ProfileDetails({ profileData }) {
  const contactInfo = [
    { icon: <img src={message} alt="icon" className="icon" />, text: "williamsample@gmail.com", isLink: true },
    { icon: <img src={call} alt="icon" className="icon" />, text: "+91 9021232326", isLink: true },
    { icon: <img src={user} alt="icon" className="icon" />, text: "Phyllis Yang" },
    { icon: <img src={call} alt="icon" className="icon" />, text: "Jul 14, 2023, 4:04 pm" },
  ];

  return (
    <>
      <div className="contact-info">
        <div className="one">
          {contactInfo.slice(0, 2).map((contact, index) => (
            <div key={index} className="contact-item">
              <div className="contact-icon">{contact.icon}</div>
              <span className={contact.isLink ? "contact-link" : ""}>{contact.text}</span>
            </div>
          ))}
        </div>
        <div className="second">
          {contactInfo.slice(-2).map((contact, index) => (
            <div key={index} className="contact-item">
              <div className="contact-icon">{contact.icon}</div>
              <span className={contact.isLink ? "contact-link" : ""}>{contact.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="profile-details">
        {profileData.map((row, index) => (
          <div key={index} className="profile-details-row">
            <div className="profile-detail-item">
              <div className="profile-detail-label">{row.label}</div>
              <div className="profile-detail-value">{row.value}</div>
            </div>
            <div className="profile-detail-item">
              <div className="profile-detail-label">{row.label2}</div>
              <div className="profile-detail-value">{row.value2}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
