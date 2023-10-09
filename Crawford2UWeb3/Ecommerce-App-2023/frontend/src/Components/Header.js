import React from 'react'
import { NavLink } from 'react-router-dom';
import {GiShoppingBag} from 'react-icons/gi';
import {BsFillCartFill} from 'react-icons/bs';

const Header = () => {
    return ( 
     <div>

    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
                  <button className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarTogglerDemo01"
                      aria-controls="navbarTogglerDemo01"
                      aria-expanded="false"
                      aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <NavLink className="navbar-brand" to='/'>
                            <GiShoppingBag/>  Crawford2U</NavLink>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
         {/* <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>*/}
                                
           <li className="nav-item dropdown">
          <NavLink className="nav-link " to="/register">
            Register
          </NavLink>
        </li>         
                    
            <li className="nav-item">
              <NavLink className="nav-link " to='/login'>Login</NavLink>
         </li>
                <li className="nav-item">
                                          
              <NavLink className="nav-link " to='/cart'>Cart(0)<BsFillCartFill/> </NavLink>
         </li>               
                            
           </ul>
                        
          
        </div>
      </div>
    </nav>  
  </div>
  )
}

export default Header
