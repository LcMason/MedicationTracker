import React from 'react'


const Errors = ({errors}) => {
    const errorLis = errors.map((error, index) => <li key={index}> { error}</li>)
  return (
    <ul>
        { errorLis }
    </ul>
  )
}

export default Errors