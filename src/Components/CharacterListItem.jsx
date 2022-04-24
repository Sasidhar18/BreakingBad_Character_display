import React from 'react'

const CharacterListItem = ({ item }) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.img} alt="character_Name" />
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name: </strong>
                            <p>{item.portrayed}</p>
                        </li>
                        <li>
                            <strong>Nick Name: </strong>
                            <p>{item.nickname}</p>
                        </li>
                        <li>
                            <strong>Birthday: </strong>
                            <span>{item.birthday}</span>
                        </li>
                        <li>
                            <strong>Status: </strong>
                            <span style={{ color: item.status === "Alive" ? "Green" : "Red" }}>
                            {item.status}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterListItem
