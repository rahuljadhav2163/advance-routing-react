import { useState ,useEffect } from "react"
import React  from 'react'
import "./Readpost.css"
import { useParams } from 'react-router-dom'
import data from "./../../configs/readdata.json"
function Readpost() {
    const {id} = useParams();
    const [post , setpost] = useState ({})

   useEffect(()=>{
    data.forEach((postobj)=>{
        if(postobj.id == id){
            setpost(postobj)
        }  

    })
   }, [id]
   )
  return (
    
    <div>
        <h1 className="ttitle">{post.title}</h1>
        <p className="dec">{post.description}</p>
        <p className="auth">- BY {post.auther}</p>
        <p className="ddata">{post.date}</p>
        <p className="text">{post.content}</p>
    </div>
  )
}

export default Readpost