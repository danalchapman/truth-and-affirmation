import { useState } from "react"

import { TextCard } from "../TextCard/TextCard"

import { affirmData } from '../../Data/affirmData'
import { truthData } from '../../Data/truthData'

export const TextDisplay = ({ saveStatus, addSave, deleteSave }) => {

    const [displayText, setDisplayText] = useState([])

    const chooseAffirm = () => {
        setDisplayText(affirmData)
    }

    const chooseTruth = () => {
        setDisplayText(truthData)
    }

    const clearTexts = () => {
        setDisplayText([])
    }

    const displayChosenText = () => {
        const result = []
        let singleText = displayText[Math.floor(Math.random() * displayText.length)]
        result.push(singleText)

        return result?.map(text => {
            return (
                <TextCard 
                    key={text.id}
                    id={text.id}
                    text={text.text}
                    saveStatus={saveStatus}
                    addSave={addSave}
                    deleteSave={deleteSave}
                />
            )
        })
    }

    return (
        <main className='flex flex-col bg-white rounded shadow-xl p-4 '>
            <div className='flex justify-between'>
                <button 
                    className='italic text-blue-400'
                    onClick={() => chooseTruth()}
                >Truth</button>
                <button 
                    className='italic text-blue-400'
                    onClick={() => chooseAffirm()}
                >Affirmation</button>
            </div>
            <div className=''> 
                { displayText.length ? displayChosenText() : <p className='text-blue-400'>What do you need to hear today?</p>}
            </div>
            <button 
                className='bg-white text-blue-400 underline text-sm'
                onClick={() => clearTexts()}
            >Clear Text</button>
        </main>
    )
}