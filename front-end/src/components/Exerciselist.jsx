import React from 'react'
import { Link} from "react-router-dom"

export default function Exerciselist(props) {

    const showExercise = (exercise) => {
      props.history.push(`/allexercises/${exercise.id}`)
    }


    return (
         <div>

       {props.exerciseData.map((exercise) => (
           <h3 style={{color: 'brightgeen'}}>Exercises</h3>
       ))}
      <Link to="/">
        <button style={{ background: "gray" }}>Home</button>
      </Link>


            
    </div>
     )
}
