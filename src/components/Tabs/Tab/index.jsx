import React from 'react'

function Tab({ title, isActive, onClick }) {

  return (
    <li className="mr-2">
            <button onClick={onClick} className={`inline-block p-4 rounded-t-lg border-b-2 border-transparent whitespace-nowrap ${isActive ? 'text-green-400 border-green-400' : 'text-green-400 opacity-50'}`}>{title.toUpperCase()}</button>
    </li>
  )
}

export default Tab