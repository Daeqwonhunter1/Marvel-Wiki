import React from 'react'

export default function ReturnComics(props) {
  return (

    props.getComic.map(comic => {
      return (
        <div id="comic-image">
          <img className="comics" src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt={comic} />
        </div >
      )
    })

  )
}