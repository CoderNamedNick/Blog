import {useEffect} from "react";
import { Link } from "react-router-dom";

const ALLPersonalBlogs = ({blogs}) => {

  const personalBlogs = blogs.filter(blog => blog.category === 'Personal');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <div className="All-Personal-Main-div">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>All Personal BLOGS</h1>
      <h2>
        A place where i can talk about the good and the not so good of my Personal life.
      </h2>
      <div className="Family-Blogs-Grid-Container">
        {personalBlogs.map((blog, index) => (
          <Link key={blog.id} to={`/${blog.category}/${blog.id}`}>
            <div className="Family-Grid-Items">
              <div>Topic: {blog.topic}</div>
              <div>Date: {blog.date}</div>
              <div>Thoughts: {blog.thoughts}</div>
            </div>
          </Link>
        ))}
        {/* If there are less than 6 coding blogs, render default templates */}
        {personalBlogs.length < 6 && (
          Array.from({ length: 6 - personalBlogs.length }).map((_, index) => (
            <div key={index + personalBlogs.length} className="Family-Grid-Items">
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

export default ALLPersonalBlogs
