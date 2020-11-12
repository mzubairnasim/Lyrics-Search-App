import React,{useState,useEffect} from 'react'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
export default function Lyrics(props) {
    const [loading, setloading] = useState(false)
    const [lyrics, setlyrics] = useState([])

    const api=`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=6809450facf7b1b9e5ab776a6ac20587`
    useEffect(() => {
        async function ly(){
        setloading(true)
       const res=await fetch(api)
       const data=await res.json()
       console.log(data)
       setlyrics(data.message.body.lyrics)
       setloading(false)
        }
        ly()
    }, [])

    return (
        <div>
                {loading?<h1>loading...</h1>: <p>{lyrics.lyrics_body===""?"sorry":lyrics.lyrics_body}</p>}
                <Link to='/'>Back</Link>
           
        </div>
    )
}
