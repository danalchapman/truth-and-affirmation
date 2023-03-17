export const TextCard = ({ id, text, saveStatus, addSave }) => {
    // const saveText = saveStatus ? 'Unsave' : 'Save'

    return (
        <article className='flex flex-col'>
            <p className='text-blue-400'>
                { text }
            </p>
            {/* { saveStatus && <span className='text-blue-600 text-sm italic'>Saved for a rainy day.</span> } */}
            <button 
                className='text-blue-400 border-blue-300 border-2 rounded'
                onClick={() => addSave(id, text)}
            >Save</button>
        </article>
    )
}