import React from 'react'
import {GiRobotAntennas} from 'react-icons/gi';

const Bot = () => {
  return (
    <div className='fixed bottom-14 right-16 cursor-pointer rounded-full text-black bg-white z-50 p-2 animate-pulse hover:animate-spin'>
        <GiRobotAntennas size={40}/>
    </div>
  )
}

export default Bot