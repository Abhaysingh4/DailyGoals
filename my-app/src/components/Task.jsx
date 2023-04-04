import React from 'react'

const Task = ({Title,Description,deleteTask,index}) => {
  return (
      <div className='task'>
          <div>
              <p>{Title}</p>
              <span>{Description}</span>
          </div> 
          <button type='submit' onClick={()=>deleteTask(index)}>-</button>
      </div>
  )
}

export default Task;