import { gql } from 'react-apollo'

export const getAllPosts = gql`
  query getAllPosts {
    posts {
      edges {
        node {
          id
          title
          date
          featuredImage {
            sourceUrl
          }
        }
      }
    }
  }
`

export const SinglePostDetail = gql`
  query SinglePostDetail($id: ID!) {
    post(id: $id) {
      id
      title
      date
      content
      author {
        name
      }
      featuredImage {
        sourceUrl
      }
    }
  }
`
