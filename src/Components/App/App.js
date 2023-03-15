// import { useState } from "react"
import { Nav } from '../Nav/Nav'
import { TextDisplay } from '../TextDisplay/TextDisplay'
import { Favorites } from '../Favorites/Favorites'

import { Routes, Route } from 'react-router-dom'

export const App = () => {
  
  return (
    <div className="mx-auto bg-gradient-to-b from-blue-500 to-white h-screen w-screen text-white font-serif flex flex-col items-center">
      <h1 className="text-4xl text-center p-4">
        Take What You Need
      </h1>
      <div className='container flex justify-between'>
        <Nav />
        <Routes>
          <Route path='/' element={<TextDisplay />} />
          <Route path='/saved' element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}
