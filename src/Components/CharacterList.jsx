import React from 'react'
import CharacterListItem from './CharacterListItem'

const CharacterList = (props) => {
    return (
        <section className="cards">
            {
                props.items.map((item) =><CharacterListItem key={item.name} item={item}/>)
            }
        </section>
    )
}

export default CharacterList
