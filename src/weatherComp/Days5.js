import React,{useState,useEffect} from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// const key='270afbc518467f7d9f0d40df7450164c'
export default function Days5(props) {
    const ans=props.match.params.id
    const [loading, setloading] = useState(false)
    const [data, setdata] = useState([])

  useEffect(async() => {
    setloading(true)
   const res=await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${ans}&appid=270afbc518467f7d9f0d40df7450164c}`)
   const data=await res.json()
   console.log(data)
   setdata(data.list)
    setloading(false)
},[])

            
    return (
        <div className='container'>
       
        {loading?<h1>loading...</h1>:
        <div>
             <h1>5 Days forecast</h1>
             <h1><a href='/'>back</a></h1>
            
             <div className='one'>
             {data.map((value)=>{
                return <div  className='card m-3'>
                    <p>{value.dt_txt}</p>
                    <p>{(value.main.temp-273).toFixed(2)}</p>
                    <p>{value.weather[0].description}</p>  
                    <img src={`https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`} style={{width:100,height:100}}/>
                </div>
            })}
             </div>
            
        </div>
        }
        
        </div>
    )
}
