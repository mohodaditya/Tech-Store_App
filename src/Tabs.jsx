import React, { useState } from "react";
import Cards from "./Cards";
import "./Tabs.css"; // Include this for styling

const Tabs = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="tabs-container">
      <div className="tab-buttons">
        <button
          className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={`tab-btn ${activeTab === "laptops" ? "active" : ""}`}
          onClick={() => setActiveTab("laptops")}
        >
          <i className="fa-solid fa-laptop tab-icon"></i>
          Laptops
        </button>
        <button
          className={`tab-btn ${activeTab === "phones" ? "active" : ""}`}
          onClick={() => setActiveTab("phones")}
        >
          <i className="fa-solid fa-mobile-screen-button tab-icon"></i>
          Phones
        </button>
        <button
          className={`tab-btn ${activeTab === "accessories" ? "active" : ""}`}
          onClick={() => setActiveTab("accessories")}
        >
          <i className="fa-regular fa-box-open tab-icon"></i>
          Accessories
        </button>
      </div>

      <Cards activeTab={activeTab} />
    </div>
  );
};

export default Tabs;
