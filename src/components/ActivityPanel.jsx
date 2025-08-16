"use client"

import "../styles/activity.css"
import NotesList from "./NotesList"
import foldericon from "../assets/folder-icon.png";
import mobileicon from "../assets/mobile-icon.png";
import tickicon from "../assets/tick-icon.png";
import calendaricon from "../assets/calender-icon.png";

export default function ActivityPanel({ activeActivityTab, setActiveActivityTab }) {
  const activityTabs = [
    { id: "all", label: "All" },
    { id: "notes", label: "Notes & Calls" },
    { id: "tasks", label: "Tasks" },
    { id: "meeting", label: "Meeting" },
    { id: "files", label: "Files" },
  ]

  return (
    <div className="activity-panel">
      <div className="activity-container">
        <div className="activity-profile">
          <div className="activity-actions">
            <img src={foldericon} alt="icon" />
          </div>
          <div className="activity-actions">
            <img src={mobileicon} alt="icon" />
          </div>
          <div className="activity-actions">
            <img src={tickicon} alt="icon" />
          </div>
          <div className="activity-actions">
            <img src={calendaricon} alt="icon" />
          </div>
          
        </div>


        <div className="activity-tabs-nav">
          <nav className="activity-tabs-list">
            {activityTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveActivityTab(tab.id)}
                className={`activity-tab-button ${activeActivityTab === tab.id ? "active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="tab-content">
          {activeActivityTab === "all" && <NotesList />}
          {activeActivityTab !== "all" && (
            <div className="empty-state-small">
              <div className="empty-state-small-icon">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {activityTabs.find((t) => t.id === activeActivityTab)?.label} content
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
