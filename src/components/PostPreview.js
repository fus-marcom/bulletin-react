import React from 'react'
import { Link } from 'react-router-dom'

const PostPreview = props => {
  const date = new Date(props.date).toLocaleDateString()
  return (
    <div style={{ border: '1px solid black', padding: '5px' }}>
      <h1>{props.title}</h1>
      <img
        alt=''
        style={{ height: '500px', width: '500px' }}
        src={props.imageURL}
      />
      <br />
      <Link to={`/post/${props.id}`}>Read More </Link>
      <h5>Date: {date}</h5>
    </div>
  )
}

export default PostPreview
