import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
const ClientLogin = () => {
  const [data, setData] = useState({
        email:'',
        clientPhoneNumber: '',
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
        <h2 className="text-center">Client Login Form</h2>
        <form onSubmit={handleSubmit} className="text-center" >
             <div className="mb-1 register">
                <label for="emailId" className="form-label">
                    Email: </label>
                      <input type="text" name="email" className="form-control" id="emailId" //autocomplete="off" 
                          onChange={handleInput} />
                       
            </div><br/><br/>
            <div class="mb-1 register">
                <label for="clientPhoneNumberId" className="form-label">
                    PhoneNumbe: </label>
                      <input type="text" name="clientPhoneNumber" className="form-control" id="clientPhoneNumberId" //autocomplete="off" 
                          onChange={handleInput} />
                 
            </div><br/><br/>
            <div className="mb-1 register">
                <label for="MpinId" className="form-label">
                    Password:</label>
                      <input type="password" name="mpin" className="form-control" id="mpinId" //autocomplete="off"
                          onChange={handleInput} />
                     
            </div>
           <br/><br/>
                <button type="submit" name="submit" className="btn btn-primary">
                Login
          </button><br/>
          <NavLink to="/"> Home</NavLink>
        </form>
    </div>
    </div>
  )
}

export default ClientLogin
