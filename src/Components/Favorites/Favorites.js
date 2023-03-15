import { FavoriteCard } from '../FavoriteCard/FavoriteCard'

export const Favorites = ({ saves, deleteSave }) => {
    const saveList = saves.map(save => {
        return (
            <FavoriteCard 
                key={save.id}
                id={save.id}
                text={save.text}
                deleteSave={deleteSave}
            />
        )
    })

    return (
        <section>
            { saves.length ? saveList : <p>Words for a rainy day...</p>}
        </section>
    )
}