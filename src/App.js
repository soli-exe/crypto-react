import React from 'react';

// Components
import Landing from './components/Landing';

// Styles
import './index.css';

const App = () => {

  return (
    <div className='flex flex-col items-center w-full pt-8 h-max min-h-screen'>
      <Landing />
    </div>
  );
};

export default App;