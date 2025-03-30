import { Button, TextInput } from '@mantine/core'

const Subscribe = () => {
  return (
   <div className='mt-20 flex items-center  bg-mine-shaft-900 mx-20 py-3 rounded-xl'>
    <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100 w-2/3">
          Never want to Miss any <span className='text-bright-sun-400'> Jobs News</span>  
        </div>
        <div className='flex gap-4 bg-mine-shaft-800 px-3 py-3 items-center'>
        <TextInput
        className='[&_input]:text-mine-shaft-100 font-semibold'
        variant='unstyled'
        placeholder='Your@gmail.com'
        size='xl'
        />
        <Button 
        
        className='!rounded-lg'
        size='lg' color='brightSun.4'>Subscribe</Button>
        </div>
        
   </div>
  )
}

export default Subscribe