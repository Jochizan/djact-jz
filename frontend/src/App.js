import React from 'react';

import Header from './layouts/Header';
import Dashboard from './components/leads/Dashboard';

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Dashboard />
      </div>
    </>
  );
};

export default App;