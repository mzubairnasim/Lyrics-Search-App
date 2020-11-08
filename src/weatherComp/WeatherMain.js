import React,{createContext,useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function WeatherMain() {
  const key='270afbc518467f7d9f0d40df7450164c'
 

  const [loading, setloading] = useState(false)
  const [temp, settemp] = useState("")
  const [country, setcountry] = useState("")
  const [city, setcity] = useState("")
  const [desc, setdesc] = useState("")
  const [icon, seticon] = useState("")
  const [id, setid] = useState("")
  const [input, setinput] = useState("")
  const [name, setname] = useState("karachi")

  const api=`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}`
 
  const getweather=()=>{
      setname(input)
  }

  useEffect(()=>{
      search()
  },[name])

  const search=async() => {
    setloading(true)
   const res=await fetch(api)
   const data=await res.json()
   console.log(data)
    setcity(data.name)
    setcountry(data.sys.country)
    // settemp(data.main.temp)
    convert((data.main.temp).toFixed(2))
    setdesc(data.weather[0].description)
    seticon(data.weather[0].icon)
    setid(data.id)
    setloading(false)
}

    const convert=(abc)=>{
        const change=Math.round(abc-273)
        settemp(change)
    }

  return (
    <div className='container'>
  
    <div className='row'>
      <div className='col-lg-8 offset-2'>
      <div class="form-group mt-3">
            <label for="exampleInputEmail1">Enter Name</label>
            <input class="form-control" type='text' value={input} onChange={e=>setinput(e.target.value)}/>
         </div>
         <button class="btn btn-primary m-auto" onClick={getweather}>Search</button>
      </div>
    </div> 
    {loading?<h1>Loading..</h1>:
    <div className='row'>
    <div className='col-lg-8 offset-2 text-center'>
     <h2>{city}</h2>
      <h2>{country}</h2>
      { <h2>{temp}'C</h2>}
      <p>{desc}</p>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} style={{width:100,height:100}}/>
           <br/>
      <Link to={'/days/'+ id}>Click to Get Next 5-days weather</Link>
      </div>
    </div>
    }
     
    </div>
  )
}
