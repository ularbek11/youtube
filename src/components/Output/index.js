import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import "./Output.css"

export default function Output(props) {
    let videos = props.videos
    return (
        <div className="cards">
        <div style={{ padding: 70 }}>
  <Grid container spacing={4}>
  {
    videos&& videos.map(video=>{
                return(
                    <div className='card'>
                    <div  key={video.id.videos}>
                    <Link to={"/detail/"+ video.id.videoId} key={video.id.videoId}>
                   <img src={video.snippet.thumbnails.medium.url}/>
                    <h5>{video.snippet.title}</h5>
                     <h5>{video.snippet.channelTitle}</h5>
                   
                   </Link>
                    </div>
                    </div>
                )
            })
        } 
    
  </Grid>
</div>
    </div>
        
    )
}
