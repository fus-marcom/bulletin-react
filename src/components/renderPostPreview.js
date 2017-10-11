import React from 'react'
import PostPreview from '../components/PostPreview'

const PostRenderer = ({ posts }) => {
  return (
    <div>
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
    </div>
  )
}

export default PostRenderer
