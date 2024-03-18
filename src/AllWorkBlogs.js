import React from "react";
import { Link } from "react-router-dom";

const ALLWorkBlogs = () => {
  return(
    <div className="All-Work-Main-div">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>All Work BLOGS</h1>
      <h2>
        A place where you get to peak in what i do in work, studying, or practice.
      </h2>
      <div className="Work-Blogs-Grid-Container">
      <Link to='/AllWork/WB1'>
          <div className="Work-Grid-Items">
            Topic: API's And Promises
            <br></br>
            Date: 3/18/24
            <br></br>
            Thoughts: Hard, Workload, Trying
          </div>
        </Link>
        <div className="Work-Grid-Items">
          Topic: NOT AVAILABLE
          <br></br>
          Date: NOT AVAILABLE
          <br></br>
          Thoughts: NOT AVAILABLE
        </div>
        <div className="Work-Grid-Items">
          Topic: NOT AVAILABLE
          <br></br>
          Date: NOT AVAILABLE
          <br></br>
          Thoughts: NOT AVAILABLE
        </div>
        <div className="Work-Grid-Items">
          Topic: NOT AVAILABLE
          <br></br>
          Date: NOT AVAILABLE
          <br></br>
          Thoughts: NOT AVAILABLE
        </div>
        <div className="Work-Grid-Items">
          Topic: NOT AVAILABLE
          <br></br>
          Date: NOT AVAILABLE
          <br></br>
          Thoughts: NOT AVAILABLE
        </div>
        <div className="Work-Grid-Items">
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

export default ALLWorkBlogs
