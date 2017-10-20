import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import PostPreview from '../PostPreview'

class GridView extends Component {
  constructor (props) {
    super(props)

    this.truncateChecker = this.truncateChecker.bind(this)
  }

  truncateChecker (node) {
    let value = node.content
    if (value.length > 300) {
      return (
        value.substring(0, 300) +
        ` ... <a href="/post/${node.id}" class="PostPreview-titleColor-248" style="text-decoration: none">Continue Reading</a>`
      )
    } else {
      return value
    }
  }

  render () {
    let posts = this.props.posts
    return (
      <Grid container>
        {posts.edges.map(post => (
          <Grid key={post.node.id} item xs={6} sm={4} md={6} lg={6}>
            <PostPreview
              id={post.node.id}
              date={post.node.date}
              imageURL={
                post.node.featuredImage && post.node.featuredImage.sourceUrl
              }
              title={post.node.title}
              category={post.node.categories.edges[0].node.name}
              content={this.truncateChecker(post.node)}
            />
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default GridView
