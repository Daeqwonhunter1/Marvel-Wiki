import React from 'react'


export default function Main(props) {
  return (

    <main>
      {
        props.listAPI.map(api => (
          <div className="apis">
            <h1>{api.name}</h1>
          </div>
        ))
      }
    </main>

  )
}