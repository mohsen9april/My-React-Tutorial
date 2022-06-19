import React from 'react'

const Myarray = () => {

const employees  = ["Mohsen", "Ali" , "Hosein", "Zahra"];

  return (
    <div>
      {employees .map(employee => (
        <h1> {employee} </h1>
      ))}
    </div>
  )
}

export default Myarray