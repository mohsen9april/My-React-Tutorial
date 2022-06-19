import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [count,setCount] = useState(0);


  return (
    <div>
        <p>you click {count} times</p>
        <button onClick={()=> setCount(count+1)}> Click Me ! </button>

        {/* <p>you click 2 times</p> */}
        {/* <button onClick={()=> alert('clicked!')}> Click Me ! </button> */}
    </div>
  )
}

export default Counter