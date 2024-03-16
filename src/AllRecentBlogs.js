import React from "react";
import { Link } from "react-router-dom";

const ALLRecentBlogs = () => {
  return(
    <div className="All-coding-Main-div">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>ALL CODING BLOGS</h1>
      <h2>
        Most Recent Blogs
      </h2>
      <div className="Coding-Blogs-Grid-Container">
        <Link to="/AllCoding/CB1">
        <div className="Coding-Grid-Items">
          Topic: Making The Blog
          <br></br>
          Date:  3/15/24
          <br></br>
          Thoughts: Relaxing, Easy, New
        </div>
        </Link>
        <div className="Coding-Grid-Items">
          Topic: NOT AVAILABLE
          <br></br>
          Date: NOT AVAILABLE
          <br></br>
          Thoughts: NOT AVAILABLE
        </div>
        <div className="Coding-Grid-Items">
          Topic: NOT AVAILABLE
          <br></br>
          Date: NOT AVAILABLE
          <br></br>
          Thoughts: NOT AVAILABLE
        </div>
        <div className="Coding-Grid-Items">
          Topic: NOT AVAILABLE
          <br></br>
          Date: NOT AVAILABLE
          <br></br>
          Thoughts: NOT AVAILABLE
        </div>

      </div>
    </div>
  )
}

export default ALLRecentBlogs
