import React from 'react'


function ExerciseForm(props) {
  
  const handleSubmit = (e) => {
    props.addExercise(e)
    props.history.push('/listings')
  }

    const newExercise = props.newExercise
    return (
      <div>
      <h1>Add A New Exercise</h1>
      <form onSubmit={ handleSubmit }>
        <input type="text" value={newExercise.exercise} onChange={ props.handleChange} name={'exercise'} placeholder={'name'} />
        <button>Submit</button>
      </form>
      </div>
    );
}


export default ExerciseForm