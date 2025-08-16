"use client"

import "../styles/tabs.css"

import JobAssignments from "./JobAssignments"

export default function ProfileTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "all", label: "All Details" },
    { id: "assigned", label: "Assigned Jobs" },
    { id: "related", label: "Related Emails" },
    { id: "questions", label: "Candidate Questions" },
    { id: "hotlists", label: "Hotlists" },
    { id: "deals", label: "Related Deals" },
    { id: "contacts", label: "Contact(s) Pitched" },
  ]

  return (
    <div className="tabs-container">
      <div className="tabs-nav">
        <nav className="tabs-list">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="tab-content">
        {activeTab === "assigned" && <JobAssignments />}
        {activeTab === "all" && (
          <div className="empty-state">
            <p>All candidate details would be displayed here</p>
          </div>
        )}
        {activeTab !== "assigned" && activeTab !== "all" && (
          <div className="empty-state">
            <p>{tabs.find((t) => t.id === activeTab)?.label} content would go here</p>
          </div>
        )}
      </div>
    </div>
  )
}
