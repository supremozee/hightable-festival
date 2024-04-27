import Link from 'next/link'
import React from 'react'
export const SignUpButton = ({onClick}: {onClick:any}) => {
  return (
    <div onClick={onClick}>
    <button className='button'>
        Sign Up
     </button>
    </div>
  )
}
