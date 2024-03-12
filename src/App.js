import { useState } from 'react';
import Welcome from './Welcome';
import HomePage from './HomePage';
import BlogTemplate from './BlogTemplate';

function App() {
  const [OnBlog, setOnBlog] = useState(false)


  const HandleBlogClick = () => {
    setOnBlog(true)
  }
  const HandleExitBlogClick = () => {
    setOnBlog(false)
  }

  return (
    <div className="Main-App-Div">
      {!OnBlog && (
        <div>
        <Welcome BlogClick={HandleBlogClick} ExitBlogClick={HandleExitBlogClick} />
        <HomePage BlogClick={HandleBlogClick}/>
        </div>
      )}
      {OnBlog && (
        <div className="Blog-Div">
          <BlogTemplate BlogClick={HandleBlogClick} ExitBlogClick={HandleExitBlogClick}/>
        </div>
      )}
    </div>
  );
}

export default App;
