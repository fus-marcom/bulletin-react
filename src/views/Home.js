import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
// import { Link } from 'react-router-dom'
// import '../styles/app.css'

class Home extends Component {
  componentWillMount () {
    this.props.fetchData()
  }

  render () {
    return (
      <div>
        {this.props.posts &&
          Object.values(this.props.posts)
          .map(post =>
            <h1 key={post.id}>{post.title.rendered}</h1>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.receivePosts
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  fetchData: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
