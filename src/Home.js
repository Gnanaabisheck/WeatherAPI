import React from 'react'

const Home = () => {
  return (
    <div>
       <img src="https://images.pexels.com/photos/459458/pexels-photo-459458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  id='img1'/>

       <div className="para">
        <h2>
            Welcome to the site get started by click the button below 
        </h2>
        <br />
        <br />
        <button id='btn'>Get Started</button>
       </div>
    </div>
  )
}

export default Home