import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TabPanel from './components/TabPanel';

function App() {

  return (
    <div className="App">
      <NavBar />
      <TabPanel/>
    </div>
  );
}

export default App;
