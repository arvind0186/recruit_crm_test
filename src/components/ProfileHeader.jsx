"use client";

import { useState, useEffect } from "react";
import facebook from "../assets/fb-icon.png"; 
import twitter from "../assets/twitter-icon.png"; 
import connect from "../assets/connect-icon.png"; 
import edit from "../assets/edit-icon.png"; 
import share from "../assets/share-icon.png"; 
import star from "../assets/star-icon.png";
import "../styles/profileHeader.css";

export default function ProfileHeader({ profileData, setProfileData, isEditing, setIsEditing }) {
  const [formData, setFormData] = useState(profileData);

  useEffect(() => {
    setFormData(profileData);
  }, [profileData]);

  const handleChange = (index, field, value) => {
    const newData = [...formData];
    newData[index][field] = value;
    setFormData(newData);
  };

  const handleSave = () => {
    setProfileData(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profileData);
    setIsEditing(false);
  };

  return (
    <div className="profile-header">
      <div className="profile-header-main">
        <div className="profile-info">
          <div className="profile-avatar">
            <span className="profile-avatar-text">WS</span>
          </div>
          <div>
            <div className="profile-name-section">
              <h1 className="profile-name">William Sample</h1>
              <div className="social-icons">
                <ul>
                  <li><img src={facebook} alt="icon" className="icon" /></li>
                  <li><img src={twitter} alt="icon" className="icon" /></li>
                  <li><img src={facebook} alt="icon" className="icon" /></li>
                  <li><img src={twitter} alt="icon" className="icon" /></li>
                  <li><img src={connect} alt="icon" className="icon" /></li>
                </ul>
              </div>
            </div>
            <div className="profile-section-design">
              <p className="profile-title">Senior Product Manager</p>
              <p className="profile-location">United States</p>
              <p className="profile-name">Dallas</p>
            </div>
          </div>
        </div>

        <div className="profile-actions">
          <button className="profile-btn profile-btn-contact"> Contact Linked </button> 
          <button className="profile-action-btn"><img src={star} alt="icon" className="icon" /></button> 
          <button className="profile-action-btn"><img src={share} alt="icon" className="icon" /></button>
          <button className="profile-action-btn" onClick={() => setIsEditing(!isEditing)}>
            <img src={edit} alt="Edit" className="icon" />
          </button>
        </div>
      </div>

      {isEditing && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="profile-edit-form"
        >
          {formData.map((item, index) => (
            <div key={index} className="profile-edit-row">
              <label className="profile-detail-label">{item.label}</label>
              <input
                type="text"
                className="input-profile-detail-value"
                value={item.value}
                onChange={(e) => handleChange(index, "value", e.target.value)}
              />
              <label className="profile-detail-label">{item.label2}</label>
              <input
                type="text"
                className="input-profile-detail-value"
                value={item.value2}
                onChange={(e) => handleChange(index, "value2", e.target.value)}
              />
            </div>
          ))}

          <div className="profile-edit-actions">
            <button type="submit" className="savebtn">Save</button>
            <button type="button" className="cancelbtn" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
}
