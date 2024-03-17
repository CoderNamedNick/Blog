import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <div>
      <div className="Header-welcome-div">
        {/* Use Link component with 'to' prop pointing to the homepage */}
        <Link to="/">
          <h1>Nick.Blog</h1>
        </Link>
        <div className="list-div">
          <ul className="welcome-list">
            <Link to="/RecentBlogs"><li>Most Recent Blog</li></Link>
            <Link to="/AllCoding"><li>Code Related</li></Link>
            <Link to="/PersonalBlogs"><li>Personal</li></Link>
            <Link to="/WorkBlogs"><li>Work</li></Link>
            <li>Other Topics</li>
          </ul>
        </div>
        <h2>Support Nick.Blog</h2>
      </div>
    </div>
  );
};

export default Header;