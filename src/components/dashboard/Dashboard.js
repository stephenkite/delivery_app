import React from 'react'
import Sidebar from './Sidebar'


function Dashboard({children}) {
  return (
    <div className='flex'>
        
      <Sidebar/>

      <div className='flex-grow'>
        {children}
      </div>
    </div>
  )
}

export default Dashboard
