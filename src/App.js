import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import ALLCodingBlogs from './all blog pages/AllCodingBlogs';
import ALLRecentBlogs from './all blog pages/AllRecentBlogs';
import ALLPersonalBlogs from './all blog pages/AllPersonalBlogs';
import ALLWorkBlogs from './all blog pages/AllWorkBlogs';
import ALLRandomBlogs from './all blog pages/AllRandomBlogs';
import SupportPage from './SupportPage';
import CblogsTemplates from './blog templates/CblogsTemplates';
import WblogsTemplates from './blog templates/WblogsTemplates';
import PblogsTemplates from './blog templates/PblogsTemplates';
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
            <Route path="/Work/:id" element={<WblogsTemplates blogs={blogs} />} />
            <Route path="/Personal/:id" element={<PblogsTemplates blogs={blogs} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
