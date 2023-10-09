import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const AgentRegister = ({ registerUser }) => {
  
  const [data, setData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        phoneNumber: '',
        whatsAppNumber: '',
        alternativeNumber: '',
        email: '',
        password1:'',
        adharCard: '',
        panCard: '',
        buildingName: '',
        flatNumber: '',
        streetName: '',
        pinCode: ''
    })
    const handleInput = (event) => { 
        setData({ ...data, [event.target.name]: event.target.value })
  }
  const handleSubmit = async () => {
    // Call the registerUser function to register the user using MetaMask
    await registerUser(data.phoneNumber);
    
  };
  return (
    <div>
      <div className="container mt-3 shadow-lg p-3" >
        <h2 className="text-center">Agent Registration Form</h2>
        <form onSubmit={handleSubmit}className='form -data'>
            <div className="mb-1 register">
                  <label htmlFor="MiddleNameId" className="form-label">
                    FirstName</label>
                      <input type="text" name="firstName" className="form-control" id="FirstNameId" //autocomplete="off"
                          onChange={handleInput } />
            </div>
            <div className="mb-1 register">
                <label htmlFor="MiddleNameId" className="form-label">
                    MiddleName</label>
                      <input type="text" name="middleName" className="form-control" id="MiddleNameId" //autocomplete="off"
                          onChange={handleInput }/>
            </div>
            <div className="mb-1 register">
                <label htmlFor="LastNameId" className="form-label">
                    LastName </label>
                      <input type="text" name="lastName" className="form-control" id="LastNameId" //autocomplete="off"
                           onChange={handleInput }/>
            </div>
            <div className="mb-1 register">
                <label htmlFor="PhoneNumberId" className="form-label">
                    PhoneNumber</label>
                      <input type="text" name="phoneNumber" className="form-control" id="phoneNumber"//autocomplete="off"
                    onChange={handleInput } />
            </div>
            <div className="mb-1 register">
                <label htmlFor="whatsAppNumberId" className="form-label">
                    WhatsAppNumber </label>
                      <input type="text" name="whatsAppNumber" className="form-control" id="whatsAppNumberId" //autocomplete="off"
                     onChange={handleInput }/>
                  </div>
                  <div className="mb-1 register">
                <label htmlFor="AlternativeNumberId" className="form-label">
                    AlternativeNumber </label>
                      <input type="text" name="alternativeNumber" className="form-control" id="alternativeNumberId" //autocomplete="off"
                           onChange={handleInput } />
            </div>
            <div className="mb-1 register">
                <label htmlFor="EmailId" className="form-label">
                    Email</label>
                      <input type="text" name="email" className="form-control" id="EmailId" //autoComplete='off'
                 onChange={handleInput }/>
                  </div>
                  <div className="mb-1 register">
                <label htmlFor="Password1Id" className="form-label">
                    Password</label>
                      <input type="password" name="password1" className="form-control" id="password1Id" //autoComplete='off'
                 onChange={handleInput }/>
            </div>
            <div className="mb-1 register">
                <label htmlFor="adharCardId" className="form-label">
                    AdharCard</label>
                      <input type="text" name="adharCard" className="form-control" id="adharCardId" //autoComplete='off'
                 onChange={handleInput }/>
                  </div>
                   <div className="mb-1 register">
                <label htmlFor="panCardId" className="form-label">
                    PanCard</label>
                      <input type="text" name="panCard" className="form-control" id="panCardId" //autoComplete='off'
                           onChange={handleInput }/>
            </div>
            <div className="mb-1 register">
                <label htmlFor="buildingNameId" className="form-label">
                    BuildingName</label>
                      <input type="text" name="buildingName" className="form-control" id="buildingNameId" 
                      onChange={handleInput }/>
                  </div>
                   <div className="mb-1 register">
                <label htmlFor="flatNumber" className="form-label">
                    FlatNumber</label>
                      <input type="text" name="flatNumber" className="form-control" id="flatNumberId"
                 onChange={handleInput }/>
            </div>
            <div className="mb-1 register">
                <label htmlFor="streetNameId" className="form-label">
                    StreetName</label>
                      <input type="text" name="streetName" className="form-control" id="streetNameId" //autocomplete="off"
                       onChange={handleInput } />
            </div>
            <div className="mb-1 register">
                <label htmlFor="PincodeId" className="form-label">
                    Pincode</label>
                      <input type="text" name="pinCode" className="form-control" id="PincodeId" //autocomplete="off"
                       onChange={handleInput }/>
            </div>
           <br/><br/>
            <button type="submit" name="submit" className="button btn btn-primary ">
            Register
          </button><br/><br/>
             <NavLink to="/agentLogin"> Login</NavLink>
        </form>
          </div>
    </div>
  )
}

export default AgentRegister

