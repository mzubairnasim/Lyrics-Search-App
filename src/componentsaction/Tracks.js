import React,{useContext,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../GlobalC'
import { adddisplay } from './action'

export default function Tracks() {
    const {state,dispatch} = useContext(Context)
    const {tracks,heading}=state
    useEffect(() => {
      adddisplay(dispatch)
    }, [])
    return (
        <div>
        
            <h1>{heading}</h1>
            {tracks.map((value)=>{
                return <div>
                    <p>{value.track.track_name}</p>
                    <p>{value.track.artist_name}</p>
                    <Link to={'/lyrics/'+value.track.track_id}>Get Lyrics</Link>
                </div>
            })}
        </div>
    )
}
