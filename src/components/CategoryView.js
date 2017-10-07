import React from 'react'
import RenderPosts from '../components/renderPostPreview'

const CategoryView = ({ id, name, posts }) => {
  return (
    <div>
      <h1>Posts in {name} Category</h1>
      <br />
      <RenderPosts posts={posts} />
      <br />
      <hr />
      <br />
    </div>
  )
}

export default CategoryView
