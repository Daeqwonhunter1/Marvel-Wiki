import React from 'react'

export default function ReturnComics(props) {
  return (
    <div className="comic-contain">
      {
        props.getComic.map(comic => {
          return (
            <div className="comic-image">
              <img className="comics" src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt={comic} />
            </div >
          )
        })}
    </div>

  )
}