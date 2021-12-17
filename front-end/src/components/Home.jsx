import React from 'react'

function Home(props) {
  return (
    <div className='homePage'>
      <div>
        <img 
        style={{  display: 'cover', 
                  width: '100%',
                  height: '100%'  }}
        src="https://images.unsplash.com/photo-1597299407241-638aa26e56c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2057&q=80"
        alt="smoke"
        />
      </div>
      <h2 style={{ color: 'neongreen' }}> Ready to get into shape! </h2>
    </div>
  )
}

export default Home;