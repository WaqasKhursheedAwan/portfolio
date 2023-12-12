import React from 'react'

function SecondaryButton({text}) {
  return (
    <button className='text-base py-2 px-4 bg-transparent text-black border-2 border-fuchsia-600 rounded-xl font-bold my-2 mx-2 hover:bg-fuchsia-600 hover:font-bold hover:text-white hover:shadow-2xl hover:shadow-slate-500 hover:border-2 hover:border-white'>{text}</button>
  )
}

export default SecondaryButton