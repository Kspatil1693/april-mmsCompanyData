import React from 'react'
import Layout from '../Components/Layout';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <Layout>
      <div className="container mt-3 shadow-lg p-3">
        <h2 className="text-center">Agent Login Form</h2>
       <form>
             <div className="mb-1 data">
                <label htmlFor="EmailId" className="form-label">
                    Email: </label>
                      <input type="text" name="email" className="form-control" id="emailId" //autocomplete="off"
                           />
                  </div>     
            <div className="mb-1 data">
                <label htmlFor="PhoneNumberId" className="form-label">
                    PhoneNumber: </label>
                      <input type="text" name="phoneNumber" className="form-control" id="phoneNumberId" //autocomplete="off"
                         />
            </div>
            <div className="mb-1 data">
                <label htmlFor="mpinId" className="form-label">
                    Password:</label>
                      <input type="password" name="mpin" className="form-control" id="mpinId" //autocomplete="off" 
                      />
                    </div>
           <br/><br/>
                <button type="submit" name="submit" className="btn btn-primary">
                Login
                  </button><br/><br/>
          <p>Create new account and  register here ...</p>
           <NavLink to="/agentRegister"> Register</NavLink>
        </form>
    </div>
  
    </Layout>
  )
}

export default Login
