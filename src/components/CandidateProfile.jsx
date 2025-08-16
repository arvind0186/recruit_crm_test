import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ProfileSection from './ProfileSection';
import ActivityPanel from './ActivityPanel';

export default function CandidateProfile() {
  const [activeTab, setActiveTab] = useState('assigned');

  return (
    <div className="d-flex vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <Sidebar />
      <div className="flex-fill d-flex flex-column">
        <Header />
        <div className="flex-fill d-flex">
          <ProfileSection activeTab={activeTab} setActiveTab={setActiveTab} />
          <ActivityPanel />
        </div>
      </div>
    </div>
  );
}
