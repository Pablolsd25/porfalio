import React  from 'react';
import Navbar from './components/navbar';
import LandingPage  from './components/LandingPage';
import style from './App.module.css';



function App() {
  return (
    <>
    <Navbar/>  
    <div className={style.container}>
    <LandingPage/>
    </div>
    </>
  );
}

export default App;
