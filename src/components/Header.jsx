import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (

    <header>
      <Link to='/'>
        <img id="marvel-logo" src="https://1000logos.net/wp-content/uploads/2017/08/Marvel-Logo.png" height="200" width="200 " alt="marvel" />
      </Link>
    </header>



  )
}