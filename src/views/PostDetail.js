import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { SinglePostDetail } from '../graphql/queries/posts'
// import { Link } from 'react-router-dom'
// import '../styles/app.css'

class PostDetail extends Component {
  constructor () {
    super()
    this.renderPost = this.renderPost.bind(this)
  }
  render () {
    const isLoading = this.props.data.loading
    return (
      <div>
        {isLoading && <h1>Loading...</h1>}
        {!isLoading && this.renderPost()}
      </div>
    )
  }
  renderPost () {
    const post = this.props.data.post
    const date = new Date(post.date).toLocaleDateString()
    return (
      <div style={{ border: '1px solid black', padding: '5px' }}>
        <h1>{post.title}</h1>
        <img
          alt=''
          style={{ height: '500px', width: '500px' }}
          src={post.featuredImage.sourceUrl}
        />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <h4>Author: {post.author.name}</h4>
        <h5>Date: {date}</h5>
      </div>
    )
  }
}

export default graphql(SinglePostDetail, {
  options: ({ match }) => ({ variables: { id: match.params.post_id } })
})(PostDetail)
