import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'




function Workout(props) {
  const [coreWorkouts, changeCoreWorkouts] = useState([])
  const [legWorkouts, changeLegWorkouts] = useState([])
  const [pushWorkouts, changePushWorkouts] = useState([])
  const [pullWorkouts, changePullWorkouts] = useState([])
 


  const showWorkout = () => {
    const coreworkouts = [ ]
    props.exercises.exercises.forEach(exercise => {
      if (exercise.type === "core") {
        coreworkouts.push(exercise)
      } 
      else if (exercise.type === "legs") {
        legWorkouts.push(exercise)
      }
      else if (exercise.type === "pulling") {
        pullWorkouts.push(exercise)
      }
      else if (exercise.type === "pushing") {
        pushWorkouts.push(exercise)
      }
    });

    changeCoreWorkouts(coreworkouts)
    changeLegWorkouts(legWorkouts)
    changePullWorkouts(pullWorkouts)
    changePushWorkouts(pushWorkouts)
  }

  return (
    <div>
      Choose two (2) from each!

      <button onClick={showWorkout}>
        Workout Button! 
      </button>
      <div>
        --Core Exercises:--
        {coreWorkouts.map((workout) => (
          <div>
            {workout.name}
          </div>
        ))}
      </div>
      <div>
        --Leg Exercises:--
        {legWorkouts.map((workout) => (
          <div>
            {workout.name}
          </div>
        ))}
      </div>
      <div>
        --Pushing Exercises:--
        {pushWorkouts.map((workout) => (
          <div>
            {workout.name}
          </div>
        ))}
      </div>
      <div>
        --Pulling Exercises:--
        {pullWorkouts.map((workout) => (
          <div>
            {workout.name}
          </div>
        ))}
      </div>
      

    </div>
    
  )
}

export default Workout