import React from 'react'

export default function AddExercisePage(props) {

    const handleSubmit = (e) => {
        props.addExercise(e)
        props.history.push('/allexercises')

    }

    const newExercise = props.newExercise;

   
 
        return (
        <div>
        <h1 style={{ color: 'neongreen' }}>Add a New Exercise!</h1>
        <form onSubmit={handleSubmit}>
        <input
          type="text-area"
          value={newExercise.name}
          onChange={props.handleNewExercise}
          name={"name"}
          placeholder={"name"}
        />       
        
        <button>Submit</button>
      </form>
            
        </div>
    )
}

