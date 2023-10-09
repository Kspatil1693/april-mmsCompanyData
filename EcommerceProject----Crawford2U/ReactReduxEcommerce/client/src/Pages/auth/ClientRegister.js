import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const ClientRegister = () => {
    const [data, setData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        clientPhoneNumber: '',
        whatsAppNumber: '',
        alternativeNumber: '',
        mpin:'',
        adharCard: '',
        panCard: '',
        buildingName: '',
        flatNumber: '',
        streetName: '',
      pinCode: '',
        phoneNumber:''
    
    })
    const handleInput = (event) => { 
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const handleSubmit = () => { 
        //
    }
  
  return (
    <div>
      <div className="container mt-4 shadow-lg p-3" >
        <h2 className="text-center">Client Registration Form</h2>
        <form onSubmit={handleSubmit} className='mt-5 text-center '>
            <div className="mb-1 register">
                  <label htmlFor="MiddleNameId" className="form-label">
                    FirstName</label>
                      <input type="text" name="firstName" className="form-control" id="FirstNameId" //autocomplete="off"
              onChange={handleInput} />
            
          </div>
          
            <div className="mb-1 register">
                <label htmlFor="MiddleNameId" className="form-label">
                    MiddleName</label>
                      <input type="text" name="middleName" className="form-control" id="MiddleNameId" //autocomplete="off"
              onChange={handleInput} />
            </div>
          
            <div className="mb-1 register">
                <label htmlFor="LastNameId" className="form-label">
                    LastName </label>
                      <input type="text" name="lastName" className="form-control" id="LastNameId" //autocomplete="off"
              onChange={handleInput} />
           
          </div>
          
            <div className="mb-1 register">
                <label htmlFor="clientPhoneNumberId" className="form-label">
                    ClientPhoneNumber</label>
                      <input type="text" name="clientPhoneNumber" className="form-control" id="clientPhoneNumber"//autocomplete="off"
              onChange={handleInput} />
           
          </div>
          
            <div className="mb-1 register">
                <label htmlFor="whatsAppNumberId" className="form-label">
                    WhatsAppNumber </label>
                      <input type="text" name="whatsAppNumber" className="form-control" id="whatsAppNumberId" //autocomplete="off"
              onChange={handleInput} />
         
          </div>
          
                  <div className="mb-1 register">
                <label htmlFor="AlternativeNumberId" className="form-label">
                    AlternativeNumber </label>
                      <input type="text" name="alternativeNumber" className="form-control" id="alternativeNumberId" //autocomplete="off"
              onChange={handleInput} />
          
          </div>
          
            <div className="mb-1 register">
                <label htmlFor="EmailId" className="form-label">
                    Email</label>
                      <input type="text" name="email" className="form-control" id="EmailId" //autoComplete='off'
              onChange={handleInput} />
           
          </div>
          
                  <div className="mb-1 register">
                <label htmlFor="mpinId" className="form-label">
                    Password</label>
                      <input type="password" name="mpin" className="form-control" id="mpinId" //autoComplete='off'
              onChange={handleInput} />
          
          </div>
          
            <div className="mb-1 register">
                <label htmlFor="adharCardId" className="form-label">
                    AdharCard</label>
                      <input type="text" name="adharCard" className="form-control" id="adharCardId" //autoComplete='off'
              onChange={handleInput} />
           
          </div>
          
                   <div className="mb-1 register">
                <label htmlFor="panCardId" className="form-label">
                    PanCard</label>
                      <input type="text" name="panCard" className="form-control" id="panCardId" //autoComplete='off'
              onChange={handleInput} />
            
          </div>
          
            <div className="mb-1 register">
                <label htmlFor="buildingNameId" className="form-label">
                    BuildingName</label>
                      <input type="text" name="buildingName" className="form-control" id="buildingNameId" 
              onChange={handleInput} />
            
          </div>
          
                   <div className="mb-1 register">
                <label htmlFor="flatNumber" className="form-label">
                    FlatNumber</label>
                      <input type="text" name="flatNumber" className="form-control" id="flatNumberId"
              onChange={handleInput} />
            
          </div>
          
            <div className="mb-1 register">
                <label htmlFor="streetNameId" className="form-label">
                    StreetName</label>
                      <input type="text" name="streetName" className="form-control" id="streetNameId" //autocomplete="off"
              onChange={handleInput} />
           
          </div>
          
            <div className="mb-1 register">
                <label htmlFor="PincodeId" className="form-label">
                    Pincode</label>
                      <input type="text" name="pinCode" className="form-control" id="PincodeId" //autocomplete="off"
              onChange={handleInput} />
          
          </div>

          <div className="mb-1 register">
                <label htmlFor="phoneNumberId" className="form-label">
                    agentPhoneNumber</label>
                      <input type="text" name="phoneNumber" className="form-control" id="phoneNumberId" //autocomplete="off"
              onChange={handleInput} />
          
                  </div>
                  
           <br/><br/>
            <button type="submit" name="submit" className="btn btn-primary button">
            Register
          </button>
          <br/>
           <NavLink to="/agentLogin" > Login</NavLink>
        </form>
          </div>
          
    </div>
  )
}

export default ClientRegister
