import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

function ListofProfiles(props) {
  console.log("list of profile page")
  const showProfiles = (profile) => {
    props.history.push(`/listofprofiles/${profile.id}`)
  }


  return (
    <div key={props.profiles}>
      { props.profiles &&
      props.profiles.profiles.map((profile) => (
        <div className="profile-card" onClick={() => showProfiles(profile)}>
          <h3>{profile.name}</h3>
        </div>
      ))}

      <div>
        <button>
          Delete a profile
        </button>
      </div>



    </div>
    
  )
}

export default ListofProfiles