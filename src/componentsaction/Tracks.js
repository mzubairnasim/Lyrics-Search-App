import React,{useContext,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../GlobalC'
import { adddisplay } from './action'
import '../App.css'
export default function Tracks() {
    const {state,dispatch} = useContext(Context)
    const {tracks,heading}=state
    useEffect(() => {
      adddisplay(dispatch)
    }, [])
    return (
        <div className='container'>
        <div className='row'>
            <div className='col-lg-10  m-auto'>
            <h1 style={{fontFamily:"sans-serif"}} className='text-center'> {heading}</h1>
            <div className='main'>
            {tracks.map((value)=>{
                return <div className='card cardone text-center' style={{width:350,background:"white"}} >
                <div className='card-body'> 
                <h5 class="card-title">{value.track.track_name}</h5>
                    {/* <p>{value.track.track_name}</p> */}
                    <p class="card-text">{value.track.artist_name}</p>
                    <Link to={'/lyrics/'+value.track.track_id}>Get Lyrics</Link>
                    </div>
                </div>
            })}
            </div>
            </div>
        </div>
           
        </div>
    )
}
