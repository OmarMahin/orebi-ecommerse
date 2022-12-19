import React from 'react'

const Dropdown = ({children, classname, dropRef}) => {
  return (
    <div className={classname} ref ={dropRef}>{children}</div>
  )
}

export default Dropdown