import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'

function ExerciseDetails(props) {
  
  const  [selectExercise, setExercise] = useState('')
  const getExerciseDetail = async (id) => {
    const res = await axios.get(`http://localhost:3001/api/exercises/read/${id}`)
  }

  getExerciseDetail(selectExercise._id)

  useEffect(() => {
    let selectExercise = props.exercises.exercises.find(
      (exercise) => exercise._id === props.match.params.id
    )
    setExercise(selectExercise)
  }, [])
  
  const putExercise = async (id) => {
    const res = await axios.put(
      `http://localhost:3001/api/exercise/${id}`,
      {
        name: props.exercises.exercises.name,
        reps: props.exercises.exercises.reps,
        weight: props.exercises.exercises.weight,
        sets: props.exercises.exercises.sets,
        type: props.exercises.exercises.type
      }
    )
    props.setExercise(res.data)
    props.history.push(`/listofexercises`)
  }


  const deleteExercise = async (id) => {
    const res = await axios.delete(`http://localhost:3001/api/exercise/${id}`)
    props.exercises.filter(props.exercises.exercises)
    // props.setExercises(res.data)
    // props.history.push(`/listofexercises`)
  }



  
    return selectExercise ? (
      <div className='details'>
        <div className='detail-header'>
          <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h2>{selectExercise.name}</h2>
          </div>
        </div>
        <div className='info-wrapper'>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <h3>Reps: {selectExercise.reps}</h3>
            <h3>Weight: {selectExercise.weight}</h3>
            <h3>Sets: {selectExercise.sets}</h3>
            <h3>Exercise Type: {selectExercise.type}</h3>
          </div>
        </div>
        <div>
          <button onClick={() => putExercise(selectExercise._id)}>
            Update an Exercise
          </button>

          <button onClick={() => deleteExercise(selectExercise._id)}>
            Delete an Exercise
          </button>
        </div>
      </div>
  ) : null;


  
  




}


export default ExerciseDetails;



