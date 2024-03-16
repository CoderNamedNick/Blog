import React from "react";
import { Link } from "react-router-dom";

const ALLRecentBlogs = () => {
  return(
    <div className="All-Recent-Main-div">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>MOST RECENT BLOGS</h1>
      <h2>
        Recent Blogs about any topics
      </h2>
      <div className="Recent-blogs-Grid-Container">
        <Link to="/AllCoding/CB1">
        <div className="Recent-Grid-Items">
          Topic: Making The Blog
          <br></br>
          Date:  3/15/24
          <br></br>
          Thoughts: Relaxing, Easy, New
        </div>
        </Link>
        <div className="Recent-Grid-Items">
          Topic: NOT AVAILABLE
          <br></br>
          Date: NOT AVAILABLE
          <br></br>
          Thoughts: NOT AVAILABLE
        </div>
        <div className="Recent-Grid-Items">
          Topic: NOT AVAILABLE
          <br></br>
          Date: NOT AVAILABLE
          <br></br>
          Thoughts: NOT AVAILABLE
        </div>
        <div className="Recent-Grid-Items">
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
