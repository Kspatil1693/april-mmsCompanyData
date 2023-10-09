import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AgentLogin = () => {

 const [data, setData] = useState({
        email:'',
        phoneNumber: '',
        mpin:''
    });
    const handleInput = (event) => { 
        setData({...data,[event.target.name]:event.target.value})
    }

    const handleSubmit = () => { 
        //
    }
  return (
    <div>
       <div className="container mt-3 shadow-lg p-3">
        <h2 className="text-center">Agent Login Form</h2>
       <form onSubmit={handleSubmit}className='text-center '>
             <div className="mb-1 register ">
                <label htmlFor="EmailId" className="form-label">
                    Email: </label>
                      <input type="text" name="email" className="form-control" id="emailId" //autocomplete="off"
                          onChange={handleInput} />
                   
            </div>   <br/><br/>  
            <div className="mb-1 register">
                <label htmlFor="PhoneNumberId" className="form-label">
                    PhoneNumber: </label>
                      <input type="text" name="phoneNumber" className="form-control" id="phoneNumberId" //autocomplete="off"
                          onChange={handleInput} />
                      
            </div><br/><br/>
            <div className="mb-1 register">
                <label htmlFor="mpinId" className="form-label">
                    Password:</label>
                      <input type="password" name="mpin" className="form-control" id="mpinId" //autocomplete="off" 
                          onChange={handleInput} />
                     
                  </div>
                  <br/><br/>
                <button type="submit" name="submit" className="btn btn-primary">
                Login
          </button>
          <br/>
               <NavLink to="/home"> Home</NavLink>
        </form>
    </div>
    </div>
  )
}

export default AgentLogin
