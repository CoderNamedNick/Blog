import {useEffect} from "react";
import { Link } from "react-router-dom";

const ALLRecentBlogs = ({blogs}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        {/* Map through the codingBlogs array and render each blog */}
        {blogs.map((blog, index) => (
          <Link key={blog.id} to={`/${blog.category}/${blog.id}`}>
            <div className="Recent-Grid-Items">
              <div>Topic: {blog.topic}</div>
              <div>Category: {blog.category}</div>  
              <div>Date: {blog.date}</div>
              <div>Thoughts: {blog.thoughts}</div>
            </div>
          </Link>
        ))}
        {/* If there are less than 6 blogs, render default templates */}
        {blogs.length < 6 && (
          Array.from({ length: 6 - blogs.length }).map((_, index) => (
            <div key={index + blogs.length} className="Recent-Grid-Items">
              <div>Topic: NOT AVAILABLE</div>
              <div>Category: NOT AVAILABLE</div> 
              <div>Date: NOT AVAILABLE</div>
              <div>Thoughts: NOT AVAILABLE</div>
            </div>
          ))
        )}
      </div>
      <br/>
      <br/>
      <br/>
      <Link to="/">
        <h1 className="h-head">HomePage</h1>
      </Link>
      <br/>
      <br/>
    </div>
  )
}

export default ALLRecentBlogs
