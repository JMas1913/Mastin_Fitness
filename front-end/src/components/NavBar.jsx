import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar">
      <h4>Mastin Fitness</h4>
      <div>
        <Link to="/">Home | </Link>
        <Link to="/listofexercises">List of Exercises | </Link>
        <Link to="/newexercise">New Exercise | </Link>
        <Link to="/workout">Workout | </Link>
        <Link to="/newprofile">New Profile | </Link>
        {/* Just to have this to show I can do it on more than one page
        <Link to="/listofprofiles">List of Profiles</Link> */} 
      </div>
    </nav>
  )
}

export default Nav