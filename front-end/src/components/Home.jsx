import React from 'react'

function Home() {
  return (
    <div className="home">
      <div>
        <img
          style={{ display: 'cover', maxWidth: '100%' }}
          src="https://images.unsplash.com/photo-1597299407241-638aa26e56c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2057&q=80"
          alt="bacground"
        />
      </div>
      <div>
        <h1>Mastin Fitness</h1>
        <h2>
          Your concierge Health and Wellness Coach.
        </h2>
      </div>
    </div>
  )
}

export default Home