import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import ALLCodingBlogs from './AllCodingBlogs';
import Cb1 from './CodingBlogs/Cb#1';

function App() {
  return (
    <Router>
      <div className="Main-App-Div">
        <Header />
        <div className='Content-div'>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/AllCoding' element={<ALLCodingBlogs />} />
            <Route path='/AllCoding/CB1' element={<Cb1 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
