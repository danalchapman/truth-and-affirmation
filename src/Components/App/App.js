import { useState } from "react"
import { Nav } from '../Nav/Nav'
import { TextDisplay } from '../TextDisplay/TextDisplay'
import { Favorites } from '../Favorites/Favorites'

import { Routes, Route } from 'react-router-dom'

export const App = () => {

  const [saves, setSaves] = useState([])
  const [saveStatus, setSaveStatus] = useState(false)

  const addSave = (id, text) => {
    const savedText = {
      id, 
      text
    }

    if (!saves.some(save => save.id === id)) {
      setSaves([...saves, savedText])
      setSaveStatus(true)
    }
  }

  const deleteSave = (id) => {
    const filteredSaves = saves.filter(save => save.id !== id)
    setSaves(filteredSaves)
    setSaveStatus(false)
  }
  
  return (
    <div className="mx-auto bg-gradient-to-b from-blue-500 to-white h-screen w-screen text-white font-serif flex flex-col items-center">
      <h1 className="text-4xl text-center p-4">
        Take What You Need
      </h1>
      <div className='container flex justify-between'>
        <Nav />
        <Routes>
          <Route path='/' element={<TextDisplay saveStatus={saveStatus} addSave={addSave} deleteSave={deleteSave}/>} />
          <Route path='/saved' element={<Favorites saves={saves} deleteSave={deleteSave}/>} />
        </Routes>
      </div>
    </div>
  );
}
