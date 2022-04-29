
import React from 'react'
import "./App.css";
import Login from "./components/login/Login";
import Navbar from './components/navbar/Navbar';

function App() {
  console.log('helo')
  return (
    <>
    <Navbar/>
      <Login />
    </>
  );
}

export default App;
