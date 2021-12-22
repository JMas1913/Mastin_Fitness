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
        <input type="text" value={newExercise.name} onChange={ props.handleChange} name={'name'} placeholder={'name'} />
        <input type="text" value={newExercise.reps} onChange={ props.handleChange} name={'reps'} placeholder={'reps'} />
        <input type="text" value={newExercise.weight} onChange={ props.handleChange} name={'weight'} placeholder={'weight'} />
        <input type="text" value={newExercise.sets} onChange={ props.handleChange} name={'sets'} placeholder={'sets'} />
        <input type="text" value={newExercise.type} onChange={ props.handleChange} name={'type'} placeholder={'type'} />
        <button type='submit'>Submit</button>
      </form>
      </div>
    );
}



export default ExerciseForm