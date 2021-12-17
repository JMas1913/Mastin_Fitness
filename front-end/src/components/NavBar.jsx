import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar">
      <h4>Mastin Fitness</h4>
      <div>
        <Link to="/">Home | </Link>
        <Link to="/listings">List of Exercises | </Link>
        <Link to="/new">New Exercise | </Link>
        <Link to="/workout">Workout | </Link>
        <Link to="/newprofile">New Profile</Link>
      </div>
    </nav>
  )
}

export default Nav