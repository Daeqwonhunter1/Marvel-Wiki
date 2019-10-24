import React from 'react'
import { Link } from 'react-router-dom'

export default function AutoComplete(props) {
  return (
    <div className="contain" >
      {
        props.suggestions.map(char => (
          <div className="optionsDiv">
            <Link className="link" to={`/${char.id}`}>
              <select className="options" multiple="multiple">
                <option>{char.name}</option>
              </select>
            </Link>
          </div>

        ))
      }
    </div >

  )
}


