export const FavoriteCard = ({ id, text, deleteSave }) => {
    return (
        <article>
            <p>{ text }</p>
            <button
                className=''
                onClick={() => deleteSave(id)}
            >Unsave</button>
        </article>
    )
}