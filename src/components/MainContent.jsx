"use client"

import ProfileSection from "./ProfileSection"
import ActivityPanel from "./ActivityPanel"

export default function MainContent({ activeTab, setActiveTab, activeActivityTab, setActiveActivityTab }) {
  return (
    <div className="flex flex-1">
      <ProfileSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <ActivityPanel activeActivityTab={activeActivityTab} setActiveActivityTab={setActiveActivityTab} />
    </div>
  )
}
