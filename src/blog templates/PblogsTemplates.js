import {useEffect} from 'react';
import { useParams } from 'react-router-dom';

const PblogsTemplates = ({ blogs }) => {
  const { id } = useParams(); // Extracting the id parameter from the URL

  // Finding the blog with the matching id
  const blog = blogs.find(blog => blog.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return <div>Blog not found</div>; // Handle case when blog is not found
  }

  return (
    <div className="Pbs-main-divs">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Topic: {blog.topic}</h1>
      <div className="h3-div">
        <h3 className="CBs-h3s">Date: {blog.date}</h3>
        <h3 className="CBs-h3s">Main Thoughts: {blog.thoughts}</h3>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      {blog.Body.map((paragraph, index) => (
        <p key={index} className="All-Personal-p">{paragraph}</p>
      ))}
      <p className="All-Personal-p">Thank You For Reading</p>
    </div>
  );
};

export default PblogsTemplates;