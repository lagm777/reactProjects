import { useState } from 'react'

function CountButton () {
  const [count, setCount] = useState(0)

  const handleClick = value => {
    if (value) {
      setCount(count + 1)
    } else {
      setCount(count - 1)
    }
  }

  return (
    <div>
      <h1>Hello World</h1>
      <p>{count}</p>
      <button onClick={() => handleClick(true)}>Sumar</button>
      <button onClick={() => handleClick(false)}>Restar</button>
    </div>
  )
}

export default CountButton
