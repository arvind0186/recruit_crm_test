"use client"

import "../styles/jobs.css"
import user from "../assets/user-icon.png";
import timer from "../assets/timer-icon.png";

export default function JobAssignments() {
  const jobs = [
    {
      id: 1,
      title: "Senior Product Manager",
      company: "Recruit CRM",
      assignee: "William Sample",
      date: "Jul 10, 2023",
    },
    {
      id: 2,
      title: "Senior Product Manager",
      company: "Recruit CRM",
      assignee: "William Sample",
      date: "Jul 10, 2023",
    },
    {
      id: 3,
      title: "Senior Product Manager",
      company: "Recruit CRM",
      assignee: "William Sample",
      date: "Jul 10, 2023",
    },
  ]

  return (
    <div>
      <div className="jobs-header">
        <h3 className="jobs-title">Assigned Job to William Sample</h3>
        <div className="jobs-actions">
          <button className="jobs-btn-primary">Assign To Job</button>
          <button className="jobs-btn-secondary">View All Assigned Jobs</button>
        </div>
      </div>

      <div className="jobs-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-card-content">
              <div className="job-info">
                <div className="job-avatar">
                  <span className="job-avatar-text">M</span>
                </div>
                <div>
                  <h4 className="job-title">{job.title}</h4>
                  <p className="job-company">{job.company}</p>
                </div>
              </div>
              <div className="job-meta">
                <div className="job-details">
                  <div className="job-detail-row">
                    <img src={user} alt="icon" className="job-detail-icon" />
                    <span>{job.assignee}</span>
                  </div>
                  <div className="job-detail-row">
                    <img src={timer} alt="icon" className="job-detail-icon" />
                    <span>{job.date}</span>
                  </div>
                </div>
                <span className="job-badge">Assigned</span>
                <button className="job-view-btn">View Files</button>
                <label className="toggle-switch">
                  <input type="checkbox" className="toggle-input" defaultChecked />
                  <div className="toggle-slider"></div>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
