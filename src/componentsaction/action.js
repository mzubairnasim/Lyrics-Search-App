

export const adddisplay=async(dispatch)=>{
    dispatch({type:"three",payload:true})
    const api=`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=it&f_has_lyrics=1&apikey=6809450facf7b1b9e5ab776a6ac20587`
      
       const res=await fetch(api)
       const data=await res.json()
    //    console.log(data)
       dispatch({type:'one',payload:data.message.body.track_list})
       dispatch({type:'two',payload:"Top 5 Tracks"})
       dispatch({type:"three",payload:false})
}
