import React from 'react'
import GridView from './GridView'
import ListView from './ListView'

const GridRenderer = ({ viewtype, posts }) => {
  const grid = viewtype === 'grid'
  return (
    <div>
      {grid && <GridView posts={posts} />}
      {!grid && <ListView posts={posts} />}
    </div>
  )
}

export default GridRenderer
