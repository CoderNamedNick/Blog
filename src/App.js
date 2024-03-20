import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import ALLCodingBlogs from './AllCodingBlogs';
import ALLRecentBlogs from './AllRecentBlogs';
import ALLPersonalBlogs from './AllPersonalBlogs';
import ALLWorkBlogs from './AllWorkBlogs';
import ALLRandomBlogs from './AllRandomBlogs';
import SupportPage from './SupportPage';
import CblogsTemplates from './CblogsTemplates';
import Wb1 from './Blogs/WorkBlogs/Wb1';
import blogs from './Blogs';

function App() {
  return (
    <Router>
      <div className="Main-App-Div">
        <Header />
        <div className='Content-div'>
          <Routes>
            <Route exact path='/' element={<HomePage blogs={blogs} />} />
            <Route path='/AllCoding' element={<ALLCodingBlogs blogs={blogs} />} />
            <Route path='/RecentBlogs' element={<ALLRecentBlogs blogs={blogs} />} />
            <Route path='/PersonalBlogs' element={<ALLPersonalBlogs blogs={blogs} />} />
            <Route path='/WorkBlogs' element={<ALLWorkBlogs blogs={blogs} />} />
            <Route path='/RandomBlogs' element={<ALLRandomBlogs blogs={blogs} />} />
            <Route path='/SupportPage' element={<SupportPage blogs={blogs} />} />
            <Route path="/Coding/:id" element={<CblogsTemplates blogs={blogs} />} />
            <Route path='/AllWork/WB1' element={<Wb1 blogs={blogs} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
