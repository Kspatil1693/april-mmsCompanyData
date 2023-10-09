import React from 'react'
import Layout from '../Components/Layout'
import aboutImage from '../Images/about.jpg';
const About = () => {
  return (
    <Layout>
      <div className='row contactus'>
        <div className='col-md-6'>
          <img
            src={aboutImage}
            alt='contactus'
            style={{width:"100%"}}
          />
        </div>
        <div className='col-md-4'>
          <h1 className='bg-dark p-2 text-white text-center'>About</h1>
          <p className='text-justify mt-2'>
            ParagraphParagraphs are the group of sentences combined together,
            about a certain topic. It is a very important form of writing as
            we write almost everything in paragraphs,
            be it an answer, essay, story, emails, etc.
            We can say that a well-structured paragraph is
            the essence of good writing.
             ParagraphParagraphs are the group of sentences combined together,
            about a certain topic. It is a very important form of writing as
            we write almost everything in paragraphs,
            be it an answer, essay, story, emails, etc.
            We can say that a well-structured paragraph is
            the essence of good writing.
             ParagraphParagraphs are the group of sentences combined together,
            about a certain topic. It is a very important form of writing as
            we write almost everything in paragraphs,
            be it an answer, essay, story, emails, etc.
            We can say that a well-structured paragraph is
            the essence of good writing.
            
           
          </p>
          
        </div>

      </div>
    </Layout>
  )
}

export default About
