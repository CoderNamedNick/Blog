import React from "react";
import { Link } from "react-router-dom";

const ALLRandomBlogs = ({blogs}) => {

  const randomBlogs = blogs.filter(blog => blog.category === 'Personal');

  return(
    <div className="All-Random-Main-div">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>All Random BLOGS</h1>
      <h2>
        A bunch of random blogs about various topics mainly about my intrest my include: Videogames, Movies, Cats,
        Events, and other things.
      </h2>
      <div className="Random-Blogs-Grid-Container">
        {randomBlogs.map((blog, index) => (
          <Link key={blog.id} to={`/${blog.category}/${blog.id}`}>
            <div className="Random-Grid-Items">
              <div>Topic: {blog.topic}</div>
              <div>Date: {blog.date}</div>
              <div>Thoughts: {blog.thoughts}</div>
            </div>
          </Link>
        ))}
        {/* If there are less than 6 coding blogs, render default templates */}
        {randomBlogs.length < 6 && (
          Array.from({ length: 6 - randomBlogs.length }).map((_, index) => (
            <div key={index + randomBlogs.length} className="Random-Grid-Items">
              <div>Topic: NOT AVAILABLE</div>
              <div>Date: NOT AVAILABLE</div>
              <div>Thoughts: NOT AVAILABLE</div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ALLRandomBlogs
