import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  // State variable creation
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" src={assets.menu_icon} alt="" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is React...</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="bottom recent-entry">
        <div className="bottom-item">
          <img src={assets.question_icon} alt="" />
          <p>Help</p>
        </div>
      </div>

      <div className="bottom recent-entry">
        <div className="bottom-item">
          <img src={assets.history_icon} alt="" />
          <p>Activity</p>
        </div>
      </div>

      <div className="bottom recent-entry">
        <div className="bottom-item">
          <img src={assets.setting_icon} alt="" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
