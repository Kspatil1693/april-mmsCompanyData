import React from 'react'
import Layout from '../Components/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import groupImage from "../Images/groupContact.png"
const Contact = () => {
  return (
    <Layout>
      <div className='row contactus'>
        <div className='col-md-6'>
          <img
            src={groupImage}
            alt='contactus'
            style={{width:"70%"}}
          />
        </div>
        <div className='col-md-4'>
          <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
          <p className='text-justify mt-2'>
            any query and info about product feel free to call  anytime availible
          </p>
          <p className='mt-3'>
            <BiMailSend/>:www.mmsbits@gmail.com
          </p>
          <p className='mt-3'>
            <BiPhoneCall/>:012-3456789
          </p>
          <p className='mt-3'>
            <BiSupport/>:1800-0000-0000 (toll free)
          </p>
        </div>

      </div>
    </Layout>
  )
}

export default Contact
