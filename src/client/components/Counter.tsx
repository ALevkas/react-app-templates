import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter((counter) => counter + 1)
  }

  return <button onClick={handleClick}>You clicked me {counter} times</button>
}

export default Counter
