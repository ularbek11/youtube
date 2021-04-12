import React from 'react'
import { Link } from "react-router-dom";
import "./Search.css"


export default function Search({send, changeName, name}) {
  
    return (
     
        <div>
        <form onSubmit={send}>
        <div className="input">
          <input
          className="input2"
            value={name}
            placeholder="Введите запрос"
            onChange={(e) => changeName(e.target.value)}
          />
          <button className="button" type="submit">
            <i className=" fa-Search"></i>
          </button>
          
        </div>
      </form>
      <Link to="/">
      <img
          className="youtubelogo"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
          }
          />
          </Link>
      
        </div>
    )
}