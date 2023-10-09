import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ClientLogin = ({loginUser}) => {
   const [data, setData] = useState({
        email:'',
        phoneNumber: '',
        mpin:''
    });
    const handleInput = (event) => { 
        setData({...data,[event.target.name]:event.target.value})
  }
  
  const handleSubmit= async () => {
    // Call the loginUser function to authenticate the user using MetaMask
    await loginUser(data);
  };

  return (
    <div>
      <div className="container mt-3 shadow-lg p-3">
        <h2 className="text-center">Client Login Form</h2>
              <form onSubmit={handleSubmit}>
             <div className="mb-1 data">
                <label for="emailId" className="form-label">
                    Email: </label>
                      <input type="text" name="email" className="form-control" id="emailId" //autocomplete="off" 
                      onChange={handleInput}/>
            </div>
            <div className="mb-1 data">
                <label for="PhoneNumberId" className="form-label">
                    PhoneNumbe: </label>
                      <input type="text" name="phoneNumber" className="form-control" id="phoneNumberId" //autocomplete="off"
                onChange={handleInput}      />
            </div>
            <div className="mb-1 data">
                <label for="MpinId" className="form-label">
                    Password:</label>
                      <input type="text" name="mpin" className="form-control" id="mpinId" //autocomplete="off" 
                      onChange={handleInput}/>
            </div>
           
                <button type="submit" name="submit" className="btn btn-primary button">
                Login
          </button><br /><br />
           
           <NavLink to="/clientRegister"> Register</NavLink>
        </form>
    </div>
    </div>
  )
}

export default ClientLogin
