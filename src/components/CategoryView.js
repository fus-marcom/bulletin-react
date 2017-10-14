import React from 'react'
import GridRenderer from '../components/GridTypes/GridRenderer'

const CategoryView = ({ id, name, posts }) => {
  return (
    <div>
      <h1>Posts in {name} Category</h1>
      <br />
      <GridRenderer posts={posts} />
      <br />
      <hr />
      <br />
    </div>
  )
}

export default CategoryView
