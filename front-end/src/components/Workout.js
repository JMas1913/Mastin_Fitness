import React, { useEffect, useState } from 'react'


const workout = () => {
    useEffect(() => {
        async function getExercises() {
          const res = await axios.get("http://localhost:3001/api/exercises")
          console.log(res)
        }
        getExercises ()
      }, [])


    // Math.random.exercises * 6
}

workout()

export default Workout;