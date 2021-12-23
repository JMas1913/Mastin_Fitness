import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import axios from 'axios'

function ListofProfiles(props) {
  const [profiles, setProfiles] = useState([])
  const showProfiles = (profile) => {
    props.history.push(`/listofprofiles/${profile.id}`)
  }

  const getProfiles = async () => {
    const res = await axios.get("http://localhost:3001/api/profiles/read")
    setProfiles(res.data)
  }


  useEffect(() => {
    getProfiles()
  }, [])


  return (
    <div key={props.profiles}>
      { props.profiles &&
      props.profiles.profiles.map((profile) => (
        <div className="profile-card" onClick={() => showProfiles(profile)}>
          <h3>{profile.name}</h3>
        </div>
      ))}

    </div>
    
  )
}

export default ListofProfiles