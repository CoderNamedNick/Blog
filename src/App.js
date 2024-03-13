import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <div className="Main-App-Div">
        <Header />
        <div className='Content-div'>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
