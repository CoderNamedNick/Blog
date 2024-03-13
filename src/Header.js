import React from "react";

const Header = () => {
  return (
    <div>
      <div className="Header-welcome-div">
        <h1>Nick.Blog</h1>
        <div className="list-div">
          <ul className="welcome-list">
            <li>Most Recent Blog</li>
            <li>Code Related</li>
            <li>Family/Friends</li>
            <li>Work</li>
            <li>Other Topics</li>
          </ul>
        </div>
        <h2>Support Nick.Blog</h2>
      </div>
    </div>
  );
};

export default Header;