import React from 'react'

function Home() {
  return (
    <div className="home">
      <div>
        <h1>Mastin Fitness</h1>
        <h2>
          Your concierge Health and Wellness Coach!
        </h2>
      </div>
      <div>
        <img
          style={{ display: 'block', maxWidth: '25%',  alignItems: 'center'}}
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1675&q=80"
          alt="gym"
        />
      </div>
    </div>
  )
}

export default Home