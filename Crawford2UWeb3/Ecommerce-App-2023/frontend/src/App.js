
import './App.css';

import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import PageNotFound from './Pages/PageNotFound';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Policy from './Pages/Policy';
function App() {
  return (
    <div>
      <>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
           <Route path='/login' element={ <Login/>} />
          <Route path='/register' element={<Register />} />
          <Route path='policy' element={<Policy/> } />
          <Route path='/*' element={<PageNotFound />} />         
       </Routes>
      </>
      </div>
  );
}

export default App;
