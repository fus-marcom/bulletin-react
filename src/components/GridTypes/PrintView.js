import React from 'react'
import Grid from 'material-ui/Grid'
import PostPreview from '../PostPreview'

const PrintView = ({ posts }) => (
  <Grid container justify="center">
    <Grid item xs={12}>
      <h1>Today{"'"}s Bulletin</h1>
      {posts &&
        posts.edges.map(post => (
          <PostPreview
            view="print"
            key={post.node.id}
            title={post.node.title}
            content={post.node.content}
          />
        ))}
    </Grid>
  </Grid>
)

export default PrintView
