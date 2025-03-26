import React from 'react'
import Header from '../Headers/Header'
import DreamJob from '../LandingPage/DreamJob'
import Companies from '../LandingPage/Companies'
import JobCategory from '../LandingPage/JobCategory'


const HomePage = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"]'> 
      <Header/>
       <DreamJob/>
       <Companies/>
       <JobCategory/>
    </div>
  )
}

export default HomePage