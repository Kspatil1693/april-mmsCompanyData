import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Home from './Pages/Home';
import AgentRegister from "./Pages/auth/AgentRegister";
import AgentLogin from "./Pages/auth/AgentLogin";
import ClientLogin from './Pages/auth/ClientLogin';
import ClientRegister from "./Pages/auth/ClientRegister";


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/agentRegister" element={<AgentRegister/>} />
        <Route path="/agentLogin" element={<AgentLogin />} />
        <Route path="/clientRegister" element={<ClientRegister/>} />
        <Route path="/clientLogin" element={<ClientLogin/>} /> 
    </Routes >
    </div>
     
    
  );
}

export default App;
