import React from 'react'
import { Link } from 'react-router-dom'

export default function Main(props) {
  return (

    <main>
      {
        props.listAPI.map(api => (
          <div key={api.id} className="apis">
            <Link to={`/${api.id}`}>
              <h1>{api.name}</h1>
              <img className="api-image" src={api.thumbnail.path + "." + api.thumbnail.extension} alt={api.name} />
            </Link>
          </div>
        ))
      }
    </main>

  )
}