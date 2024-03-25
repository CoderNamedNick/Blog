import {useEffect} from "react";
import { Link } from "react-router-dom";

const ALLWorkBlogs = ({blogs}) => {

  const workBlogs = blogs.filter(blog => blog.category === 'Work');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          {/* Map through the workBlogs array and render each blog */}
          {workBlogs.map((blog, index) => (
            <Link key={blog.id} to={`/${blog.category}/${blog.id}`}>
              <div className="Work-Grid-Items">
                <div>Topic: {blog.topic}</div>
                <div>Date: {blog.date}</div>
                <div>Thoughts: {blog.thoughts}</div>
              </div>
            </Link>
          ))}
          {/* If there are less than 6 coding blogs, render default templates */}
          {workBlogs.length < 6 && (
            Array.from({ length: 6 - workBlogs.length }).map((_, index) => (
              <div key={index + workBlogs.length} className="Work-Grid-Items">
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
        <h1 className="h-head">HomePage</h1>
      </Link>
      <br/>
      <br/>
    </div>
  )
}

export default ALLWorkBlogs
