import { useState } from 'react';
import Welcome from './Welcome';
import HomePage from './HomePage';

function App() {
  const [OnBlog, setOnBlog] = useState(false)


  const HandleBlogClick = () => {
    setOnBlog(true)
  }

  return (
    <div className="Main-App-Div">
      {!OnBlog && (
        <div>
        <Welcome BlogClick={HandleBlogClick} />
        <HomePage BlogClick={HandleBlogClick}/>
        </div>
      )}
      {OnBlog && (
        <div className="Blog-Div">

        </div>
      )}
    </div>
  );
}

export default App;
