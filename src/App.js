import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import ALLCodingBlogs from './AllCodingBlogs';

function App() {
  return (
    <Router>
      <div className="Main-App-Div">
        <Header />
        <div className='Content-div'>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/AllCoding' element={<ALLCodingBlogs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
