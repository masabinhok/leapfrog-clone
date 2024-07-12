import React from 'react'

const HeroArrow = ({name}) => {
  return (
    <button >
      <span className='hover:text-green-500 text-[14px] text-blue-900 font-bold py-3 pr-3' >{name} <span className='px-2'>&rarr;</span>	</span>
    </button>
  )
}

export default HeroArrow