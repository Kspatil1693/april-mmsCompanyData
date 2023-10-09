import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';


const AgentLogin = ({loginUser}) => {
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
    await loginUser(data.phoneNumber);
    
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
                Login
                  </button><br/><br/>
          
           <NavLink to="/agentRegister"> Register</NavLink>
        </form>
    </div>
    </div>
  )
}

export default AgentLogin
