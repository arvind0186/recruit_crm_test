"use client"

import iconone from "../assets/sidebar-one-icon.png";
import icontwo from "../assets/sidebar-two-icon.png";
import iconthree from "../assets/sidebar-three-icon.png";
import iconfour from "../assets/sidebar-four-icon.png";
import iconfive from "../assets/sidebar-five-icon.png";
import iconsix from "../assets/sidebar-six-icon.png";
import iconseven from "../assets/sidebar-seven-icon.png";
import iconeight from "../assets/sidebar-eight-icon.png";
import iconnine from "../assets/sidebar-nine-icon.png";
import iconten from "../assets/sidebar-ten-icon.png";
import iconeleven from "../assets/sidebar-eleven-icon.png";
import icontwelve from "../assets/sidebar-twelve-icon.png";

export default function Sidebar() {
  const sidebarIcons = [
    {
      icon: (
        <div className="usericon"><img src={icontwo} alt="icon" /></div>
      )
    },
    {
      icon: (
        <div><img src={iconthree} alt="icon" /></div>
      )
    },
    {
      icon: (
        <div><img src={iconfour} alt="icon" /></div>
      )
    },
    {
      icon: (
        <div><img src={iconfive} alt="icon" /></div>
      )
    },
    {
      icon: (
        <div><img src={iconsix} alt="icon" /></div>
      )
    },
    {
      icon: (
        <div><img src={iconseven} alt="icon" /></div>
      )
    },
    {
      icon: (
       <div> <img src={iconeight} alt="icon" /></div>
      )
    },
    {
      icon: (
      <div> <img src={iconnine} alt="icon" /></div>
      )
    },
    {
      icon: (
        <div><img src={iconten} alt="icon" /></div>
      )
    },
    {
      icon: (
        <div><img src={iconeleven} alt="icon" /></div>
      )
    },
    {
      icon: (
        <div><img src={icontwelve} alt="icon" /></div>
      )
    },
  ]

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-dots">
          <img src={iconone} alt="icon" />
        </div>
      </div>

      <div className="sidebar-nav">
        {sidebarIcons.map((item, index) => (
          <div key={index} className="sidebar-icon group">
            {item.icon}
            <div className="sidebar-tooltip group-hover:opacity-100">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
