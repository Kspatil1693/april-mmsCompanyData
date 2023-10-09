import React from 'react'
import Layout from '../Components/Layout';
import policyImage from '../Images/privacyPolicy.jpg';
const Policy = () => {
  return (
    <Layout>
     <div className='row contactus'>
        <div className='col-md-6'>
          <img
            src={policyImage}
            alt='contactus'
            style={{width:"100%",height:"100%"}}
          />
        </div>
        <div className='col-md-4'>
          <h1 className='bg-dark p-2 text-white text-center'>Policy</h1>
          <p className='text-justify mt-2'>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
      
          </p>
          
          
        </div>

      </div> 
    </Layout>
  )
}

export default Policy
