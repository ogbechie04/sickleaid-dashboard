import Sidebar from '@components/Sidebar'
import React from 'react'

const HospitalLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full min-h-screen flex bg-white'>
        <Sidebar />
        <div className='w-full'>
            {children}
        </div>
    </div>
  )
}

export default HospitalLayout