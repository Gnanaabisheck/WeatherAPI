import React, { useState } from 'react'
import img from '../src/Images/img.png'
import axios from 'axios'
const Api = () => {
  const[city,setCity]=useState('')
  const[data,setData]=useState()
  const key='16b9af77b1a9035b48dd4481614d0106';
  const fetchData= async ()=>{
   try{
    const responce = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    setData(responce.data)
   }
   catch{
    alert("May be Some Techinical Error Occured Or Kindly Recheck What You Have Entered")
   }
    
  }
  return (
    <div className='outerbox'>
      <h2>
        Weather App
      </h2>
      <div className="input">
        <input type="text" 
        placeholder='Enter City Name....'
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        />
        <button onClick={fetchData}>Search</button>
        </div>

       {data && (
           <div className="all">
             <div className="temp">
        <div className="left">
      <img src={img} alt="" />
        </div>
        <div className="right">
          <p>
            {data.name}
          </p>
          <p>
            {Math.ceil(data.main.temp).toString().slice(0,2)} &#8451;
          </p>
          
        </div>
      </div>
      <div className="details">
        <div className="preasure">
        <div className="title">
            <p>
              Pressure
            </p>
         </div>
             <p>
               {data.main.pressure} mb
             </p>
        </div>
        <div className="humidity">
          <div className="title">
         <p>
          Humidity
         </p>
          </div>
          <p>
            {data.main.humidity} %
          </p>
        </div>
       
      </div>
     <div className="det-2">
     <div className="wind-speed">
     <div className="title">
      <p>
        Wind Speed
      </p>
         
         </div>
          <p>
           {data.wind.speed} Km/hr
          </p>
        </div>
        <div className="wind-deg">
        <div className="title">
         <p>
          Wind Degree
         </p>
         </div>
          <p>{data.wind.deg} &#176;
          
          </p>
        </div>
     </div>
           </div>

       )}
      
     
    </div>
  )
}

export default Api