import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './views/Profile';
import Home from './views/Home'
import Loading from './components/Loading';
import CarDesign from './components/CarDesign';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';

function App() {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  if(error){
    return <h1>Error: {error.message}</h1>
  }

  return (
    <div id='app'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/cardesign" element={<CarDesign/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;