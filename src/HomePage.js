import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({blogs}) => {

  const codingBlogs = blogs.filter(blog => blog.category === 'Coding');

  console.log(codingBlogs)


  return(
    <div className="Homepage-main-div">
      <div className="intro-div">
        <h1>Who Am I</h1>
        <p className="intro-p">
          Hello my name is Nick or CoderNamedNick on Github. I started Coding
          as of Oct. 2023. and specialize in Front Side Web Dev. My birthday
          is April 2003 so when ur reading this you can figure my age
          "currently about to be 21". I Started this blog to not only use for
          a portfolio project, but for a place to put my ideas. I mostly
          will be talking about my coding journey and my other intrest like
          Sports, Family, Weight Training, and my 2 cats. To support me "Hire
          me" or maybe just send me an Email it would mean alot.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>
          <a href="https://codernamednick.github.io/react-portfolio/">
            Portfolio
          </a>
        </h1>
        <br></br>
        <br></br>
        <h2>
          See my Projects at{" "}
          <a href="https://github.com/CoderNamedNick">Github</a>
        </h2>
        <br></br>
      </div>
      <div>
        <h1>Code Related</h1>
        <Link to="/AllCoding"><h3>See All Coding Blogs</h3></Link>
      </div>
      <h3>Most Recent</h3>
      <div className="Coding-Blogs-Grid-Container">
        {/* Map through the codingBlogs array and render each blog */}
        {codingBlogs.map((blog, index) => (
          <Link key={blog.id} to={`/AllCoding/${blog.id}`}>
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
              <br />
              <div>Date: NOT AVAILABLE</div>
              <br />
              <div>Thoughts: NOT AVAILABLE</div>
            </div>
          ))
        )}
      </div>
      <div className="Personal-homepage-div">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <h1>Personal Related</h1>
          <Link to="/PersonalBlogs"><h3>See All Personal Blogs</h3></Link>
        </div>
        <h3>Most Recent</h3>
        <div className="Family-Blogs-Grid-Container">
          <div className="Family-Grid-Items">
            Topic: NOT AVAILABLE
            <br></br>
            Date: NOT AVAILABLE
            <br></br>
            Thoughts: NOT AVAILABLE
          </div>
          <div className="Family-Grid-Items">
            Topic: NOT AVAILABLE
            <br></br>
            Date: NOT AVAILABLE
            <br></br>
            Thoughts: NOT AVAILABLE
          </div>
          <div className="Family-Grid-Items">
            Topic: NOT AVAILABLE
            <br></br>
            Date: NOT AVAILABLE
            <br></br>
            Thoughts: NOT AVAILABLE
          </div>
          <div className="Family-Grid-Items">
            Topic: NOT AVAILABLE
            <br></br>
            Date: NOT AVAILABLE
            <br></br>
            Thoughts: NOT AVAILABLE
          </div>
          <div className="Family-Grid-Items">
            Topic: NOT AVAILABLE
            <br></br>
            Date: NOT AVAILABLE
            <br></br>
            Thoughts: NOT AVAILABLE
          </div>
          <div className="Family-Grid-Items">
            Topic: NOT AVAILABLE
            <br></br>
            Date: NOT AVAILABLE
            <br></br>
            Thoughts: NOT AVAILABLE
          </div>
        </div>
      </div>
      <div className="Work-homepage-div">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <h1>Work Related</h1>
          <Link to="/WorkBlogs"><h3>See All Work Blogs</h3></Link>
        </div>
        <h3>Most Recent</h3>
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
      <div className="Random-homepage-div">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <h1>Random Topics</h1>
          <Link to="/RandomBlogs"><h3>See All Random Blogs</h3></Link>
        </div>
        <h3>Most Recent</h3>
        <div className="Random-Blogs-Grid-Container">
          <div className="Random-Grid-Items">
            Topic: NOT AVAILABLE
            <br></br>
            Date: NOT AVAILABLE
            <br></br>
            Thoughts: NOT AVAILABLE
          </div>
          <div className="Random-Grid-Items">
            Topic: NOT AVAILABLE
            <br></br>
            Date: NOT AVAILABLE
            <br></br>
            Thoughts: NOT AVAILABLE
          </div>
          <div className="Random-Grid-Items">
            Topic: NOT AVAILABLE
            <br></br>
            Date: NOT AVAILABLE
            <br></br>
            Thoughts: NOT AVAILABLE
          </div>
          <div className="Random-Grid-Items">
            Topic: NOT AVAILABLE
            <br></br>
            Date: NOT AVAILABLE
            <br></br>
            Thoughts: NOT AVAILABLE
          </div>
          <div className="Random-Grid-Items">
            Topic: NOT AVAILABLE
            <br></br>
            Date: NOT AVAILABLE
            <br></br>
            Thoughts: NOT AVAILABLE
          </div>
          <div className="Random-Grid-Items">
            Topic: NOT AVAILABLE
            <br></br>
            Date: NOT AVAILABLE
            <br></br>
            Thoughts: NOT AVAILABLE
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}

export default HomePage