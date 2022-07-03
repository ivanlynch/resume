import React from 'react'

function Header({ title, subtitle}) {
  return (
    <header className="sticky top-0 bg-gray-900 z-10 shadow-md">
    <h1 className="text-4xl text-slate-50 px-4 pt-4">{title ? title : 'Title'}</h1>
    <h2 className="text-1xl px-4 text-red-400 italic pb-4">{subtitle ? subtitle : 'Subtitle'}</h2>
  </header>
  )
}

export default Header