import React from 'react'

function SideMenu({ isOpen, children }) {
  return (
    <div className={`flex absolute -z-50 bg-gray-800 h-screen w-screen left-100 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-500`}>
      {children}
    </div>
  )
}

export default SideMenu