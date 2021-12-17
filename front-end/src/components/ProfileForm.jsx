import React from 'react'


function Profile(props) {
  
  const handleSubmit = (e) => {
    props.onSubmit(e)
    props.history.push('/newprofile')
  }

    const newProfile = props.newProfile
    return (
      <div>
      <h1>Welcome</h1>
      <form onSubmit={ handleSubmit }>
        <input type="text" value={newProfile.profile} onChange={ props.handleChange} name={'Sex'} placeholder={'Sex'} />
        <input type="text" value={newProfile.profile} onChange={ props.handleChange} name={'Age'} placeholder={'Age'} />
        <input type="text" value={newProfile.profile} onChange={ props.handleChange} name={'How much weight would you like to lose?'} placeholder={'How much weight would you like to lose?'} />
        <button>Submit</button>
      </form>
      </div>
    );
}


export default Profile;