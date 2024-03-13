import { useState } from 'react';
import Header from './Header';
import HomePage from './HomePage';

function App() {

  return (
    <div className="Main-App-Div">
        <Header/>
      <div className='Content-div'>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
