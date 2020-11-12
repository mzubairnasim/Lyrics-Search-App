import React,{useContext,useState} from 'react'
import { Context } from '../GlobalC'

export default function Search() {
    const {state,dispatch} = useContext(Context)
    const [userInput, setUserInput] = useState("")

    const api=`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${userInput}&apikey=6809450facf7b1b9e5ab776a6ac20587`
   
    const search=async()=>{
        const res=await fetch(api)
        const data=await res.json()
        // console.log(data)
        dispatch({type:"one",payload:data.message.body.track_list,})
        // setstate({
        //     tracks:data.message.body.track_list,
        // })
        
    }

    return (
        <div className='container'>
        <div className='row'>
        <div className='col-lg-10 offfset-2 m-auto'>

            <div class="form-group mt-3">
            <label>Song Name</label>
            <input class="form-control" type='text' value={userInput} onChange={e=>setUserInput(e.target.value)}/><br/>
            </div>
            <button onClick={search} class="btn btn-primary">Search</button>

            </div>
        </div>
     
          
        </div>
    )
}
