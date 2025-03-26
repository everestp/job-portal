import React from 'react'
import Marquee from 'react-fast-marquee'
import { companies } from '../Data/Data'

const Companies = () => {
  return (
    <div className='mt-10 pb-5'>
        <div className=' text-4xl text-center font-semibold text-mine-shaft-100'>
            Trusted By <span className='text-bright-sun-400'>1000+</span>
            companies
        </div>
        <Marquee>
         {
            companies.map((company,index)=>(
                <div key={index}  className='mx-8 px-2 py-1 hover:bg-mine-shaft-900 rounded-xl'>
                    <img  className='h-14' src={`/Companies/${company}.png`} alt={company} />

                </div>
            ))
         }
        </Marquee>
    </div>
  )
}

export default Companies