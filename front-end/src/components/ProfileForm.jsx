import React from 'react'


function ProfileForm(props) {
  
  const handleSubmit = (e) => {
    props.addProfile(e)
    props.history.push('/profilelistings')

    
  }

    const newProfile = props.newProfile
    return (
      <div>
      <h1>Complete the form</h1>
      <form onSubmit={ handleSubmit }>
        <input type="text" value={newProfile.name} onChange={ props.handleChange} name={'name'} placeholder={'name'} />
        <input type="text" value={newProfile.age} onChange={ props.handleChange} name={'age'} placeholder={'age'} />
        <input type="text" value={newProfile.sex} onChange={ props.handleChange} name={'sex'} placeholder={'sex'} />
        <input type="text-area" value={newProfile.goal} onChange={ props.handleChange} name={'Pounds you want to lose'} placeholder={'Pounds you want to lose'} />
        <button>Submit</button>
      </form>
      </div>
    );
}



export default ProfileForm