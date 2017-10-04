import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchCategories, setSorting, setCommentSorting } from '../actions'
// import { Link } from 'react-router-dom'
// import '../styles/app.css'

class PostDetail extends Component {

  render () {
    return [
      <p key='1'>PostDetail</p>,
      <p key='2'>This is the post page</p>
    ]

  }
}

const mapStateToProps = state => ({
  posts: state.getPosts
})

export default connect(mapStateToProps)(PostDetail)
