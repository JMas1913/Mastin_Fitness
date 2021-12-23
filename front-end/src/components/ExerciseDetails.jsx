import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

function ExerciseDetails(props) {
  let history = useHistory()
  let {id} = useParams()
  const [selectExercise, setExercise] = useState('')
  const [name, setName] = useState('')
  const [reps, setReps] = useState('')
  const [weight, setWeight] = useState('')
  const [sets, setSets] = useState('')
  const [type, setType] = useState('')

  const getExerciseDetail = async () => {
    const res = await axios.get(`http://localhost:3001/api/exercises/read/${id}`)
    setExercise(res.data.exerciseId)
  }

 

  useEffect(() => {
    getExerciseDetail()
    setExercise(selectExercise)
    setName(selectExercise.name)
    setReps(selectExercise.reps)
    setWeight(selectExercise.weight)
    setSets(selectExercise.sets)
    setType(selectExercise.type)
  }, [])

  const putExercise = async () => {
    const res = await axios.put(
      `http://localhost:3001/api/exercise/${id}`,
      {
        name,
        reps,
        weight,
        sets,
        type
      }
    )
    history.push(`/listofexercises`)
  }


  const deleteExercise = async () => {
    const res = await axios.delete(`http://localhost:3001/api/exercise/${id}`)
    props.exercises.filter(props.exercises.exercises)
  }




  return selectExercise ? (
    <div className='details'>
      <div className='detail-header'>
        <div style={{ minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2>{selectExercise.name}</h2>
        </div>
      </div>
      <div className='info-wrapper'>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h3>Reps: {selectExercise.reps}</h3>
          <h3>Weight: {selectExercise.weight}</h3>
          <h3>Sets: {selectExercise.sets}</h3>
          <h3>Exercise Type: {selectExercise.type}</h3>
        </div>
      </div>
      <div>
        <form onSubmit={() => putExercise()}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} name={'name'} placeholder={'name'} />
          <input type="text" value={reps} onChange={(e) => setReps(e.target.value)} name={'reps'} placeholder={'reps'} />
          <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} name={'weight'} placeholder={'weight'} />
          <input type="text" value={sets} onChange={(e) => setSets(e.target.value)} name={'sets'} placeholder={'sets'} />
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} name={'type'} placeholder={'type'} />
          <button type='submit'>Submit</button>
        </form>

        <button onClick={() => deleteExercise()}>
          Delete an Exercise
        </button>
      </div>
    </div>
  ) : null;








}


export default ExerciseDetails;



