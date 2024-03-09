import React from "react";

const Welcome = () => {
  return(
    <div>
      <div className="Header-welcome-div">
        <h1>Nick.Blog</h1>
        <div className="list-div">
          <ul className="welcome-list">
            <li>Recent Blogs</li>
            <li>Code Related</li>
            <li>Family/Friends</li>
            <li>Work</li>
            <li>Other Topics</li>
          </ul>
        </div>
        <h3>Support Nick.Blog</h3>
      </div>
      <div className="intro-div">
        <h1>Who Am I</h1>
      </div>
    </div>
  )
}

export default Welcome