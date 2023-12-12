import React from 'react'

function PrimaryButton({text}) {
  return ( 
    <button className='text-base py-2 px-4 bg-fuchsia-600 text-white rounded-xl font-bold my-2 mx-2 hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-slate-500 hover:border-2 hover:border-fuchsia-600 '>{text}</button>
  )
}

export default PrimaryButton