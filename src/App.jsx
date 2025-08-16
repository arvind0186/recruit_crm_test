"use client"

import { useState } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"
import "./styles/globals.css"
import "./styles/layout.css"


export default function RecruitmentCRM() {
  const [activeTab, setActiveTab] = useState("assigned")
  const [activeActivityTab, setActiveActivityTab] = useState("all")

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <MainContent
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeActivityTab={activeActivityTab}
          setActiveActivityTab={setActiveActivityTab}
        />
      </div>
    </div>
  )
}
