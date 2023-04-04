import React from 'react'

const Task = ({Title,Description}) => {
  return (
      <div className='task'>
          <div>
              <p>{Title}</p>
              <span>{Description}</span>
          </div> 
          <button>-</button>
      </div>
  )
}

export default Task;