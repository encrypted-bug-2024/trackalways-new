import React from 'react'
import CTAButton from '../components/shared/CTAButton'

const PageNotFound = ({link}) => {
  return (
    <div className='h-[90vh] w-full flex justify-center items-center flex-col'>
      <p className='text-[4.5rem] font-extrabold text-[#152440]'>404</p>  
      <p className='text-[2rem] font-bold text-[#152440]'>Page Not Found</p>  
      <p className='mb-[3%] text-[#6B6A75] text-[1rem]'>Sorry, the page you are looking for does not exist.</p>  
      <CTAButton linkto={link}>
        Go Back to 
        {
          link === '/' ? ' HomePage' : ' Dashboard'
        }
      </CTAButton>
    </div>
  )
}

export default PageNotFound