import React from 'react'
import GridView from './GridView'
import ListView from './ListView'
import PrintView from './PrintView'

const GridRenderer = ({ viewtype, posts }) => {
  const grid = viewtype === 'grid'
  return (
    <div>
      {viewtype === 'print' && <PrintView posts={posts} />}
      {grid && <GridView posts={posts} />}
      {!grid && viewtype !== 'print' && <ListView posts={posts} />}
    </div>
  )
}

export default GridRenderer
