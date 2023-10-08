import React from 'react'
import "./Post.css"
import Postcard from '../../component/Postcard/Postcard'
import data from "./../../configs/readdata.json"
function Post() {
  return (
    <div className='card-contain'>
        {
      data.map((post , index)=>{
               return <Postcard key={index} img={post.img} id={post.id} title={post.title} description={post.description} author={post.auther}/>
      })
      }
     </div>
  )
}

export default Post
