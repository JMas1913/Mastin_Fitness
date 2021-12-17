import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar">
      <div>
        <Link to='/'> Home |</Link>
        <Link to='/allexercises'> Workouts |</Link>
         <Link to="/newexercise"> New Exercise </Link>
      </div>
    </nav>
  )
}

export default Nav;
