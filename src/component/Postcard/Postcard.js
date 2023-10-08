import React from 'react'
import "./Postcard.css"
import {Link} from "react-router-dom"
function Postcard({img,title,description,author,id}) {
  return (
    <div className='card'>
        <img className='img' src={img}/>
        <h2 className='title'>{title}</h2>
        <p className='description'>{description}</p>
        <p className='author'> - By {author}</p>
          <Link to={`/post/read/${id}`}><button className='btn'>Read More</button></Link>
    </div>
  )
}

export default Postcard