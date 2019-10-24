import React from 'react'


export default function ReturnCharacter(props) {
  return (
    <div className="char-container">
      {
        props.getChar.map(char => {
          return (
            <div className="char-info" key={char.id}>
              <h1>{char.name}</h1>
              <img className="char-image" src={char.thumbnail.path + "." + char.thumbnail.extension} alt={char.name} />
              <div className="char-description">
                <p>{char.description}</p>

              </div>
            </div>
          )
        })}
    </div>
  )
}