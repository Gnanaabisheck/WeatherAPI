import React, {useState } from 'react'
import {Col, Container,FormControl,Image, Row, Table} from 'react-bootstrap'
import { WiBarometer, WiHumidity, WiStrongWind, WiThermometer, WiWindDeg, WiWindy } from "react-icons/wi";
import { FaGlobe } from "react-icons/fa";
import  axios from 'axios'


const Api = () => {
  const key='16b9af77b1a9035b48dd4481614d0106';
  const[city,setCity]=useState('')
  const[data,setData]=useState()
  
  const fetchData= async()=>{
    try{
      const responce=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
      setData(responce.data)
    }
    catch(err){
      alert(`Sorry ${city} Was Not Found in Our Database`)
    }
  }
  
  return (
    <div className='body'>
     <Container className='mt-5'>
    <div className="input d-flex">
    
                   <div >
                       <FormControl type="text" 
                       placeholder='Enter City Name'
                       className='w-100 py-3 my-1 fs-5 text-capitalize px-4'
                       value={city}
                       onChange={(e)=>setCity(e.target.value)}
                       />
                    </div>
     
      <div className="search">
      <button className='btn btn-primary mx-3 py-2 my-2 fs-4'id='button' onClick={fetchData}>
                        Search
                      </button>
      </div>
    
    </div>
     </Container>

                    {data && <div>
                      <Container className='mt-5 '>
                <div className="all-pr">
                <Row>
                  <Col md={6} sm={6} className=''>
                    <div className="details">
                      
                        <Row className='d-flex'>
                          <Col md={6}  xs={6} className='all mx-auto'>
                           <p className='city-name'>
                              {data.name}
                           </p>
                           <p className='country '>
                            {data.sys.country}
                           </p>
                           <p className='temp'>
                             {(data.main.temp).toFixed()}&deg; C
                           </p>
                          </Col>
                          <Col  md={6} xs={6}>
                            <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} fluid id='image'/>
                            <p className='status'>
                              {data.weather[0].main}
                            </p>
                          </Col>
                        </Row>
                      
                    </div>
                    <div className="details-2">
                     
                       <Container>
                       <Row>
                          <Col  md={5} xs={4}  className='me-4'>
                          <div className='preassure'>
                            <div className="icon">
                            <WiBarometer/>
                            </div>
                           <p> Air Pressure</p>
                           <p> {data.main.pressure} mb</p>
                          </div>
                          </Col>
                          <Col md={5} xs={4} className='ms-4'>
                          <div className='humidity'>
                            <div className="icon">
                            <WiHumidity/>
                            </div>
                            <p>Humidity</p>
                            <p>{data.main.humidity} %</p>
                          </div>
                          </Col>
                         </Row>
                       </Container>
                         <Container>
                         <Row>
                          <Col  md={5} xs={4} className='me-4'>
                          <div className='speed'>
                           <div className="icon">
                           <WiStrongWind/>
                           </div>
                          <p> Wind Speed</p>
                          <p>{data.wind.speed} Km/hr</p>
                          </div>
                          </Col>
                          <Col  md={5} xs={4} className='ms-4'>
                          <div className='deg'>
                            <div className="icon">
                            <WiWindDeg/>
                            </div>
                           <p> Wind Degree</p>
                           <p>{data.wind.deg}&deg;</p>
                          </div>
                          </Col>
                        </Row>
                         </Container>
                      
                    </div>
                  </Col>
                  


                 
                 <Col className='mt-4 mb-5' md={6} sm={6}>
                  <div className="add-info">
                      <Table variant='dark'>
                        <thead>
                          <tr>
                            <td colSpan={3} className='text-center p-3 fs-3'>
                              Other Informations
                            </td>
                          </tr>
                     </thead>
                    <tbody>

                    <tr>
                    
                    <td>
                    <WiThermometer id='icon' className='fs-1'/>
                    </td>
                  
                     <td >Max Temprature</td>  
                 
                    <td>{data.main.temp_max}&deg;C</td>      
                  </tr>
                <tr>
                     <td><WiThermometer id='icon'/></td>
                     <td>Min Temprature</td>  
               
                   <td>{data.main.temp_min}&deg;C</td>
                 
                </tr>
                <tr>
             
                    <td> <FaGlobe id='icon'/></td>
                   <td>Latitude</td>
                   
                     <td>{data.coord.lat}</td>           
                </tr>             
                 <tr>

                   <td><FaGlobe id='icon'/></td>
                     <td>Longitude</td>  
                   <td>{data.coord.lon}</td>

                 </tr>

                 <tr>
                   <td> <WiWindy id='icon'/></td> 
                    <td>Feels Like</td>                
                    <td> {data.main.feels_like}&deg;C</td>
                  </tr>
                    </tbody>
                      </Table>
                  </div> 

                  </Col>
                 
                </Row>
                </div>
      </Container>
                      </div>}
      
    </div>
  )
}

export default Api