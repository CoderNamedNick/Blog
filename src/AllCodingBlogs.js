import React from "react";
import { Link } from "react-router-dom";

const ALLCodingBlogs = () => {
  return(
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>ALL CODING BLOGS</h1>
      <p>
        A place where i can freely talk about the State of my coding adventures, pursuit of learning, 
        and Everything coding related.
      </p>
      <div className="Coding-Blogs-Grid-Container">
        <Link to="/AllCoding/CB1">
        <div className="Coding-Grid-Items">
          Topic: NOT AVAILABLE
          <br></br>
          Date: NOT AVAILABLE
          <br></br>
          Thoughts: NOT AVAILABLE
        </div>
        </Link>

      </div>
    </div>
  )
}

export default ALLCodingBlogs
