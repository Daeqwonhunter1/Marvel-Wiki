import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'


export default function Header(props) {
  return (

    <header>
      <Link to='/'><img id="marvel-logo" src="https://1000logos.net/wp-content/uploads/2017/08/Marvel-Logo.png" height="200" width="200 " alt="marvel" /></Link>
      <Search />
    </header>



  )
}