import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'

function ExerciseDetails(props) {
  
  const  [selectExercise, setExercise] = useState('')
  const getExerciseDetail = async (id) => {
    const res = await axios.get("http://localhost:3001/api/exercises/read/:id")
  }

getExerciseDetail()

  useEffect(() => {
    let selectExercise = props.exercises.exercises.find(
      (exercise) => exercise.id === parseInt(props.match.params.id)
    )
    setExercise(selectExercise)
  }, [])
  
  
    return selectExercise ? (
      <div className='details'>
        <div className='detail-header'>
          <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h2>{selectExercise.exercise}</h2>
          </div>
        </div>
        <div className='info-wrapper'>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h3>Reps: {selectExercise.reps}</h3>
            <h3>Weight: {selectExercise.weight}</h3>
            <h3>Sets: {selectExercise.sets}</h3>
            <h3>Exercise Type: {selectExercise.type}</h3>
          </div>
        </div>
      </div>
  ) : null;     
}


export default ExerciseDetails;