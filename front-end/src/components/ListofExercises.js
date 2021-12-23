import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import axios from 'axios'


function ListofExercises(props) {
  const [exercises, setExercises] = useState([])
  
  const showExercise = (exercise) => {
    props.history.push(`/listofexercises/${exercise._id}`)
  }

  

  const getExercises = async () => {
    const res = await axios.get("http://localhost:3001/api/exercises/read")
    setExercises(res.data)
  }


  useEffect(() => {
    getExercises()
  }, [])


  return (
    <div key={exercises}>
      { exercises.exercises &&
      exercises.exercises.map((exercise) => (
        <div className="exercise-card" onClick={() => showExercise(exercise)}>
          <h3>{exercise.name}</h3>
        </div>
      ))}


    </div>
  )
}

export default ListofExercises