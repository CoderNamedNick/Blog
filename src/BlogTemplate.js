import React, { useState } from "react";
import Welcome from "./Welcome";

const BlogTemplate = ({ BlogClick, ExitBlogClick }) => {
  const [onBlogs, setOnBlogs] = useState(true);

  const handleBlogClick = () => {
    BlogClick(); // Call BlogClick function
  };

  return (
    <div>
      <Welcome BlogClick={handleBlogClick} ExitBlogClick={ExitBlogClick} onBlogs={onBlogs} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>Put Blog Here</div>
    </div>
  );
};

export default BlogTemplate;