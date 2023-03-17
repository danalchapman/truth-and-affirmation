export const TextCard = ({ id, text, saveStatus, addSave, deleteSave }) => {
    const saveText = saveStatus ? 'Unsave' : 'Save'

    return (
        <article>
            <p className='text-blue-400'>
                { text }
            </p>
            <button 
                className='text-blue-400 border-blue-300 border-2 rounded'
                onClick={() => addSave(id, text)}
            >Save</button>
        </article>
    )
}