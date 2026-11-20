import React, { useRef, useState } from 'react'

const Practice = () => {

  const count=useRef(0)

  const handleClick=()=>{
    count.current++

    console.log(count.current)

  }

  return (
    <div>
      <h2>Count is at:{count.current}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Practice
