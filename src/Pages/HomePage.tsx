
import Header from '../Headers/Header'
import DreamJob from '../LandingPage/DreamJob'
import Companies from '../LandingPage/Companies'
import JobCategory from '../LandingPage/JobCategory'
import Working from '../LandingPage/Working'
import Testimonial from '../LandingPage/Testimonial'
import Subscribe from '../LandingPage/Subscribe'
import Footer from '../Footer/Footer'


const HomePage = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"]'> 
      <Header/>
       <DreamJob/>
       <Companies/>
       <JobCategory/>
       <Working/>
       <Testimonial/>
       <Subscribe/>
       <Footer/>
       
    </div>
  )
}

export default HomePage