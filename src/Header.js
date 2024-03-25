import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <div>
      <div className="Header-welcome-div">
        {/* Use Link component with 'to' prop pointing to the homepage */}
        <Link to="/">
          <h1 className="h-head">Nick.Blog</h1>
        </Link>
        <div className="list-div">
          <ul className="welcome-list">
            <Link to="/RecentBlogs"><li>Most Recent Blog</li></Link>
            <Link to="/AllCoding"><li>Code Related</li></Link>
            <Link to="/PersonalBlogs"><li>Personal</li></Link>
            <Link to="/WorkBlogs"><li>Work</li></Link>
            <Link to='/RandomBlogs'><li>Random Topics</li></Link>
          </ul>
        </div>
        <Link to="/SupportPage"><h3 className="h-head">Help Nick.Blog</h3></Link>
      </div>
    </div>
  );
};

export default Header;