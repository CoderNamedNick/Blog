import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import ALLCodingBlogs from './AllCodingBlogs';
import ALLRecentBlogs from './AllRecentBlogs';
import ALLPersonalBlogs from './AllPersonalBlogs';
import ALLWorkBlogs from './AllWorkBlogs';
import ALLRandomBlogs from './AllRandomBlogs';
import Cb1 from './CodingBlogs/Cb1';
import Wb1 from './WorkBlogs/Wb1';

function App() {
  return (
    <Router>
      <div className="Main-App-Div">
        <Header />
        <div className='Content-div'>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/AllCoding' element={<ALLCodingBlogs />} />
            <Route path='/RecentBlogs' element={<ALLRecentBlogs />} />
            <Route path='/PersonalBlogs' element={<ALLPersonalBlogs />} />
            <Route path='/WorkBlogs' element={<ALLWorkBlogs />} />
            <Route path='/RandomBlogs' element={<ALLRandomBlogs />} />
            <Route path='/AllCoding/CB1' element={<Cb1 />} />
            <Route path='/AllWork/WB1' element={<Wb1 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
