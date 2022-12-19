import React from 'react'

const Image = ({source, className}) => {

  return (
    <img className = {className} src={`assets/images/${source}`}></img>
  )
}

export default Image