import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'



function ProfileDetails(props) {
    let history = useHistory()
    let {id} = useParams()
    const [selectProfile, setProfile] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [sex, setSex] = useState('')
    const [goal, setGoal] = useState('')

    const getProfileDetails = async () => {
      const res = await axios.get(`http://localhost:3001/api/profile/read/${id}`)
      setExercise(res.data.exerciseId)
  }

  useEffect(() => {
  getProfileDetails()
  setProfile(selectProfile)
  setName(selectProfile.name)
  setAge(selectProfile.age)
  setSex(selectProfile.sex)
  setGoal(selectProfile.goal)
  }, [])

  const putProfile = async () => {
    const res = await axios.put(
      `http://localhost:3001/api/profile/${id}`,
      {
        name,
        age,
        sex,
        goal,
      }
    )
    history.push(`/listofprofiles`)
  }


  const deleteProfile = async () => {
    const res = await axios.delete(`http://localhost:3001/api/profile/${id}`)
  }




  return selectProfile ? (
    <div className='details'>
      <div className='detail-header'>
        <div style={{ minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2>{selectProfile.name}</h2>
        </div>
      </div>
      <div className='info-wrapper'>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h3>Age: {selectProfile.age}</h3>
          <h3>Sex: {selectProfile.sex}</h3>
          <h3>Goal: {selectProfile.goal}</h3>
        </div>
      </div>
      <div>
        <form onSubmit={() => putProfile()}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} name={'name'} placeholder={'name'} />
          <input type="text" value={reps} onChange={(e) => setAge(e.target.value)} name={'age'} placeholder={'age'} />
          <input type="text" value={weight} onChange={(e) => setSex(e.target.value)} name={'sex'} placeholder={'sex'} />
          <input type="text" value={sets} onChange={(e) => setGoal(e.target.value)} name={'goal'} placeholder={'goal'} />
          <button type='submit'>Submit</button>
        </form>

        <button onClick={() => deleteProfile()}>
          Delete a Profile
        </button>
      </div>
    </div>
  ) : null;


}


export default ProfileDetails