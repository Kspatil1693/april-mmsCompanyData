import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';


const AgentLogout = ({logoutUser}) => {
  const [data, setData] = useState({
        email:'',
        phoneNumber: '',
        mpin:''
    });
    const handleInput = (event) => { 
        setData({...data,[event.target.name]:event.target.value})
  }
  
 const handleSubmit = () => {
    // Call the logoutUser function to log the user out
    logoutUser();
  };
  return (
    <div>
      <div className="container mt-3 shadow-lg p-3">
        <h2 className="text-center">Agent Login Form</h2>
       <form onSubmit={handleSubmit}>
             <div className="mb-1 data">
                <label htmlFor="EmailId" className="form-label">
                    Email: </label>
                      <input type="text" name="email" className="form-control" id="emailId" //autocomplete="off"
                      onChange={handleInput}/>
            </div>     
            <div className="mb-1 data">
                <label htmlFor="PhoneNumberId" className="form-label">
                    PhoneNumber: </label>
                      <input type="text" name="phoneNumber" className="form-control" id="phoneNumberId" //autocomplete="off"
                onChange={handleInput} />
            </div>
            <div className="mb-1 data">
                <label htmlFor="password1Id" className="form-label">
                    Password:</label>
                      <input type="password" name="mpin" className="form-control" id="password1Id" //autocomplete="off" 
                      onChange={handleInput}/>
            </div>
           <br/><br/>
                <button type="submit" name="submit" className="btn btn-primary button">
                Logout
                  </button><br/><br/>
          
           <NavLink to="/"> HomePage</NavLink>
        </form>
    </div>
    </div>
  )
}

export default AgentLogout
