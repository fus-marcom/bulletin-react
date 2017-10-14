import React from 'react'
import Grid from 'material-ui/Grid'
import PostPreview from '../PostPreview'

const ListView = ({ posts }) => (
  <Grid container justify="center">
    <Grid item xs={12} sm={8} md={6}>
      {posts.edges.map(post => (
        <PostPreview
          key={post.node.id}
          id={post.node.id}
          date={post.node.date}
          imageURL={
            post.node.featuredImage && post.node.featuredImage.sourceUrl
          }
          title={post.node.title}
        />
      ))}
    </Grid>
  </Grid>
)

export default ListView
