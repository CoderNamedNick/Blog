import {useEffect} from "react";
import { Link } from "react-router-dom";

const ALLCodingBlogs = ({blogs}) => {
  
  const codingBlogs = blogs.filter(blog => blog.category === 'Coding');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return(
    <div className="All-coding-Main-div">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>ALL CODING BLOGS</h1>
      <p className="All-coding-p">
        A place where i can freely talk about the State of my coding adventures, pursuit of learning, 
        and Everything coding related.
      </p>
      <div className="Coding-Blogs-Grid-Container">
        {/* Map through the codingBlogs array and render each blog */}
        {codingBlogs.map((blog, index) => (
          <Link key={blog.id} to={`/${blog.category}/${blog.id}`}>
            <div className="Coding-Grid-Items">
              <div>Topic: {blog.topic}</div>
              <div>Date: {blog.date}</div>
              <div>Thoughts: {blog.thoughts}</div>
            </div>
          </Link>
        ))}
        {/* If there are less than 6 coding blogs, render default templates */}
        {codingBlogs.length < 6 && (
          Array.from({ length: 6 - codingBlogs.length }).map((_, index) => (
            <div key={index + codingBlogs.length} className="Coding-Grid-Items">
              <div>Topic: NOT AVAILABLE</div>
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
        <h1>HomePage</h1>
      </Link>
      <br/>
      <br/>
    </div>
  )
}

export default ALLCodingBlogs
