import React, {  useEffect, useState  } from 'react'
import { API, APIKEY } from "../../config";
import Output from "../Output";
import { Link } from 'react-router-dom'
import "./Detail.css"

    export default function Detail(props) {
        const [id, setId] = React.useState();
        const [videos, setVideos] = useState();
      
        useEffect(() => {
          let id = props.match.params.id;
          setId(id);
          getVideos();
        }, []);
        const getVideos = async () => {
          const req = await fetch(API + APIKEY);
          const resp = await req.json();
      
          setVideos(resp.items);
        };
    return (
        <div>
        <iframe width="420" height="315"
        src={'https://www.youtube.com/embed/'+id}>
         
        </iframe>
        <Link to='/detail/'>
        <Output videos={videos} />
      </Link>
        </div>
        
    )
}
