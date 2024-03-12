import {useState} from "react";

const Welcome = ({BlogClick}) => {
  const [OnBlogs, setOnBlogs] = useState(false)

  const BlogClick2 = () => {
    BlogClick()
    setOnBlogs(true)
  }

  return(
    <div>
      <div className="Header-welcome-div">
        <h1>Nick.Blog</h1>
        <div className="list-div">
          <ul className="welcome-list">
            <li onClick={BlogClick2}>Most Recent Blog</li>
            <li>Code Related</li>
            <li>Family/Friends</li>
            <li>Work</li>
            <li>Other Topics</li>
          </ul>
        </div>
        <h2>Support Nick.Blog</h2>
      </div>
      {OnBlogs && (
        <div className="intro-div">
        <h1>Who Am I</h1>
        <p className="intro-p">
          Hello my name is Nick or CoderNamedNick on Github.
          I started Coding as of Oct. 2023. and specialize in Front Side Web Dev.
          My birthday is April 2003 so when ur reading this you can figure my age "currently about to be 21".
          I Started this blog to not only use for a portfolio project, but for a place to put my ideas.
          I mostly will be talking about my coding journey and my other intrest like Sports, Family, Weight Training, and my 2 cats.
          To support me "Hire me" or maybe just send me an Email it would mean alot.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1><a href="https://codernamednick.github.io/react-portfolio/">Portfolio</a></h1>
        <br></br>
        <br></br>
        <h2>See my Projects at <a href="https://github.com/CoderNamedNick">Github</a></h2>
        <br></br>
      </div>
      )}
    </div>
  )
}

export default Welcome