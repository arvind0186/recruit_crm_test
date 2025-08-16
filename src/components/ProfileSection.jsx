"use client";

import { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileDetails from "./ProfileDetails";
import ProfileTabs from "./ProfileTabs";
import Breadcrumb from "./Breadcrumb";
import CalltoAction from "./CalltoAction";

export default function ProfileSection({ activeTab, setActiveTab }) {
  const [profileData, setProfileData] = useState([
    {
      label: "Current Organization",
      value: "World Bank Group",
      label2: "Summary",
      value2: "Current Organization",
    },
    {
      label: "Skills",
      value: "HTML, CSS, Javascript",
      label2: "Current Employment Status",
      value2: "Employed",
    },
    {
      label: "Available From",
      value: "Jul, 14, 2023",
      label2: "Date of Birth",
      value2: "15 June 1993",
    },
    {
      label: "Current Salary",
      value: "$6000",
      label2: "Relevant Experience",
      value2: "7 Years",
    },
    {
      label: "Notice Period",
      value: "90 Days",
      label2: "Salary Expectation",
      value2: "$9000",
    },
    {
      label: "Full Address",
      value: "9400 Ashton Rd, Philadelphia...",
      label2: "Status",
      value2: "Submitted to Client",
    },
    {
      label: "Resume",
      value: "Resume",
      label2: "Salary Type",
      value2: "Annual",
      isLink: true,
    },
    {
      label: "Total Experience",
      value: "5 Years",
      label2: "Language Skills",
      value2: "English(Elementary proficiency)",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="profile-section">
      <div>
        <div className="breadcrumb-section">
          <Breadcrumb />
          <CalltoAction />
        </div>
        <div className="profile-container">
          <ProfileHeader
            profileData={profileData}
            setProfileData={setProfileData}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />

          {!isEditing && <ProfileDetails profileData={profileData} />}

          <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </div>
  );
}
