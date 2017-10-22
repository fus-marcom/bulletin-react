import React from 'react'
import PostPreview from '../PostPreview'
import Masonry from 'react-masonry-component'
import '../../styles/grid.css'

class GridView extends React.Component {
  state = {
    test: ''
  }
  render () {
    const { posts } = this.props
    return <div className="row">{this.renderPosts(posts)}</div>
  }
  renderPosts (posts) {
    return (
      <div className="container-fluid">
        <Masonry>
          {posts.edges.map((post, i) => (
            <div className="col s12 m12 l6 xl4" key={i}>
              <PostPreview
                date={post.node.date}
                imageURL={
                  post.node.featuredImage && post.node.featuredImage.sourceUrl
                }
                title={post.node.title}
                category={post.node.categories.edges[0].node.name}
                content={post.node.content}
                trim={true}
              />
            </div>
          ))}
        </Masonry>
      </div>
    )
  }
}

export default GridView
